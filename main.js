// BÀI TẬP 1
/**
 * B1: Input 3 số nguyên
 * B2:
 * + Khai báo biến firstNum , secondNum, thirdNum
 * + if(firstNum > secondNum){ Đổi chỗ firstNum và secondNum}
 * + if(firstNum > thirdNum){ Đổi chỗ firstNum và thirdNum}
 * + if(secondNum > thirdNum){ Đổi chỗ secondNum và thirdNum}
 * B3: In ra màn hình 3 số lần lượt là: firstNum, secondNum,
 * thirdNum
 */

const getEle = function (id) {
  return document.getElementById(id);
};

// -- Bài 1 --

var result = getEle("txtSortResult");
result.style.display = "none";

var btnSortResult = getEle("btnSort");
btnSortResult.onclick = function () {
  var firstNum = getEle("txtFirstNum").value;
  var secondNum = getEle("txtSecondNum").value;
  var thirdNum = getEle("txtThirdNum").value;
  if (firstNum > secondNum) {
    var tmp = firstNum;
    firstNum = secondNum;
    secondNum = tmp;
  }
  if (firstNum > thirdNum) {
    var tmp = firstNum;
    firstNum = thirdNum;
    thirdNum = tmp;
  }

  if (secondNum > thirdNum) {
    var tmp = secondNum;
    secondNum = thirdNum;
    thirdNum = tmp;
  }
  result.innerHTML =
    "Ba số theo thứ tự tăng dần: " +
    firstNum +
    " ," +
    secondNum +
    " ," +
    thirdNum;
  result.style.display = "block";
};

// BÀI TẬP 2

/**
 * B1: Chọn người sử dụng máy
 * B2: Khai báo biến slPerson để lưu giá trị ng sử dung máy
 * + if( slPerson == 'B'){
 *      In ra 'Con chào bố ạ'
 * }
 * + if( slPerson == 'M'){
 *      In ra 'Con chào mẹ ạ'
 * }
 * + if( slPerson == 'A'){
 *      In ra 'Em chào anh trai'
 * }
 * + if( slPerson == 'E'){
 *      In ra 'Chào em gái'
 * }
 */

var txtGreetings = getEle("txtGreetings");
slPersonUse.onchange = function () {
  var slPersonUse = getEle("slPersonUse").value;
  if (slPersonUse == "B") {
    txtGreetings.innerHTML = "Con chào bố ạ";
  } else if (slPersonUse == "M") {
    txtGreetings.innerHTML = "Con chào mẹ ạ";
  } else if (slPersonUse == "A") {
    txtGreetings.innerHTML = "Em chào anh trai ạ";
  } else if (slPersonUse == "E") {
    txtGreetings.innerHTML = "Chào em gái ";
  } else {
    txtGreetings.style.display = "none";
  }
};

// BÀI TẬP 3

/**
 * B1: Input vào 3 số nguyên
 * B2: Khai báo biến để chứa 3 số đó
 * + Khai báo biến numOfEvenNumber để đếm các số lẻ
 * + Khai báo biến numOfOddNumber để đếm các số chẵn
 * + KIểm tra từng số nếu % 2 == 0 => numOfEvenNumber += 1
 * + Else thì numOfOddNumber += 1
 * B3: In ra màn hình số các số chắn , số các số lẻ
 */

var btnCalculate = getEle("btnCalculate");
// var checkEvenNum = function(num){
//     return   (num % 2 == 0) ? true : false;
// }
var txtNumOfEven = document.getElementById("txtNumOfEven");
var txtNumOfOdd = document.getElementById("txtNumOfOdd");
btnCalculate.onclick = function () {
  var txtNumFirst = getEle("txtNumFirst").value;
  var txtNumSecond = getEle("txtNumSecond").value;
  var txtNumThird = getEle("txtNumThird").value;
  var numOfEvenNumber = 0;
  var numOfOddNumber = 0;
  txtNumFirst % 2 == 0 ? (numOfEvenNumber += 1) : (numOfOddNumber += 1);
  txtNumSecond % 2 == 0 ? (numOfEvenNumber += 1) : (numOfOddNumber += 1);
  txtNumThird % 2 == 0 ? (numOfEvenNumber += 1) : (numOfOddNumber += 1);
  txtNumOfEven.innerHTML = "Số các số chẵn là: " + numOfEvenNumber;
  txtNumOfOdd.innerHTML = "Số các số lẻ là: " + numOfOddNumber;
};

