String.prototype.insert = function (index, string) {
    if (index > 0)
      return this.substring(0, index) + string + this.substring(index, this.length);
    else
      return string + this;
  };

function mult_long(left_oparend, right_oparend){
    if(right_oparend.indexOf('.') == -1){
        right_oparend += '.';
    }
    if(left_oparend.indexOf('.') == -1){
        left_oparend += '.';
    }
    var point = right_oparend.length - right_oparend.indexOf('.') + left_oparend.length - left_oparend.indexOf('.') - 2;
    right_oparend = right_oparend.replace('.','');
    left_oparend = left_oparend.replace('.','');
    var C = 0;
    var ans = "";
    for(var i=2; i <= right_oparend.length + left_oparend.length; i++){
        var S = C;
        C = 0;
        for(var j=1; j <= i; j++){
            var temp = parseInt(left_oparend.charAt(left_oparend.length - j)) * parseInt(right_oparend.charAt(right_oparend.length - i+j));
            if(temp){
                S += temp;
            }
        }
        C = parseInt(S/10);
        S = S % 10;
        ans += S.toString();
    }
    ans += C.toString();
    ans = reverseString(ans.insert(point,'.'));
    return ans;
}
function reverseString(str) {
    var splitString = str.split("");
 
    var reverseArray = splitString.reverse();
 
    var joinArray = reverseArray.join("");
    
    return joinArray;
}

function mult(left_oparend, right_oparend){
    var currentNow = new Date();

    console.log(parseFloat(left_oparend) * parseFloat(right_oparend));


    var currentThen = new Date();
    past = currentNow.getHours() * 3600 + currentNow.getMinutes() * 60 + currentNow.getSeconds() + currentNow.getMilliseconds() * 0.001;
    now = currentThen.getHours() * 3600 + currentThen.getMinutes() * 60 + currentThen.getSeconds() + currentThen.getMilliseconds() * 0.001;
    console.log("Duration: ", (now - past).toString() + " s");
}