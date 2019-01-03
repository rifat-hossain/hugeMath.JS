String.prototype.insert = function (index, string) {
    if (index > 0)
      return this.substring(0, index) + string + this.substring(index, this.length);
    else
      return string + this;
  };
function reverseString(str) {
    var splitString = str.split("");
   
    var reverseArray = splitString.reverse();
   
    var joinArray = reverseArray.join("");
      
    return joinArray;
}
function refine(str){
    for(;;){
        if(str.charAt(0) == '0'){
            str = str.substring(1,str.length);
            continue;
        }
        if(str.charAt(str.length - 1) == '.'){
            str = str.substring(0,str.length -1);
            continue;
        }
        break;
    }
    if(str == ''){
        str = 0;
    }
    if(str.charAt(0) == '.'){
        str = '0' + str;
    }
    return str;
}
function isGreater(left_oparend, right_oparend){
    var neg = false;
    if(right_oparend.indexOf('.') == -1){
        right_oparend += '.';
    }
    if(left_oparend.indexOf('.') == -1){
        left_oparend += '.';
    }
    var lo = left_oparend.split('.');
    var ro = right_oparend.split('.');
    diff = lo[0].length - ro[0].length;
    if(diff > 0){
        var s = "";
        for(var i=0; i < diff; i++){
            s += '0';
        }
        ro[0] = s + ro[0];
    }
    else{
        var s = "";
        for(var i=0; i>diff;i--){
            s += '0';
        }
        lo[0] = s + lo[0];
    }

    diff = lo[1].length - ro[1].length;
    if(diff > 0){
        var s = "";
        for(var i=0; i < diff; i++){
            s += '0';
        }
        ro[1] += s;
    }
    else{
        var s = "";
        for(var i=0; i>diff;i--){
            s += '0';
        }
        lo[1] += s;
    }
    delete diff;
    for(var i=0; i<lo[0].length+lo[1].length;i++){
        if(i < lo[0].length){
            if(parseInt(ro[0].charAt(i)) > parseInt(lo[0].charAt(i))){
                neg = true;
                break;
            }
        }
        else{
            if(parseInt(ro[1].charAt(i-ro[1].length)) > parseInt(lo[1].charAt(i-lo[1].length))){
                neg = true;
                break;
            }
        }
    }
    return !neg;
}

function add(left_oparend, right_oparend){
    if(right_oparend.indexOf('.') == -1){
        right_oparend += '.';
    }
    if(left_oparend.indexOf('.') == -1){
        left_oparend += '.';
    }
    var lo = left_oparend.split('.');
    var ro = right_oparend.split('.');
    var diff = lo[0].length - ro[0].length;
    if(diff > 0){
        var s = "";
        for(var i=0; i < diff; i++){
            s += '0';
        }
        ro[0] = s + ro[0];
    }
    else{
        var s = "";
        for(var i=0; i>diff;i--){
            s += '0';
        }
        lo[0] = s + lo[0];
    }

    diff = lo[1].length - ro[1].length;
    if(diff > 0){
        var s = "";
        for(var i=0; i < diff; i++){
            s += '0';
        }
        ro[1] += s;
    }
    else{
        var s = "";
        for(var i=0; i>diff;i--){
            s += '0';
        }
        lo[1] += s;
    }
    var C = 0;
    var ans = "";
    for(var i = ro[1].length-1; i>=0;i--){
        var S = parseInt(lo[1].charAt(i)) + parseInt(ro[1].charAt(i)) + C;
        C = parseInt(S / 10);
        ans += (S % 10).toString();
    }
    ans += '.';
    for(var i = ro[0].length-1; i>=0;i--){
        var S = parseInt(lo[0].charAt(i)) + parseInt(ro[0].charAt(i)) + C;
        C = parseInt(S / 10);
        ans += (S % 10).toString();
    }
    if(C != 0){
        ans += C.toString();
    }
    return reverseString(ans);
}

