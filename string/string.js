import { utilities } from '../utilties.mjs';

const stringLib = () => {
    function concatanate(a, b) {
        let result = a;
        result.concatanate(b);
        return result;
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
}