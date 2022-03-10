//
//  RNHealthTracker.swift
//  RNFitnessTracker
//
//  Created by Matas on 2022-02-10.
//  Copyright © 2022 Facebook. All rights reserved.
//

import Foundation
import HealthKit

@objc(RNHealthTracker)
class RNHealthTracker: NSObject {
    private let healthStore: HKHealthStore = HKHealthStore()

    @objc static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    private func formatHKQuantityTypeIdentifier(_ dataKey: String) -> String {
        "HKQuantityTypeIdentifier\(dataKey)"
    }

    private func transformDataKeyToHKQuantityType(_ dataKey: String) -> HKQuantityType? {
        HKObjectType.quantityType(forIdentifier: HKQuantityTypeIdentifier(rawValue: formatHKQuantityTypeIdentifier(dataKey)))
    }

    private func transformDataKeyToHKSampleType(_ dataKey: String) -> HKSampleType? {
        HKSampleType.quantityType(forIdentifier: HKQuantityTypeIdentifier(rawValue: formatHKQuantityTypeIdentifier(dataKey)))
    }

    private func transformDataKeyToHKObject(_ dataKey: String) -> HKObjectType? {
        if dataKey == "Workout" {
            return HKObjectType.workoutType()
        } else {
            return HKObjectType.quantityType(forIdentifier: HKQuantityTypeIdentifier(rawValue: formatHKQuantityTypeIdentifier(dataKey)))
        }
    }

    private func standardErrorCode(_ code: Int?) -> String? {
        let descriptions = [
            "E_UNKNOWN",
            "E_DEVELOPER_ERROR",
            "E_EXECUTING_QUERY",
            "E_DEVICE_NOT_SUPPORTED",
            "E_DATABASE_INACCESSIBLE"
        ]
        guard let code = code else {
            return descriptions[0]
        }

        if code > descriptions.count - 1 {
            return descriptions[0]
        }
        return descriptions[code]
    }

    @objc public func getReadStatus(_ dataTypeIdentifier: String, unit: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        let currentDate = Date()
        let start: Date? = RNFitnessUtilsTestttttttttt.daysAgo(date: currentDate, 720)
        let end: Date? = RNFitnessUtilsTestttttttttt.endOfDay(date: currentDate)

        guard let sampleType = transformDataKeyToHKSampleType(dataTypeIdentifier) else {
            return reject(standardErrorCode(1), "Invalid dataTypeIdentifier.", nil)
        }
        let predicate: NSPredicate = HKQuery.predicateForSamples(withStart: start, end: end, options: HKQueryOptions(rawValue: 0))
        let sortDescriptor: NSSortDescriptor = NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: true)

        let sampleQuery: HKSampleQuery = HKSampleQuery.init(sampleType: sampleType, predicate: predicate, limit: 1, sortDescriptors: [sortDescriptor]) { (query: HKSampleQuery, samples: [HKSample]?, error: Error?) in
            
            if let error = error {
                if error.localizedDescription == "Authorization not determined" {
                    resolve(0)
                } else {
                    reject(self.standardErrorCode(2), error.localizedDescription, error)
                }
                
                return
            }
            
            guard let samples = samples as? [HKQuantitySample] else {
                reject(self.standardErrorCode(0), "Error getting samples as HKQuantitySample", nil)
                return
            }
            
            var quantitySum = 0.0;
            for sample in samples {
                let value: Double = sample.quantity.doubleValue(for: HKUnit.init(from: unit))
                quantitySum += value
            }

            if quantitySum > 0 {
                resolve(2)
            } else {
                resolve(1)
            }
        }

