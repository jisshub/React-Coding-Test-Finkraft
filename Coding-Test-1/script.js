// Write a JS program that finds the longest common substring between two strings.

function commonSubstring(string1, string2) {
    const string1Sub = string1.substring(1, )
    const string2Sub = string2.substring(2, )
    if (string1Sub === string2Sub) {
        return `Common substring of ${string1} and ${string2} is ${string1Sub}`
    } else {
        return 'not common'
    }
}
console.log(commonSubstring('akhil', 'nikhil'))
