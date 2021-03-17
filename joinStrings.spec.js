import stringConcat from "./joinStrings";

/*
Think about how you want to structure the tests, try to be intentional with everything you add.
Try to think of the specific cases that you'll want to cover.
*/

describe("Takes a list of strings and joins them into one string", () => {
    it('Should return catdogtie when given the strings "cat" "dog" "tie"', () => {
        expect(stringConcat("cat", "dog", "tie")).toEqual("cdtaoitge");
    });
    it("Should return null when an integer is passed", () => {
        expect(stringConcat("cat", 222, "tie")).toEqual(null);
    });
    it("Should return null when null is passed with other strings", () => {
        expect(stringConcat("cat", null, "tie")).toEqual(null);
    });
});
