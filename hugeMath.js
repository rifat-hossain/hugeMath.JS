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
    /*if(str.charAt(0) == '.'){
        str = '0' + str;
    }*/
    return str;
}
function isGreater(main, compare){
    if(main.indexOf('.') == -1){
        main += '.';
    }
    if(compare.indexOf('.') == -1){
        compare += '.';
    }
    m = main.split('.');
    c = compare.split('.');
    var diff = m[0].length - c[0].length;
    if(diff > 0){
        for(var i = 0; i < diff; i++){
            c[0] = '0' + c[0];
        }
    }
    else{
        for(var i = 0; i > diff; i--){
            m[0] = '0' + m[0];
        }
    }
    diff = m[1].length - c[1].length;
    if(diff > 0){
        for(var i = 0; i < diff; i++){
            c[1] += '0';
        }
    }
    else{
        for(var i = 0; i > diff; i--){
            m[1] += '0';
        }
    }


    for(var i =0; i < m[0].length; i++){
        if(parseInt(m[0].charAt(i)) > parseInt(c[0].charAt(i))){
            return true;
        }
        else if(parseInt(m[0].charAt(i)) < parseInt(c[0].charAt(i))){
            return false;
        }
    }
    return false;
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
    var pos = true;
    if(left_oparend.indexOf('.') == -1){
        left_oparend += '.';
    }
    if(right_oparend.indexOf('.') == -1){
        right_oparend += '.';
    }
    m = left_oparend.split('.');
    c = right_oparend.split('.');
    var diff = m[0].length - c[0].length;
    if(diff > 0){
        for(var i = 0; i < diff; i++){
            c[0] = '0' + c[0];
        }
    }
    else{
        for(var i = 0; i > diff; i--){
            m[0] = '0' + m[0];
        }
    }
    diff = m[1].length - c[1].length;
    if(diff > 0){
        for(var i = 0; i < diff; i++){
            c[1] += '0';
        }
    }
    else{
        for(var i = 0; i > diff; i--){
            m[1] += '0';
        }
    }


    for(var i =0; i < m[0].length; i++){
        if(parseInt(m[0].charAt(i)) > parseInt(c[0].charAt(i))){
            pos = true;
            break;
        }
        else if(parseInt(m[0].charAt(i)) < parseInt(c[0].charAt(i))){
            pos = false;
            break;
        }
    }

    var ans = '';
    var carry = 0;
    if(pos){
        for(var i =m[1].length-1; i >= 0; i--){
            if(parseInt(m[1].charAt(i)) >= parseInt(c[1].charAt(i)) + carry){
                ans += parseInt(m[1].charAt(i)) - parseInt(c[1].charAt(i)) - carry;
                carry = 0;
            }
            else{
                ans += parseInt('1' + m[1].charAt(i)) - parseInt(c[1].charAt(i)) - carry;
                carry = 1;
            }
        }
        ans += '.';
        for(var i =m[0].length-1; i >= 0; i--){
            if(parseInt(m[0].charAt(i)) >= parseInt(c[0].charAt(i)) + carry){
                ans += parseInt(m[0].charAt(i)) - parseInt(c[0].charAt(i)) - carry;
                carry = 0;
            }
            else{
                ans += parseInt('1' + m[0].charAt(i)) - parseInt(c[0].charAt(i)) - carry;
                carry = 1;
            }
        }
    }
    else{
        for(var i =m[1].length-1; i >= 0; i--){
            if(parseInt(c[1].charAt(i)) >= parseInt(m[1].charAt(i)) + carry){
                ans += parseInt(c[1].charAt(i)) - parseInt(m[1].charAt(i)) - carry;
                carry = 0;
            }
            else{
                ans += parseInt('1' + c[1].charAt(i)) - parseInt(m[1].charAt(i)) - carry;
                carry = 1;
            }
        }
        ans += '.';
        for(var i =m[0].length-1; i >= 0; i--){
            if(parseInt(c[0].charAt(i)) >= parseInt(m[0].charAt(i)) + carry){
                ans += parseInt(c[0].charAt(i)) - parseInt(m[0].charAt(i)) - carry;
                carry = 0;
            }
            else{
                ans += parseInt('1' + c[0].charAt(i)) - parseInt(m[0].charAt(i)) - carry;
                carry = 1;
            }
        }
        ans += '-';
    }

    return refine(reverseString(ans));
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
            if(n>0){
                s2 += (parseInt(left_oparend.charAt(n-1)) * parseInt(right_oparend.charAt(i-n))) % 10;
            }
        }
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
            if(n+1 < right_oparend.length){
                s2 += parseInt(parseInt(left_oparend.charAt(left_oparend.length - n + i -1)) * parseInt(right_oparend.charAt(n + 1)) / 10);
            }
        }
        ans += s1 % 10 + parseInt(parseInt(s2) / 10);
        s1 = s2;
    }
    ans += parseInt(s2) % 10;
    return refine(ans.insert(ans.length - point,'.'));
}

function divi(left_oparend, right_oparend, range){
    var ans = '';
    var dividend = "";
    range++;
    if(right_oparend.indexOf('.') == -1){
        right_oparend += '.';
    }
    if(left_oparend.indexOf('.') == -1){
        left_oparend += '.';
    }
    lo = left_oparend.split('.');
    ro = right_oparend.split('.');
    r0 = ro[0].length;
    l1 = lo[1].length;
    delete lo;
    delete ro;
    left_oparend = left_oparend.replace('.','');
    if(range >= l1){
        for(var i = 0; i<range-l1;i++){
            left_oparend += '0';
        }
    }
    else{
        left_oparend = left_oparend.substring(0,left_oparend.length - l1 + range);
    }
    dividend = left_oparend.substring(0,r0);
    for(var i=r0; i < left_oparend.length; i++){
        var tmp = _divi_helper(dividend.toString(), right_oparend.toString());
        ans += tmp.result.toString();
        dividend = tmp.remender;
        var p =dividend.indexOf('.');
        if(p == -1){
            dividend += left_oparend.charAt(i).toString();
        }
        else{
            dividend = dividend.insert(p, left_oparend.charAt(i).toString());
        }
    }

    return refine(ans.insert(ans.length - range + 1,'.'));
}
function _divi_helper(dividend, divisor){
    var remender = 0;
    var result = 1;
    for(; result <= 10; result++){
        if(isGreater(mult_long(divisor, result.toString()), dividend)){
            result--;
            remender = refine(subs(dividend.toString(), mult_long(divisor, result.toString()).toString()).toString()).toString();
            break;
        }
    }
    return {result, remender};
}