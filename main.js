// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:



const validateCred = (arr) => {
  let removeLast = arr.pop();
  let arrReversed = arr.reverse();
  let checkOdd = arrReversed.filter(function(el, ind){ return ind % 2 === 0; });
  let unCheckOdd = arrReversed.filter(function(el, ind){ return ind % 2 === 1; })
  let multiplyOdd = checkOdd.map(x => x * 2);
  let substractedNum = [];
  let unSubstractedNum = [];
  for (let i = 0; i < multiplyOdd.length; i++) {
    var arrNum = multiplyOdd[i];
    if(arrNum > 9) {
      let substractNum = arrNum - 9;
      substractedNum.push(substractNum);
    } else {
      unSubstractedNum.push(arrNum)
    }
  }
let substractedBigNum = 0;
let unsbustractedSmallNum = 0;
let unSubstractedRegularNum = 0;
for(let i = 0; i < substractedNum.length; i++) {
  let addNum = substractedNum[i];
  substractedBigNum = substractedBigNum + addNum;
}

for (let j = 0; j < unSubstractedNum.length; j++) {
  let addNum = unSubstractedNum[j];
  unsbustractedSmallNum = unsbustractedSmallNum + addNum;
}

for (let i = 0; i < unCheckOdd.length; i++) {
    let addNum = unCheckOdd[i];
    unSubstractedRegularNum = unSubstractedRegularNum + addNum;
}

const substractedWholeNum = substractedBigNum + unsbustractedSmallNum;
const wholeCredNum = substractedWholeNum + unSubstractedRegularNum + removeLast;
const wholeCredNumModulo = wholeCredNum % 10;

 if (wholeCredNumModulo === 0) {
        return 'Valid';
    } else {
        return 'Invalid';
    };

}

const invalidCredNum = [];

const findInvalidCards = arr => {
    for (let i = 0; i < arr.length; i++) {
        const isInvalid = validateCred(arr[i]);
        if(isInvalid === 'Invalid') {
            invalidCredNum.push(arr[i])
        }
    }
}

let companyArr = [];

const idInvalidCardCompanies = arr => {
  for(let j = 0; j < arr.length; j++) {
    const reverseArr = arr.reverse();
    if(reverseArr[j] === 3) {
      return 'Amex';
    } else if (reverseArr[j] === 4) {
      return 'Visa';
    } else if (reverseArr[j] === 5) {
      return 'Masterclass';
    } else if (reverseArr[j] === 6) {
      return 'Discover';
    } else {
      return "Company not found";
    }
  }
  
}

const sortingArr = arr => {
  for(let i = 0; i < arr.length; i++) {
    let credCompanyName = idInvalidCardCompanies(arr[i]);
    companyArr.push(credCompanyName)
  }
}


findInvalidCards(batch);
sortingArr(invalidCredNum)
for(let i = 0; i < companyArr.length; i++) {
  if(companyArr.indexOf(companyArr[i], 2)) {
    companyArr.pop(companyArr[i]);
  }
}
console.log(companyArr);

//console.log(invalidCredNum)

//validateCred(valid1)

