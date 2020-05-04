
    function trylist() {
        return ["A","B","C","D","E","F","G"] [rand(0,6)];
    }

    let ll={A:0,B:0,C:0,D:0,E:0,F:0,G:0};
    for (let a=0;a<100;a++){
        var b=trylist();
        if (b!=null){
            ll[b]+=1;

        }
    }

    for (let aa in ll){
        //console.log(aa+"抽到"+ll[aa]);
    }
