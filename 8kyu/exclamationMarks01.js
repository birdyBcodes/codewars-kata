// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

//My solution:
function remove (string) {
    //if((string.length - 1) === "!"){
      if(string.endsWith("!")){
      let strReplace = string.slice(0, -1);
        return strReplace;
    }else {
      return string;
    }
   }