'use strict';

// 計算結果を格納する変数。
let calculateResult = '';


// 画面に数値、記号を表示させる関数。
const updateDisplay = () => {
  const display = document.getElementById('display');
  display.value = calculateResult;
}

// 数値を追加する関数。
const appendNumber = (number) => {
  // 数値の先頭が0だった場合,0以外の数字に置き換える。。
  if(calculateResult === '0') {
    calculateResult = number.toString();
  } else {
    // 0以外の数値の場合、既存の値に数値を追加。
    calculateResult += number.toString();
  }
  updateDisplay()
}

// 演算子の追加行う関数。
const appendOperator = (operator) => {
  // 演算子が連続で入力出来ないようにする。
  if(!lastOperator()) {
    calculateResult += operator;
    updateDisplay();
  }
}

// 計算式の末尾が演算子であるかを判定する関数。
function lastOperator() {
  const lastChar = calculateResult[calculateResult.length -1];
  return lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '%';
}

// 小数点を追加する関数。
const appendDecimalPoint = () => {
  // 小数点が連続で入力出来ないようにする。。
  if(!lastDecimalPoint()) {
    calculateResult += '.';
    updateDisplay();
  }
}  

// 数値の末尾が小数点であるか判定する関数。
const lastDecimalPoint = () => {
  const lastChar  = calculateResult[calculateResult.length -1];
  return lastChar === '.';
}  

// 計算結果を表示する関数。
const showCalculation = () => {
  const result = formula(calculateResult);
  calculateResult = result.toString();
  updateDisplay();
}

// 計算を行う関数。
const formula = (calculateResult) => {
  return Function('return ' + calculateResult.replace(/[^-()\d/%*+.]/g, ''))();
}

// 表示内容をリセットする関数。
const clearDisplay = () => {
  calculateResult = '';
  updateDisplay();
}

updateDisplay();