//12
/*
let a = 20  
let b = 10 

let C = Math.sqrt (a**2 + b**2); 
console.log(a+b+C);

//13

R1 = 10
R2 = 5
 
D = R1 > R2 

let  S1 = Math.PI * (R1)**2
let  S2 =  Math.PI * (R2)**2
let s3 = S1 - S2 

console.log( s3);
//14

let L = 20
let R = 10
  
let c = L = 2 * Math.PI * R
let S = Math.PI * R**2

console.log(S);

 //15

let S3 = 10
let D4 = 25
let w = D4/2
    
let L2 = 2 * Math.PI * w 
let S4 = Math.PI * w**2

console.log(S4);
 //16
  let X1= 3
  let X2= 2
  let A16 = Math.abs (X2 - X1) 
   console.log(A16);

   // 17
let A1 = 5
let B1 = 10 
let C1  = 3 

let s2 = Math.abs ( C1-A1 ) 

let f2 = Math.abs ( C1-B1 )

 console.log(s2);
console.log(f2); 
//18 

let A3 = 10
let B3 = 5 
let  C3 = 15 

let D = Math.abs (A3-C3 )
let q = Math.abs (B3-C3 )

console.log(D );
console.log(q);
//19 


 let a=10 
 let b=15 
 let c=5 
 let d=20

 let a1 = Math.abs ( b-a)
 let b2  = Math.abs (c-d )

 let f =  2 * (a1 + b2 )  
 
 console.log(f);
 //20 

 let x1 = 20 
 let x2 = 10 
 let y1 = 5
 let y2 = 10 
  
 let D1 = Math.sqrt ( (x2-x1 )**2 + (y1-y2)**2)

 console.log(D1);*/
 
//21
let x1  = 10 
let x2  = 13 
let y1  = 15 
let y2  = 20 
let s1  = 30 
let s2  = 25 
 
 let A = Math.sqrt ( (x1-x2 )**2 + (x2-x1)**2)
 let B = Math.sqrt ( (y1- y2 )**2 + (y2-y1)**2)
 let C = Math.sqrt ( ( s1 - s2 )**2 + (s2-s1)**2)

P = (A+ B + C) / 2
S = Math.sqrt (P * (P - A ) * (P - B) * (P - C))
console.log(S);
//22
let A1 = 20
let B1 = 10 

console.log([B1,A1 ] );

console.log([ A1,B1]);
//23 
let A2 = 5
let B2 = 10
let C2 = 15

console.log([ A2, B2, C2 ])
console.log([ C2, A2, B2 ])
console.log([B2, C2, A2]);

//24

let A5 = 5
let B5 = 10
let C5 = 15

console.log([A5, B5, C5])
console.log([B5, C5, A5])
console.log([C5, A2, B5] )
//25
let x = 2;

let y = 3 * x ** 6 - 6 * x ** 2 - 7;

console.log(y);