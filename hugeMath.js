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

function add(left_operand, right_operand){
    if(right_operand.indexOf('.') == -1){
        right_operand += '.';
    }
    if(left_operand.indexOf('.') == -1){
        left_operand += '.';
    }
    var lo = left_operand.split('.');
    var ro = right_operand.split('.');
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

function subt(left_operand, right_operand){
    var pos = true;
    if(left_operand.indexOf('.') == -1){
        left_operand += '.';
    }
    if(right_operand.indexOf('.') == -1){
        right_operand += '.';
    }
    m = left_operand.split('.');
    c = right_operand.split('.');
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

function mult_long(left_operand, right_operand){
    if(right_operand.indexOf('.') == -1){
        right_operand += '.';
    }
    if(left_operand.indexOf('.') == -1){
        left_operand += '.';
    }
    var point = right_operand.length - right_operand.indexOf('.') + left_operand.length - left_operand.indexOf('.') - 2;
    right_operand = right_operand.replace('.','');
    left_operand = left_operand.replace('.','');
    var C = 0;
    var ans = "";
    for(var i=2; i <= right_operand.length + left_operand.length; i++){
        var S = C;
        C = 0;
        for(var j=1; j <= i; j++){
            var temp = parseInt(left_operand.charAt(left_operand.length - j)) * parseInt(right_operand.charAt(right_operand.length - i+j));
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
function mult_lattice(left_operand, right_operand){
    if(right_operand.indexOf('.') == -1){
        right_operand += '.';
    }
    if(left_operand.indexOf('.') == -1){
        left_operand += '.';
    }
    var point = right_operand.length - right_operand.indexOf('.') + left_operand.length - left_operand.indexOf('.') - 2;
    right_operand = right_operand.replace('.','');
    left_operand = left_operand.replace('.','');
    var s1 = 0;
    var s2 = 0;
    var lim = 0;
    var ans = "";
    for(var i =0; i < left_operand.length; i++){
        lim = 0;
        s2 = 0;
        if(i > right_operand.length-1){
            lim = i - right_operand.length+1;
        }
        for(var n = i; n >= lim; n--){
            s2 += parseInt((parseInt(left_operand.charAt(n)) * parseInt(right_operand.charAt(i-n))) / 10);
            if(n>0){
                s2 += (parseInt(left_operand.charAt(n-1)) * parseInt(right_operand.charAt(i-n))) % 10;
            }
        }
        ans += s1 % 10 + parseInt(s2 / 10);
        s1 = s2;
    }
    for(var i=0; i < right_operand.length; i++){
        lim = s2 = 0;
        if(right_operand.length - i > left_operand.length){
            lim = right_operand.length - i - left_operand.length;
        }
        for(var n = i; right_operand.length - n > lim; n++){
            s2 += parseInt(left_operand.charAt(left_operand.length - n + i -1)) * parseInt(right_operand.charAt(n)) % 10;
            if(n+1 < right_operand.length){
                s2 += parseInt(parseInt(left_operand.charAt(left_operand.length - n + i -1)) * parseInt(right_operand.charAt(n + 1)) / 10);
            }
        }
        ans += s1 % 10 + parseInt(parseInt(s2) / 10);
        s1 = s2;
    }
    ans += parseInt(s2) % 10;
    return refine(ans.insert(ans.length - point,'.'));
}

function divi(left_operand, right_operand, range){
    var ans = '';
    var dividend = "";
    range++;
    if(right_operand.indexOf('.') == -1){
        right_operand += '.';
    }
    if(left_operand.indexOf('.') == -1){
        left_operand += '.';
    }
    lo = left_operand.split('.');
    ro = right_operand.split('.');
    r0 = ro[0].length;
    l1 = lo[1].length;
    delete lo;
    delete ro;
    left_operand = left_operand.replace('.','');
    if(range >= l1){
        for(var i = 0; i<range-l1;i++){
            left_operand += '0';
        }
    }
    else{
        left_operand = left_operand.substring(0,left_operand.length - l1 + range);
    }
    dividend = left_operand.substring(0,r0);
    for(var i=r0; i < left_operand.length; i++){
        var tmp = _divi_helper(dividend.toString(), right_operand.toString());
        ans += tmp.result.toString();
        dividend = tmp.remender;
        var p =dividend.indexOf('.');
        if(p == -1){
            dividend += left_operand.charAt(i).toString();
        }
        else{
            dividend = dividend.insert(p, left_operand.charAt(i).toString());
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
            remender = refine(subt(dividend.toString(), mult_long(divisor, result.toString()).toString()).toString()).toString();
            break;
        }
    }
    if(result == 10){
        result = 0;
    }
    return {result, remender};
}