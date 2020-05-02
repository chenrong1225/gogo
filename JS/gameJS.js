
/* 10-40 随机算法解释 小王出品
1. Math.random()  [0-1)
2. (40-10)*Math.random() [0-30)
3. (40-10+1)*Math.random() [0-30]
4. 10+(40-10+1)*Math.random() [10-40]*/


    function rand(m,n){
        return m+Math.floor((n-m+1)*Math.random());
    }

    function randFace(){
        return ["croen","，anchor","heart","spade","club","diamond"] [rand(0,5)];
    }
    let allmoney=50;//全部的钱
    let count;      //次数

    while (allmoney>1&&allmoney<=100){
        count++;
        let bets={ croen:0,anchor:0,heart:0,spade:0,club:0,diamond:0}
        let totalmoney=rand(1,allmoney);//本次随机试用的钱
        if (totalmoney===7){
            totalmoney=allmoney;
            bets.heart=totalmoney;
        }else {
            let remaining=totalmoney;
            do {
                let bet=rand(1,totalmoney);
                let face=randFace();
                bets[face]=bets[face]+bet; //可能会抽到重复的牌，所有是+=
                remaining=randFace()-bet;
            }while (remaining<1)
        }
    }
    allmoney-=totalmoney;

    const hand=[]; //创建
    for (var x=0;x<3;x++){
        hand.push(randFace());
    }

    let winmoney;
    for (let die=0;die<hand.length;die++){
        let face1=hand[die];
        if (bets[face1]>0){
            winmoney=winmoney+bets[face];
        }
        allmoney+=winmoney;
}

    console.log(allmoney);
