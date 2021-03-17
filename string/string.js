import { utilities } from '../utilties.mjs';

const stringLib = () => {
    function concatanate(a, b) {
        return a+b;
    }

    function ASCIINumberToChar(num) {
        if (utilities.checkNumber([num])) {
            return String.fromCharCode(num);
        }
        return;
    }

    function charToASCIINumber(char) {
        return char.charCodeAt();
    }

    function reverseString(str) {
        return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
    }

    function generateOnlyUpperCase() {
        let aList = [];
        // ascii code from 65-90 are upper cases
        for (i=65; i<=90; i++) {
            aList.push(ASCIINumberToChar(i));
        }

        return aList;
    }

    function generateOnlyLowerCase() {
        let aList = [];
        // ascii code from 97-122 are lower cases
        for (i=97; i<=122; i++) {
            aList.push(ASCIINumberToChar(i));
        }

        return aList;
    }

    function generateOnlyNumbers() {
        let aList = [];
        // ascii code from 48-57 are numbers
        for (i=48; i<=57; i++) {
            aList.push(ASCIINumberToChar(i));
        }

        return aList;
    }

    function generateOnlySymbols() {
        let aList = [];
        for (i=33; i<=126; i++) {
            if ((i >= 48 && i <= 57) || (i >= 65 && i<= 90) || (i>=97 && i<=122)) { continue }
            aList.push(ASCIINumberToChar(i));
        }

        return aList;
    }

    function generateUpperAndLowerCase() {
        return generateOnlyUpperCase().concat(generateOnlyLowerCase());
    }
}