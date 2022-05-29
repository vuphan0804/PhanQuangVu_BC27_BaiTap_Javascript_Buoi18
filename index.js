var numberArr = [];
// function addNumberToArray() {
//   let showTemplate = numberArr.map((number) => `${number}`).join(", ");
//   document.getElementById("showFullArr").innerHTML = showTemplate;
// }
// function getNumberArr() {
//   numberArr.push(inputNumber);
//   // inputNumber = "";
//   console.log(typeof numberArr[0]);
//   addNumberToArray();
// }

function addNumberToArray() {
  var numberAdd = +document.getElementById("inputNumber").value;
  numberArr.push(numberAdd);

  var divResult = document.getElementById("showFullArr");
  divResult.style.display = "inline";
  divResult.innerHTML = `${numberArr}`;
}

function calcSumPositive() {
  var sumPositive = 0;
  for (let i = 0; i < numberArr.length; i++) {
    var e = numberArr[i];
    if (Number.isInteger(e) && e > 0) {
      sumPositive += e;
    } else -1;
  }
  document.getElementById(
    "showSum"
  ).innerHTML = `Tổng số dương: ${sumPositive}`;
}

function calcCountPositive() {
  var count = 0;
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      count++;
    }
  }
  var divResult = document.getElementById("showCountPositive");
  divResult.innerHTML = `Số dương: ${count}`;
}

function findMinOfNumber() {
  var min = numberArr[0];
  if (numberArr.length === 0) {
    var divResult = document.getElementById("showMinNumber");
    divResult.innerHTML = `Số nhỏ nhất:`;
    return;
  } else {
    for (i = 0; i < numberArr.length; i++) {
      if (numberArr[i] < min) {
        min = numberArr[i];
      }
    }
  }
  document.getElementById("showMinNumber").innerHTML = `Số nhỏ nhất: ${min}`;
}

function findMinOfPositive() {
  var positiveNumberArr = [];
  for (i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      positiveNumberArr.push(numberArr[i]);
    }
  }
  if (positiveNumberArr.length === 0) {
    document.getElementById(
      "showMinOfPositive"
    ).innerHTML = `Không có số dương trong mảng`;
    return 0;
  } else {
    min = positiveNumberArr[0];
    for (i = 0; i < positiveNumberArr.length; i++) {
      if (positiveNumberArr[i] < min) {
        min = positiveNumberArr[i];
      }
    }
  }
  document.getElementById(
    "showMinOfPositive"
  ).innerHTML = `Số dương nhỏ nhất: ${min}`;
}

function findLastOfEven() {
  if (numberArr.length === 0) {
    var divResult = document.getElementById("showLastOfEven");
    divResult.innerHTML = `Số chẵn cuối cùng:`;
    return;
  } else {
    for (i = 0; i < numberArr.length; i++) {
      if (numberArr[i] % 2 == 0) {
        lastEvenNumber = numberArr[i];
      }
    }
  }
  var divResult = document.getElementById("showLastOfEven");
  divResult.innerHTML = `Số chẵn cuối cùng: ${lastEvenNumber}`;
}

function sortIncending() {
  numberArr.sort(compare);
  document.getElementById(
    "showSortIncending"
  ).innerHTML = ` Mảng sau khi sắp xếp: ${numberArr}`;
}
function compare(a, b) {
  return a - b;
}

function findFirstOfPrime() {
  var primeArray = [];
  for (var i = 0; i < numberArr.length; i++) {
    if (isPrime(numberArr[i]) === true) {
      primeArray.push(numberArr[i]);
      break;
    }
  }
  if (primeArray.length === 0) {
    var divResult = document.getElementById("showFirstOfPrime");
    divResult.innerHTML = `Mảng không có số nguyên tố nào`;
    return 0;
  }
  var divResult = document.getElementById("showFirstOfPrime");
  divResult.innerHTML = `Số nguyên tố đầu tiên: ${primeArray}`;
}

function isPrime(k) {
  var count = 0;
  if (k < 2) {
    count++;
  }
  for (let i = 2; i <= Math.sqrt(k); i++) {
    if (k % i == 0) {
      count++;
    }
  }
  if (count != 0) {
    return false;
  } else {
    return true;
  }
}
