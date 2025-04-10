const calculateTotal = require('./exercise')

describe("calculateTotal", () => {
    it("Expected Output: 11000", () => {
        // Given
        const vehicleType = "car"
        const duration = 3

        //When
        const result = calculateTotal(vehicleType, duration)

        //Then
        const expectedResult = 11000

        expect(result).toBe(expectedResult)
    })

    it("Expected Output: 2000", () => {
        // Given
        const vehicleType = "bike"
        const duration = 1

        //When
        const result = calculateTotal(vehicleType, duration)

        //Then
        const expectedResult = 2000

        expect(result).toBe(expectedResult)
    })

    it("Expected Output: 133000", () => {
        // Given
        const vehicleType = "car"
        const duration = 27

        //When
        const result = calculateTotal(vehicleType, duration)

        //Then
        const expectedResult = 133000

        expect(result).toBe(expectedResult)
    })

    it("Expected Result: Invalid vehicle type", () => {
        // Given
        const vehicleType = "plane"; // Invalid vehicle type
        const duration = 5;

        //When
        const result = calculateTotal(vehicleType, duration)

        //Then
        const expectedResult = "Invalid vehicle type"
        expect(result).toBe(expectedResult)
    });

    it("Expected Result: Invalid duration", () => {
        // Given
        const vehicleType = "car";
        const duration = -5;

        //When
        const result = calculateTotal(vehicleType, duration)

        //Then
        const expectedResult = "Invalid duration"
        expect(result).toBe(expectedResult)
    });
})