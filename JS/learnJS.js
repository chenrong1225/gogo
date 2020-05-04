//试试
    let x=1;
    const x1=x++ + x++; // 3
    x=1;
    const x2=++x + ++x;// 5
    x=1;
    const x3=++x + x++; // 4
    //console.log(x1, x2,x3);
    //从左向右计算，++x,先加1再使用；x++，先试用再加一

    function sun(a,b,...rest) {
        let allnumber=a+b;
        if (rest.length===0){
            console.log(a+"+"+b+"等于"+allnumber);
            return allnumber;
        }else {
            for (var i in rest){
                allnumber+=rest[i];
            }
            return allnumber;
        }

    }

    console.log(sun(1));

    //求圆
    function area_of_circle(t,pi) {
        if (pi===undefined){
            pi=3.14;
        }
        var al=pi*t*t;
        console.log("pi值"+pi);
        return al;
    }
    if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
         console.log('测试通过');
    } else {
        console.log('测试失败');
    }