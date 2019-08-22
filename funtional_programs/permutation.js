var readLineSync= require("readline-sync");

var p, q;
function permute(arr, arrStart, arrEnd)  
{  
    var temp;
    // Base case  
    if (arrStart == arrEnd)  
        console.log(arr);
    else
    {   
        for (var i = arrStart; i <= arrEnd; i++)  
        {  
  
            // Swapping done  
            temp=arr[arrStart];
            arr[arrStart]=arr[i];
            arr[i]=temp;  
  
            // Recursion called  
            permute(arr, arrStart+1, arrEnd);  
  
            //backtrack  
            temp=arr[arrStart];
            arr[arrStart]=arr[i];
            arr[i]=temp;  
        }  
    }  
} 
var arr=[];
var arrTemp=[];
var n;
n =readLineSync.question("enter the size of array");
arr=readLineSync.question("Enter your array");
arrTemp=arr;
permute(arr,0, n-1);    
console.log(arrTemp);
