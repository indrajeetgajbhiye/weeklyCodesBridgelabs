var knock=10;
var h=0,t=0,cData;
do{
    cData=Math.random();
    if(cData<0.5){
        t=t+1;
    }
    else {
        h=h+1
    }
    knock=null;
    console.log("probability of heads= "+ h/(h+t) +"  and the tails are " + t/(t+h));
    knock=knock-1;
}
while(knock>0)