function subs(left_oparend, right_oparend){
    var neg = false;
    if(right_oparend.indexOf('.') == -1){
        right_oparend += '.';
    }
    if(left_oparend.indexOf('.') == -1){
        left_oparend += '.';
    }
    var lo = left_oparend.split('.');
    var ro = right_oparend.split('.');
    diff = lo[0].length - ro[0].length;
    if(diff > 0){
        var s = "";
        for(var i=0; i < diff; i++){
            s += '0';
        }
        ro[0] = s + ro[0];
    }
    else{
        var s = "";
        for(var i=0; i>diff;i--){
            s += '0';
        }
        lo[0] = s + lo[0];
    }

    diff = lo[1].length - ro[1].length;
    if(diff > 0){
        var s = "";
        for(var i=0; i < diff; i++){
            s += '0';
        }
        ro[1] += s;
    }
    else{
        var s = "";
        for(var i=0; i>diff;i--){
            s += '0';
        }
        lo[1] += s;
    }
    delete diff;
    for(var i=0; i<lo[0].length+lo[1].length;i++){
        if(i < lo[0].length){
            if(parseInt(ro[0].charAt(i)) > parseInt(lo[0].charAt(i))){
                neg = true;
                break;
            }
        }
        else{
            if(parseInt(ro[1].charAt(i-ro[1].length)) > parseInt(lo[1].charAt(i-lo[1].length))){
                neg = true;
                break;
            }
        }
    }
    var C=0;
    var ans = "";
    var S = 0;
    if(neg){
        for(var i =ro[1].length-1; i>=0;i--){
            if(parseInt(ro[1].charAt(i)) < parseInt(lo[1].charAt(i))+C){
                S = 10 + parseInt(ro[1].charAt(i)) - parseInt(lo[1].charAt(i)) - C;
                C = 1;
            }
            else if(parseInt(ro[1].charAt(i)) >= parseInt(lo[1].charAt(i))+C){
                S = parseInt(ro[1].charAt(i)) - parseInt(lo[1].charAt(i)) - C;
                C = 0;
            }
            ans += S.toString();
        }
        ans += '.';
        for(var i =ro[0].length-1; i>=0;i--){
            if(parseInt(ro[0].charAt(i)) < parseInt(lo[0].charAt(i))+C){
                S = 10 + parseInt(ro[0].charAt(i)) - parseInt(lo[0].charAt(i)) - C;
                C = 1;
            }
            else{
                S = parseInt(ro[0].charAt(i)) - parseInt(lo[0].charAt(i)) - C;
                C = 0;
            }
            ans += S.toString();
        }
        ans += '-';
        return reverseString(ans);
    }
    else {
        for(var i =ro[1].length-1; i>=0;i--){
            if(parseInt(lo[1].charAt(i)) < parseInt(ro[1].charAt(i))+C){
                S = 10 + parseInt(lo[1].charAt(i)) - parseInt(ro[1].charAt(i)) - C;
                C = 1;
            }
            else if(parseInt(lo[1].charAt(i)) >= parseInt(ro[1].charAt(i))+C){
                S = parseInt(lo[1].charAt(i)) - parseInt(ro[1].charAt(i)) - C;
                C = 0;
            }
            ans += S.toString();
        }
        ans += '.';
        for(var i =ro[0].length-1; i>=0;i--){
            if(parseInt(lo[0].charAt(i)) < parseInt(ro[0].charAt(i))+C){
                S = 10 + parseInt(lo[0].charAt(i)) - parseInt(ro[0].charAt(i)) - C;
                C = 1;
            }
            else{
                S = parseInt(lo[0].charAt(i)) - parseInt(ro[0].charAt(i)) - C;
                C = 0;
            }
            ans += S.toString();
        }
        return reverseString(ans);
    }
}

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
    return refine(ans);
}
function mult_lattice(left_oparend, right_oparend){
    if(right_oparend.indexOf('.') == -1){
        right_oparend += '.';
    }
    if(left_oparend.indexOf('.') == -1){
        left_oparend += '.';
    }
    var point = right_oparend.length - right_oparend.indexOf('.') + left_oparend.length - left_oparend.indexOf('.') - 2;
    right_oparend = right_oparend.replace('.','');
    left_oparend = left_oparend.replace('.','');
    var s1 = 0;
    var s2 = 0;
    var lim = 0;
    var ans = "";
    for(var i =0; i < left_oparend.length; i++){
        lim = 0;
        s2 = 0;
        if(i > right_oparend.length-1){
            lim = i - right_oparend.length+1;
        }
        for(var n = i; n >= lim; n--){
            s2 += parseInt((parseInt(left_oparend.charAt(n)) * parseInt(right_oparend.charAt(i-n))) / 10);
            //console.log(left_oparend.charAt(n) +"*"+right_oparend.charAt(i-n) + "/10=" + parseInt((parseInt(left_oparend.charAt(n)) * parseInt(right_oparend.charAt(i-n))) / 10));
            if(n>0){
                s2 += (parseInt(left_oparend.charAt(n-1)) * parseInt(right_oparend.charAt(i-n))) % 10;
                //console.log(left_oparend.charAt(n-1) + "*" + right_oparend.charAt(i-n) + "%10=" + (parseInt(left_oparend.charAt(n-1)) * parseInt(right_oparend.charAt(i-n))) % 10);
            }
        }
        //console.log("::::"+s1 + "%10+" + s2 + "/10=" + parseInt(s1 % 10 + parseInt(s2 / 10)));
        ans += s1 % 10 + parseInt(s2 / 10);
        s1 = s2;
    }
    for(var i=0; i < right_oparend.length; i++){
        lim = s2 = 0;
        if(right_oparend.length - i > left_oparend.length){
            lim = right_oparend.length - i - left_oparend.length;
        }
        for(var n = i; right_oparend.length - n > lim; n++){
            s2 += parseInt(left_oparend.charAt(left_oparend.length - n + i -1)) * parseInt(right_oparend.charAt(n)) % 10;
            //console.log(left_oparend.charAt(left_oparend.length - n + i - 1) +"*"+ right_oparend.charAt(n) + "%10=" + parseInt(left_oparend.charAt(left_oparend.length - n + i - 1)) * parseInt(right_oparend.charAt(n)) % 10);
            if(n+1 < right_oparend.length){
                s2 += parseInt(parseInt(left_oparend.charAt(left_oparend.length - n + i -1)) * parseInt(right_oparend.charAt(n + 1)) / 10);
                //console.log(left_oparend.charAt(left_oparend.length - n + i - 1) +"*"+ right_oparend.charAt(n + 1) + "/10=" + parseInt(parseInt(left_oparend.charAt(left_oparend.length - n + i - 1)) * parseInt(right_oparend.charAt(n + 1)) / 10));
            }
        }
        //console.log("::::"+s1 + "%10+"+s2+"/10="+ (s1 % 10 + parseInt(parseInt(s2) / 10)));
        ans += s1 % 10 + parseInt(parseInt(s2) / 10);
        s1 = s2;
    }
    ans += parseInt(s2) % 10;
    return refine(ans.insert(ans.length - point,'.'));
}

function divi(left_oparend, right_oparend, range){
    var useR = false;
    var dividend = "";
    if(right_oparend.indexOf('.') == -1){
        right_oparend += '.';
    }
    if(left_oparend.indexOf('.') == -1){
        left_oparend += '.';
    }
    lo = left_oparend.split('.');
    ro = right_oparend.split('.');
    l0 = lo[0].length;
    l1 = lo[1].length;
    r0 = ro[0].length;
    r1 = ro[1].length;
    delete lo;
    delete ro;

    return "Unimplemented";
}
function _divi_helper(dividend, divisor){
    var result, remender;
    for(result = 0; result < 10; result++){
        if(mult_long(divisor, result) > dividend){
            result--;
            remender = dividend - mult_long(divisor, result);
            break;
        }
    }
    return {result, remender};
}