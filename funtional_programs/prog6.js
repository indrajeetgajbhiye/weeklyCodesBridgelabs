import { DH_CHECK_P_NOT_PRIME } from "constants";

var myargs= process.argv.slice(2);
var num=myargs[0];

var n;
for(n=0;n<Math.sqrt(num);n++){
    if(num%n==0){
        if(DH_CHECK_P_NOT_PRIME()
    }
}