// BÀI TẬP 4
/**
 * B1: Input vào 3 cạnh tam giác
 * B2: Khai báo biến chứa 3 cạnh tam giác
 * + Nếu ko là tam giác thì : In ra ' Đây ko là tam giác'
 * + Nếu là tam giác thì:
 * + Viết 3 function kiểm tra
 * - function KT tam giác vuông nếu thỏa mãn => true ko thì false
 * - function KT tam giác đều nếu thỏa mãn => true ko thì false
 * - function KT tam giác cân nếu thỏa mãn => true ko thì false
 * - nếu là tam giác vuông => in ra ' Đây là tam giác vuông'
 * - nếu là tam giác đều => in ra ' Đây là tam giác đều'
 * - nếu là tam giác cân => in ra ' Đây là tam giác cân'
 * - nếu là tam giác vuông cân => in ra ' Đây là tam giác vuông cân'
 */

var checkTriangle = function (firstEdge, secondEdge, thirdEdge) {
  // alert('In check');
  if (
    firstEdge < secondEdge + thirdEdge &&
    firstEdge > 0 &&
    secondEdge > 0 &&
    thirdEdge > 0
  ) {
    return true;
  } else {
    return false;
  }
};
var checkIsoscelestriangle = function (firstEdge, secondEdge, thirdEdge) {
    
  if (
    firstEdge == secondEdge ||
    firstEdge == thirdEdge ||
    secondEdge == thirdEdge
  ) {
    return true;
  } else {
    return false;
  }
};
var checkSquareTriangle = function (firstEdge, secondEdge, thirdEdge) {
  if (
    Math.pow(firstEdge,2) == Math.pow(secondEdge,2) + Math.pow(thirdEdge,2) ||
    Math.pow(secondEdge,2) == Math.pow(thirdEdge,2) + Math.pow(firstEdge,2) ||
    Math.pow(thirdEdge,2) == Math.pow(firstEdge,2) + Math.pow(secondEdge,2))
   {
     
    return true;
  } else {
    return false;
  }
};
var checkEquilateralTriangle = function (firstEdge, secondEdge, thirdEdge) {
  if (firstEdge == secondEdge && secondEdge == thirdEdge) {
    return true;
  } else {
    return false;
  }
};
var btnFigureTriangle = getEle("btnFigureTriangle");
var txtTriangle = getEle("txtTriangle");
btnFigureTriangle.onclick = function () {
  var txtFirstEdge = parseFloat(getEle("txtFirstEdge").value);
  var txtSecondEdge = parseFloat(getEle("txtSecondEdge").value);
  var txtThirdEdge = parseFloat(getEle("txtThirdEdge").value);
  if (
    checkTriangle(txtFirstEdge, txtSecondEdge, txtThirdEdge) &&
    checkTriangle(txtSecondEdge, txtFirstEdge, txtThirdEdge) &&
    checkTriangle(txtThirdEdge, txtSecondEdge, txtFirstEdge)
  ) {
    if (checkIsoscelestriangle(txtFirstEdge, txtSecondEdge, txtThirdEdge)) {
      if (checkSquareTriangle(txtFirstEdge, txtSecondEdge, txtThirdEdge)) {
        txtTriangle.innerHTML = "Đây là tam giác vuông cân ";
      } else if (
        checkEquilateralTriangle(txtFirstEdge, txtSecondEdge, txtThirdEdge)
      ) {
        txtTriangle.innerHTML = "Đây là tam giác đều";
      } else {
        txtTriangle.innerHTML = "Đây là tam giác cân";
      }
      
    } else if (checkSquareTriangle(txtFirstEdge, txtSecondEdge, txtThirdEdge)) {
        console.log("check vuong")
        txtTriangle.innerHTML = "Đây là tam giác vuông";
    } else {
      txtTriangle.innerHTML = "Đây là tam giác thường";
    }
  } else {
    console.log("here");
    txtTriangle.innerHTML = "Đây không phải là tam giác";
  }
};
