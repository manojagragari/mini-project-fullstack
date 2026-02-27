// let a=10;
// switch(a){
//     case 1:
//         console.log("Value is 1");
//         break;
//     case 2:
//         console.log("Value is 2");
//         break;
//     case 3:
//         console.log("Value is 3");
//         break;
//     case 4:
//         console.log("Value is 4");
//         break;
//     case 10:
//         console.log("Value is 10");
//         break;
//     default:
//         console.log("Value is not 1, 2, 3, 4, or 10");
// }
// let b='z';
// switch(b){
//     case 'a':
//         console.log("value is a vovel");
//         break;
//     case 'e':
//         console.log("value is e vovel");
//         break;
//     case 'i':
//         console.log("value is i vovel");
//         break;
//     case 'o':
//         console.log("value is o vovel");
//         break;
//     case 'u':
//         console.log("value is u vovel");
//         break;  
//     default:
//         console.log("value is consonant");
// }
// let z=20;
// let y=10;
// console.log(z>y?"z is greater":"y is greater");

// let i=1;
// let sum=0;
// while(i<=10){
//     sum=sum+i;
//     i++;
// }
// while(i<5){
//     console.log(i);
//     i++;
// }
// let c=0;
// for(c=1;c<=10;c++){
//     console.log(c);
// }
// console.log(c) //we can access c here because we declared c using let keyword outside of for loop

let a="Manoj AGrahari"; //in wana reverse the string using c login withou using inbuild function
let rev="";
for(let i=a.length-1;i>=0;i--){
    rev=rev+a[i];
}
console.log(rev);

let b=[1,2,3,15,4,5,6,6,7]; // i awana do find the largest no withou inbuild fun only using c++ logic in python
let largest=b[0];
for(let i=1;i<b.length;i++){
    if(b[i]>largest){
        largest=b[i];
    }   
}
console.log("largest no is "+largest);

let c=[10,20,30,40,50]; // i wana do find the sum of array element without inbuild function only using c++ logic in python
let sum=0;
for(let i=0;i<c.length;i++){
    sum=sum+c[i];
}
console.log("sum of array elements is "+sum);

let d=[2,2,2,2,3,4,5,6,6]; // i wana find the repetiton of numer has highest rpeated
let countMap={};
for(let i=0;i<d.length;i++){
    let num=d[i];
    countMap[num]=countMap[num]?countMap[num]+1:1;
}
let maxCount=0;
let maxNum=0;
for(let num in countMap){
    if(countMap[num]>maxCount){
        maxCount=countMap[num];
        maxNum=num;
    }
}
console.log("Number with highest repetition is "+maxNum+" with repetition count "+maxCount);

let e=[1,2,3,4,5,10,1,2,3]; //i wana find secound maximum number in the array without inbuild function only using c++ logic in python
let n=e.length;
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        if(e[j]>e[j+1]){
            let temp=e[j];
            e[j]=e[j+1];
            e[j+1]=temp;
        }
    }
}
console.log("Second maximum number is "+e[n-2]);

let f=[1,2,3,4,7,5,6]; // i wana find secound max but no sorting dont change in array
let max1=-Infinity;
let max2=-Infinity; 
for(let i=0;i<f.length;i++){ //explanation of logic is we will iterate through the array and 
// compare each element with max1 and max2. If the current element is greater than max1, we 
// update max2 to be max1 and then update max1 to be the current element. If the current 
// element is not greater than max1 but is greater than max2 and not equal to max1, we update 
// max2 to be the current element.
    if(f[i]>max1){ //here we use f[i]!=max1 to handle the case when all elements are same and to avoid max2 being equal to max1
        max2=max1;
        max1=f[i];
    }else if(f[i]>max2 && f[i]!=max1){
        max2=f[i];
    }   
}
console.log("Second maximum number is "+max2);

let g=[1,2,3,4,5,6,8]; // i wana find the missing number in the array if only one number is missing without inbuild function only using c++ logic in python
let s=g.length;
let totalSum=(s+1)*(s+2)/2;
let actualSum=0;
for(let i=0;i<g.length;i++){
    actualSum=actualSum+g[i];
}
let missingNumber=totalSum-actualSum;
console.log("Missing number is "+missingNumber);

 let h=[1,2,3,4,5,6,8,9,11]; // i wana find the missing number in the array if more than one number is missing without inbuild function only using c++ logic in python
let n1=h.length;
let totalSum1=(n1+2)*(n1+3)/2;
let actualSum1=0;
for(let i=0;i<h.length;i++){
    actualSum1=actualSum1+h[i];
}let missingSum=totalSum1-actualSum1;
console.log("Sum of missing numbers is "+missingSum);

let l="manoj agrahari";
count=0;
for(let i=0;i<l.length;i++){
    if(l[i]=='a' || l[i]=='e' || l[i]=='i' || l[i]=='o' || l[i]=='u'){
        count++;
    }
}
console.log("Number of vowels in string is "+count);

let m="manoj agrahari"; //no of time particular vovelrepeated in string
let countMap1={};
let countMap2={};
for(let i=0;i<m.length;i++){
    if(m[i]=='a' || m[i]=='e' || m[i]=='i' || m[i]=='o' || m[i]=='u'){
        let char=m[i];
        countMap1[char]=countMap1[char]?countMap1[char]+1:1;
    }else{
        let char=m[i];
        countMap2[char]=countMap2[char]?countMap2[char]+1:1;
    }
}
console.log(countMap1);
console.log(countMap2);

let v="manish agrahari";
let countmap={};
for(let i=0;i<v.length;i++){
    let single=v[i];
    countmap[single]=countmap[single]?countmap[single]+1:1;
}
console.log(countmap);

const student={fname:"abc",lname:"xyz",age:21};
student.age=22;
student.city="pune";
student['country']="India";
console.log(student); // oneway t0 print
for(let key in student){ //secound way to print dict
    console.log(key+" : "+student[key]);
}

const fruits={apple:10,banana:20,grapes:15,mango:25,
   'x': function(){ return 9}};
console.log(fruits.x());

const fruits1={apple:10,banana:20,grapes:15,mango:25,
   'x': function(){ return this.apple+" "+this.banana;}};
console.log(fruits1.x());
for(let key in fruits1){
    console.log(key+" : "+fruits1[key]);
}