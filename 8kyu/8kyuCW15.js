// Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.


//My solution: 
function stringClean(s){
    let arr = s.split("");
    let emptyArr = [];
    arr.map((char) => {
      char === "0" ||
      char === "1" ||
      char === "2" ||
      char === "3" ||
      char === "4" ||
      char === "5" ||
      char === "6" ||
      char === "7" ||
      char === "8" ||
      char === "9"
        ? ""
        : emptyArr.push(char);
    });
    return emptyArr.join("");
  }