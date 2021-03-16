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
            return a-b;
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
            return a/b;
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
        return minus(a, b);
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
            let _skipCount = 0;
            
            for (i = start; i <= (start+count) ; i++) {
              if (_skipCount == skipEvery) {
                aList.push(i);
                _skipCount = 0;
              }
              _skipCount++;
              if (_skipCount > skipEvery) {
                _skipCount = 0;
              }
            }
            return aList;
        }
        return;
    }

    function createRandomNumber(min, max) {
        if (utilities.checkNumber([min, max])) {
            return Math.random()*(max-min)+min;
        }
        return;
    }

    function randomizeNumberList(start, count, isRandom) {
        if (utilities.checkNumber([start, count])) {
            let aList = [];

            for (num=start; num<(start+count); num++) {
                if (isRandom) {
                    aList.push(createRandomNumber(start, (start+count)));
                } else {
                    aList.push(num);
                }
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
        if (!utilities.checkNumber([start, end, count])) { return }
        if (!allowDuplicates && count>(end-start)) {
            alert("unable to create logic result");
            return;
        } 
        let alist = []
        if (allowDuplicates) {
            alist = Array(count).fill().push(createRandomNumber(start, end));
        } else {
            // I am still thinking how to do it.
        }

        return alist;
    }
}