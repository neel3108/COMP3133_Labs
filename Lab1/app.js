//Ex-1 Done
var makeItUpper = function(abc){
    var a  = abc.toString();
    var resArray =  a.split(" ");
    for ( var i = 0; i < resArray.length; i++){
       firstChar = resArray[i][0];
       resArray[i] = resArray[i].replace(firstChar, firstChar.toUpperCase());
    }
    var final = resArray.join(" ");
    console.log(final);
}
var abc = "helloo how do you do";
makeItUpper(abc);

//Ex-2 Done
var max = function(a,b,c){
   return Math.max(a,b,c);
}
console.log(max(20,-10,-20));
 
//Ex-3 Done
var lastThree = function(input){
    var xyz = input.toString();
    if(xyz.length >= 3){
        var arr = xyz.split("");
        var front = "";
        var back = "";
        for (var  i = xyz.length - 3  ; i <= xyz.length - 1; i++){
            back += arr[i];
        }
        for (var  j = 0; j < xyz.length - 3; j++){
            front += arr[j];
        }
        console.log(back + front);
    }
    else {
        return string;
    }
}
lastThree("neel");

//Ex-4 Done
var typeOfAngle = function(angle){
    var result = "";
    if (angle > 0 && angle < 90){
        result += "Acute angle";
    }
    else if (angle == 90){
        result += "Right angle"
    }
    else if ( angle > 90 && angle < 180){
        result += "Obtuse angle"
    }
    else if ( angle == 180 ){
        result += "Straight angle"
    }
    else {
        result += "Other"
    }
    
    return console.log(result);
}

typeOfAngle(677)

//Ex-5
function array_max_consecutive_sum(nums, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) {
      temp_sum += nums[i];
    }
    for (var i = k - 1; i < nums.length; i++) {
      temp_sum += nums[i];
      if (temp_sum > result) {
        result = temp_sum;
      }
      temp_sum -= nums[i - k + 1];
    }
    return result;
  }

array_max_consecutive_sum([1,2,3,4,5], 4);