const calculateTotal = require('./exercise')

describe("calculateTotal", () => {
    it("Total = 5,000 + 6,000 = 11,000", () => {
        // Given
        const vehicleType = "car"
        const duration = 3

        //When
        const result = calculateTotal(vehicleType, duration)

        //Then
        const expectedResult = 11000

        expect(result).toBe(expectedResult)
    })

    it("Total = 2,000", () => {
        // Given
        const vehicleType = "bike"
        const duration = 1

        //When
        const result = calculateTotal(vehicleType, duration)

        //Then
        const expectedResult = 2000

        expect(result).toBe(expectedResult)
    })

    it("Total = 5,000 + 78,000 + 50,000 = 133,000", () => {
        // Given
        const vehicleType = "car"
        const duration = 27

        //When
        const result = calculateTotal(vehicleType, duration)

        //Then
        const expectedResult = 133000

        expect(result).toBe(expectedResult)
    })

    // it("Error: Invalid vehicle type", () => {
    //     // Given
    //     const vehicleType = "plane"; // Invalid vehicle type
    //     const duration = 5;

    //     // When/Then
    //     expect(() => calculateTotal(vehicleType, duration)).toThrow("Error: Vehicle Type not found");
    // });

    // it("Error: Invalid duration", () => {
    //     // Given
    //     const vehicleType = "car";
    //     const duration = -5;

    //     // When/Then
    //     expect(() => calculateTotal(vehicleType, duration)).toThrow("Error: Invalid duration");
    // });
})