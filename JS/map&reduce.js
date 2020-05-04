
    //一个函数可以把另外一个函数作为参数,高阶函数；
    function pro(a) {
        return a*a;
    }
    function  pro2(x, y) {
        return x+y;
    }

    var b=['adam', 'LISA', 'barT'];
    var a=[1,2,3,4];
    var c=['1', '2', '3'];
    //数组的map方法，使参数形成一个新的map；
    var results=a.map(pro);
    console.log(results);

    //pro(pro(pro(pro(x1+x2)+x3)+x4)+x5)
    var results2=a.reduce(pro2);
    console.log(results2+"   1");

   //将数组变成数字
   function prointint(x,y) {
        return x*10+y;
   }
   var intnum=a.reduce(prointint);
   console.log(intnum);

   //

    //将首字母变成小写；toUpperCase();小写变大写    toLowerCase()；大写变小写
    //replace 替换字符串中的字符
    function prostring(x) {
       return x.replace(x[0],x[0].toUpperCase());
    }
    var newtext=b.map(prostring);
    console.log(newtext);

    //将数字字符串替换成整数
    var proint=c.map(function (x) {
        return parseInt(x);
    });
    console.log(proint);



    function count1() {
        var arr = [];
        var i;
        for (i=1; i<=3; i++) {
            arr.push(function () {
                return i * i;
            });

        }
        console.log(i);
        return arr;
    }

    var results2 = count1();
    var f1 = results2[0];
    var f2 = results2[1];
    var f3 = results2[2];

    console.log(f1());


    function count22() {
        var arr = [];
        for (var i=1; i<=3; i++) {
            arr.push((function (n) {
                return function () {
                    return n * n;
                }
            })(i));
        }
        return arr;
    }


    a.sort((x,y)=>{
        if (x>y){
            return -1;
        }else {
            return 1;
        }
    })
    console.log(a);