        healthStore.execute(sampleQuery)
    }
    
    @objc public func authorize(_ shareTypes: [String], readTypes: [String], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        if !HKHealthStore.isHealthDataAvailable() {
            reject(self.standardErrorCode(3), "Health data is not supported on this device.", nil)
            return
        }
        
        var read: Set<HKObjectType>? = nil
        var toShare: Set<HKSampleType>? = nil
        
        if !readTypes.isEmpty {
            read = Set()
            
            for dataType in readTypes {
                guard let object: HKObjectType = transformDataKeyToHKObject(dataType) else {
                    reject(standardErrorCode(1), "Invalid read dataTypes.", nil)
                    return
                }
                read!.insert(object)
            }
        }
        
        if !shareTypes.isEmpty {
            toShare = Set()
            
            for dataType in shareTypes {
                guard let object: HKSampleType = transformDataKeyToHKSampleType(dataType) else {
                    reject(standardErrorCode(1), "Invalid share dataTypes.", nil)
                    return
                }
                toShare!.insert(object)
            }
        }
        
        healthStore.requestAuthorization(toShare: toShare, read: read) { success, error in
            if let error = error {
                reject(self.standardErrorCode(nil), error.localizedDescription, error)
            } else {
                resolve(true)
            }
        }
    }
    
    @objc public func getStatisticTotalForToday(_ dataTypeIdentifier: String, unit: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        let currentDate = Date()
        let start: Date = RNFitnessUtilsTestttttttttt.startOfDay(date: currentDate)
        let end: Date = RNFitnessUtilsTestttttttttt.endOfDay(date: start)
        var interval: DateComponents = DateComponents()
        interval.day = 1
        
        guard let quantityType = transformDataKeyToHKQuantityType(dataTypeIdentifier) else {
            return reject(standardErrorCode(1), "Invalid dataTypeIdentifier.", nil)
        }
        
        // Create the query.
        let query = HKStatisticsCollectionQuery(quantityType: quantityType,
                                                quantitySamplePredicate: nil,
                                                options: .cumulativeSum,
                                                anchorDate: start,
                                                intervalComponents: interval)
        
        // Set the results handler.
        query.initialResultsHandler = { (query: HKStatisticsCollectionQuery, results: HKStatisticsCollection?, error: Error?) in
            
            // Handle errors here.
            if let error = error as? HKError {
                switch (error.code) {
                case .errorDatabaseInaccessible:
                    // HealthKit couldn't access the database because the device is locked.
                    reject(self.standardErrorCode(4), error.localizedDescription, error)
                    return
                default:
                    // Handle other HealthKit errors here.
                    reject(self.standardErrorCode(nil), error.localizedDescription, error)
                    return
                }
            }
            
            guard let statsCollection = results else {
                // You should only hit this case if you have an unhandled error. Check for bugs
                // in your code that creates the query, or explicitly handle the error.
                reject(self.standardErrorCode(nil), "unhandled error getting results.", error)
                return
            }
            
            statsCollection.enumerateStatistics(from: start, to: end) { (result: HKStatistics, stop: UnsafeMutablePointer<ObjCBool>) in
                guard let quantity: HKQuantity = result.sumQuantity() else {
                    reject(self.standardErrorCode(nil), "cumulativeSum option was not set.", error)
                    return
                }
                
                let value: Double = quantity.doubleValue(for: HKUnit.init(from: unit))
                resolve("\(value)")
            }
        }
        
        healthStore.execute(query)
    }
    
    @objc public func getStatisticTotalForWeek(_ dataTypeIdentifier: String, unit: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        let currentDate = Date()
        let end: Date = RNFitnessUtilsTestttttttttt.endOfDay(date: currentDate)
        let start: Date = RNFitnessUtilsTestttttttttt.startOfXDaysAgo(date: end, numberOfDays: 6)
        var interval: DateComponents = DateComponents()
        interval.day = 1
        
        guard let quantityType = transformDataKeyToHKQuantityType(dataTypeIdentifier) else {
            return reject(standardErrorCode(1), "Invalid dataTypeIdentifier.", nil)
        }
        
        // Create the query.
        let query = HKStatisticsCollectionQuery(quantityType: quantityType,
                                                quantitySamplePredicate: nil,
                                                options: .cumulativeSum,
                                                anchorDate: start,
                                                intervalComponents: interval)
        
        // Set the results handler.
        query.initialResultsHandler = { (query: HKStatisticsCollectionQuery, results: HKStatisticsCollection?, error: Error?) in
            
            // Handle errors here.
            if let error = error as? HKError {
                switch (error.code) {
                case .errorDatabaseInaccessible:
                    // HealthKit couldn't access the database because the device is locked.
                    reject(self.standardErrorCode(4), error.localizedDescription, error)
                    return
                default:
                    // Handle other HealthKit errors here.
                    reject(self.standardErrorCode(nil), error.localizedDescription, error)
                    return
                }
            }
            
            guard let statsCollection = results else {
                // You should only hit this case if you have an unhandled error. Check for bugs
                // in your code that creates the query, or explicitly handle the error.
                reject(self.standardErrorCode(nil), "unhandled error getting results.", error)
                return
            }
            
            var total: Double = 0;
            
            statsCollection.enumerateStatistics(from: start, to: end) { (result: HKStatistics, stop: UnsafeMutablePointer<ObjCBool>) in
                guard let quantity: HKQuantity = result.sumQuantity() else {
                    reject(self.standardErrorCode(nil), "cumulativeSum option was not set.", error)
                    return
                }
                
                let value: Double = quantity.doubleValue(for: HKUnit.init(from: unit))
                total += value;
            }
            
            if unit == HKUnit.count().unitString {
                resolve("\(Int(total))")
            } else {
                resolve("\(total)")
            }
        }
        
        healthStore.execute(query)
    }

    @objc public func queryTotal(_ dataTypeIdentifier: String, unit: String, start: NSNumber, end: NSNumber, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        
        let startDate = Date(timeIntervalSince1970: TimeInterval(start.intValue / 1000))
        let endDate = Date(timeIntervalSince1970: TimeInterval(end.intValue / 1000))
        var interval: DateComponents = DateComponents()
        interval.day = 1

        guard let quantityType = transformDataKeyToHKQuantityType(dataTypeIdentifier) else {
            return reject(standardErrorCode(1), "Invalid dataTypeIdentifier.", nil)
        }

        // Create the query.
        let query = HKStatisticsCollectionQuery(quantityType: quantityType,
                                                quantitySamplePredicate: nil,
                                                options: .cumulativeSum,
                                                anchorDate: startDate,
                                                intervalComponents: interval)

        // Set the results handler.
        query.initialResultsHandler = { (query: HKStatisticsCollectionQuery, results: HKStatisticsCollection?, error: Error?) in

            // Handle errors here.
            if let error = error as? HKError {
                switch (error.code) {
                case .errorDatabaseInaccessible:
                    // HealthKit couldn't access the database because the device is locked.
                    reject(self.standardErrorCode(4), error.localizedDescription, error)
                    return
                default:
                    // Handle other HealthKit errors here.
                    reject(self.standardErrorCode(nil), error.localizedDescription, error)
                    return
                }
            }

            guard let statsCollection = results else {
                // You should only hit this case if you have an unhandled error. Check for bugs
                // in your code that creates the query, or explicitly handle the error.
                reject(self.standardErrorCode(nil), "unhandled error getting results.", error)
                return
            }

            var total: Double = 0;

            statsCollection.enumerateStatistics(from: startDate, to: endDate) { (result: HKStatistics, stop: UnsafeMutablePointer<ObjCBool>) in
                if let quantity: HKQuantity = result.sumQuantity() {
                    let value: Double = quantity.doubleValue(for: HKUnit.init(from: unit))
                    total += value;
                }
            }

            if unit == HKUnit.count().unitString {
                resolve("\(Int(total))")
            } else {
                resolve("\(total)")
            }
        }

        healthStore.execute(query)
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
            self.healthStore.stop(query)
        }
    }
    
    @objc public func getStatisticWeekDaily(_ dataTypeIdentifier: String, unit: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        let currentDate = Date()
        let end = RNFitnessUtilsTestttttttttt.endOfDay(date: currentDate)
        let start = RNFitnessUtilsTestttttttttt.startOfXDaysAgo(date: end, numberOfDays: 6)
        var interval: DateComponents = DateComponents()
        interval.day = 1
        
        guard let quantityType = transformDataKeyToHKQuantityType(dataTypeIdentifier) else {
            return reject(standardErrorCode(1), "Invalid dataTypeIdentifier.", nil)
        }
        
        // Create the query.
        let query = HKStatisticsCollectionQuery(quantityType: quantityType,
                                                quantitySamplePredicate: nil,
                                                options: .cumulativeSum,
                                                anchorDate: start,
                                                intervalComponents: interval)
        
        // Set the results handler.
        query.initialResultsHandler = { (query: HKStatisticsCollectionQuery, results: HKStatisticsCollection?, error: Error?) in
            
            // Handle errors here.
            if let error = error as? HKError {
                switch (error.code) {
                case .errorDatabaseInaccessible:
                    // HealthKit couldn't access the database because the device is locked.
                    reject(self.standardErrorCode(4), error.localizedDescription, error)
                    return
                default:
                    // Handle other HealthKit errors here.
                    reject(self.standardErrorCode(nil), error.localizedDescription, error)
                    return
                }
            }
            
            
            
            guard let statsCollection = results else {
                // You should only hit this case if you have an unhandled error. Check for bugs
                // in your code that creates the query, or explicitly handle the error.
                reject(self.standardErrorCode(nil), "unhandled error getting results.", error)
                return
            }
            
            var data: [String: Any] = [:]
            
            statsCollection.enumerateStatistics(from: start, to: end) { (result: HKStatistics, stop: UnsafeMutablePointer<ObjCBool>) in
                if let quantity: HKQuantity = result.sumQuantity() {
                    let dateString = RNFitnessUtilsTestttttttttt.formatIsoDateString(result.startDate)
                    
                    var value: Any = quantity.doubleValue(for: HKUnit.init(from: unit))
                    
                    if unit == HKUnit.count().unitString {
                        value = Int(value as! Double);
                    }
                    
                    data[dateString] = value;
                }
            }
            
            resolve(data);
        }
        
        healthStore.execute(query)
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
            self.healthStore.stop(query)
        }
    }
    
    @objc public func queryDailyTotals(_ dataTypeIdentifier: String, unit: String, start: NSNumber, end: NSNumber, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        
        let startDate: Date = Date(timeIntervalSince1970: TimeInterval(start.intValue / 1000))
        let endDate: Date = Date(timeIntervalSince1970: TimeInterval(end.intValue / 1000))
        var interval: DateComponents = DateComponents()
        interval.day = 1

        guard let quantityType = transformDataKeyToHKQuantityType(dataTypeIdentifier) else {
            return reject(standardErrorCode(1), "Invalid dataTypeIdentifier.", nil)
        }

        // Create the query.
        let query = HKStatisticsCollectionQuery(quantityType: quantityType,
                                                quantitySamplePredicate: nil,
                                                options: .cumulativeSum,
                                                anchorDate: startDate,
                                                intervalComponents: interval)

        // Set the results handler.
        query.initialResultsHandler = { (query: HKStatisticsCollectionQuery, results: HKStatisticsCollection?, error: Error?) in

            // Handle errors here.
            if let error = error as? HKError {
                switch (error.code) {
                case .errorDatabaseInaccessible:
                    // HealthKit couldn't access the database because the device is locked.
                    reject(self.standardErrorCode(4), error.localizedDescription, error)
                    return
                default:
                    // Handle other HealthKit errors here.
                    reject(self.standardErrorCode(nil), error.localizedDescription, error)
                    return
                }
            }

            guard let statsCollection = results else {
                // You should only hit this case if you have an unhandled error. Check for bugs
                // in your code that creates the query, or explicitly handle the error.
                reject(self.standardErrorCode(nil), "unhandled error getting results.", error)
                return
            }
            
            var data: [String: Any] = [:]
            
            statsCollection.enumerateStatistics(from: startDate, to: endDate) { (result: HKStatistics, stop: UnsafeMutablePointer<ObjCBool>) in
                if let quantity: HKQuantity = result.sumQuantity() {
                    let dateString = RNFitnessUtilsTestttttttttt.formatIsoDateString(result.startDate)
                    
                    var value: Any = quantity.doubleValue(for: HKUnit.init(from: unit))
                    
                    if unit == HKUnit.count().unitString {
                        value = Int(value as! Double);
                    }
                    
                    data[dateString] = value;
                }
            }
        
            resolve(data);
        }

        healthStore.execute(query)
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 5.0) {
            self.healthStore.stop(query)
        }
    }
    
    @objc public func writeData(_ dataTypeIdentifier: String, unit: String, quantity: NSNumber, metadata: Dictionary<String, Any>, timestamp: NSNumber, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        
        guard let quantityType = transformDataKeyToHKQuantityType(dataTypeIdentifier) else {
            return reject(standardErrorCode(1), "Invalid dataTypeIdentifier.", nil)
        }
        
        let quantity: HKQuantity = HKQuantity.init(unit: HKUnit.init(from: unit), doubleValue: quantity.doubleValue)
        var date: Date = Date()
        if timestamp.intValue != 0 {
            date = Date(timeIntervalSince1970: TimeInterval(timestamp.intValue / 1000))
        }
        
        let dataObject: HKQuantitySample = HKQuantitySample.init(type: quantityType, quantity: quantity, start: date, end: date, metadata: metadata)
        
        healthStore.save(dataObject) { success, error in
            if let error = error {
                reject(self.standardErrorCode(nil), error.localizedDescription, error)
            } else {
                resolve(success)
            }
        }
    }
    
    @objc public func writeDataArray(
        _ dataArray: NSArray,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) -> Void {
        
        if dataArray.count > 0 {
            var dataArrayTransformed: [HKQuantitySample] = []
            
            for (index, obj) in dataArray.enumerated() {
                
                guard let obj = obj as? NSDictionary else {
                    return reject(standardErrorCode(1), "Wrong data passed to RNHealthTracker:writeDataArray", nil)
                }
                
                guard let dataTypeIdentifier: String = (obj["key"] as? String),
                      let unit: String = (obj["unit"] as? String),
                      let amount: NSNumber = (obj["quantity"] as? NSNumber),
                      let timestamp: NSNumber = (obj["timestamp"] as? NSNumber),
                      let metadata: Dictionary<String, Any> = (obj["metadata"] as? Dictionary<String, Any>)
                else {
                    return reject(standardErrorCode(1), "Wrong data passed to RNHealthTracker:writeDataArray, dataArray id \(index)", nil)
                }
                
                var date: Date = Date()
                if timestamp.intValue != -1 {
                    date = Date(timeIntervalSince1970: TimeInterval(timestamp.intValue / 1000))
                }
                
                guard let quantityType = transformDataKeyToHKQuantityType(dataTypeIdentifier) else {
                    return reject(standardErrorCode(1), "Invalid dataTypeIdentifier.", nil)
                }
                
                let quantity: HKQuantity = HKQuantity.init(unit: HKUnit.init(from: unit), doubleValue: amount.doubleValue)
                
                let dataObject: HKQuantitySample = HKQuantitySample.init(type: quantityType, quantity: quantity, start: date, end: date, metadata: metadata)
                
                dataArrayTransformed.append(dataObject)
            }
            
            healthStore.save(dataArrayTransformed)  { success, error in
                if let error = error {
                    reject(self.standardErrorCode(nil), error.localizedDescription, error)
                } else {
                    resolve(success)
                }
            }
        } else {
            return reject(standardErrorCode(1), "Empty array was passed.", nil)
        }
    }
    
}
