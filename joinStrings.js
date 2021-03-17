/*
Problem Description: Create a method that takes three strings of equal length and combines them (interlaced).

Focus:
Implementation - Figure out how to implement this functionality. We also want to focus on how to make the code clean and clear.
Naming - Make the names clear. Focus on naming things in the code to make their intentions clear.
Error handling and default values - can you defend why you did things the way you did?

The function should return a string which combines all of the letters of the two parameter strings.
An example Input: "abc", "123", "xyz" => Output: "a1xb2yc3z"
An example Input: "aa", "bb", "cc" => Output: "abcabc"

Note:
We can't assume that the input will be defined.
Each parameter string is of the same length.

Notes:
You can use es6 or you can use es5.
Try to write your code and tests in a way that would be approved in a PR.
*/

export default (string1, string2, string3) => {
    if (
        typeof string1 != "string" ||
        typeof string2 != "string" ||
        typeof string3 != "string"
    ) {
        return null;
    }
    let mergedString = "";
    for (
        let i = 0;
        i < string1.length && i < string2.length && i < string3.length;
        i++
    ) {
        mergedString += string1[i] + string2[i] + string3[i];
    }
    return mergedString;
};
