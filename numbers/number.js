import { utilities } from '../utilties.mjs';

const numberLib = () => {
    function add(a, b) {
        if (utilities.checkNumber([a, b])) {
            return a+b;
        } 
        return;
    }

    function minus(a, b) {
        if (utilities.checkNumber([a, b])) {
            return b-a;
        }
        return;
    }

    function multiply(a, b) {
        if (utilities.checkNumber([a, b])) {
            return a*b;
        }
        return;
    }

    function devide(a, b) {
        if (utilities.checkNumber([a, b])) {
            if (b != 0) {
                return a/b;
            } else {
                alert("the answer can not be determined");
            }
        }
        return;
    }

    function exponentiation(a, b) {
        if (utilities.checkNumber([a, b])) {
            return a**b;
        }
        return;
    }

    function incroment(a, b) {
        // don't need to check the dataset becuase add will check the number
        return add(a, b);
    }

    function decrement(a, b) {
        return minus(b, a);
    }

    function numberList(start, end) {
        if (utilities.checkNumber([start, end])) {
            return Array(end-start+1).fill().map((_, index) => start + index); 
        }
        return;
    }

    function numberListWithSkip(start, count, skipEvery) {
        if (utilities.checkNumber([start, count, skipEvery])) {
            let aList = [];
            let index = 0;
            for (i = start; i <= (start+count); i++) {
              if (i%skipEvery === 0 && index > 0) {
                aList.push(i);
              }
              index++;
            }
            return aList;         
        }
        return;
    }

    function createRandomNumber(min, max) {
        if (utilities.checkNumber([min, max])) {
            return Math.floor(Math.random()*(max-min)+min);
        }
        return;
    }

    function randomizeNumberList(start, count, isRandom) {
        if (utilities.checkNumber([start, count]) && typeof isRandom === "boolean") {
            let aList = [];

            for (num=start; num<(start+count); num++) {
                aList.push(isRandom ? createRandomNumber(start, (start+count)) : num);
            }
            return aList;
        }
        return;
    }

    function isOdd(num) {
        if (utilities.checkNumber([num])) {
            return (num%2 == 1)
        }
        return;
    }

    function isEven(num) {
        return !isOdd(num);
    }

    function randomNumberList(start, end) {
        return randomizeNumberList(start, end, true);
    }

    function randomizeNumberListB(start, end, count, allowDuplicates) {
        if (!utilities.checkNumber([start, end, count] && typeof allowDuplicates === "boolean")) { return }
        if (!allowDuplicates && count>(end-start)) {
            alert("unable to create logic result");
            return;
        } 
        let alist = []
        // step1: create an array of numbers from range
        // step2: create an empty array for holding random numbers
        // step3: create a random index number within range of step1
        // step4: push the number from step1's array with the random index into step2's list
        // step5: remove the number from step1's array
        // step6: repeat the process from step3 until desired amount
        if (!allowDuplicates) {
            // create a number list within range of start to end
            let temp = numberList(start, end);
            // repeat the process until count is reached.
            for (i=0; i<count; i++) {
                // create random a index
                const index = createRandomNumber(0, temp.length-1);
                // add the number within temp list with the index
                alist.push(temp[index]);
                // remove the number from the temp arry
                temp.splice(index, 1);
            }
        } else {
            alist = randomNumberList(start, count);
        }

        return alist;
    }

    function isPrime(num) {
        // if num is less than 2, it's not prime
        if (num < 2) { return false }
        // if num is 2, return it's prime
        if (num === 2) { return true }
        // test out all the numbers below the number's half
        // if the num doesn't have reminder, thatn it's not a prime number
        // anythng beyond half is not interger, since 2 is the smallest number that can be devided equally
        for (i=2; i<=Math.floor(num/2); i++) {
            if (num%i === 0) {
                return false;
            }
        }
        return true;
    }

    function generatePrimeNumbers(from, count) {

        
    }
}