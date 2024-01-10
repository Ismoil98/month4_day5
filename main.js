// func1
// function power(a, n) {
//     return Math.pow(a,n)
// }
// let x = power(2,4);
// console.log(x);



// fun2 
// function mean(a, b) {
//     console.log(`O'rta arifmeik ${(a+b)/2}`);
//     console.log(`O'rta geometrik ${(a*b)**(1/2)}`);
// }
// mean(4,3)



// fun3
// function sign(n) {
//     if (n==0) {
//         return 0;
//     } else if (n > 0) {
//         return 1
//     } else {
//         return -1
//     }
// }
// let x = sign(4);
// console.log(x);



// fun4
// function numberOfRoots(A, B, C) {
//     let D = B*B-4*A*C;
//     if (D<0) {
//         return 0
//     } else if (D == 0) {
//         return 1;
//     } else {
//         return 2;
//     }
// }
// let x = numberOfRoots(1,-6,9)
// console.log(x);



// fun5 
// function areaCircle(R) {
//     let S = Math.PI * R*R
//     return S
// }
// let S = areaCircle(5)
// console.log(S);



// fun6
// function sumRange(A, B) {
//     if (A>B){
//         return 0
//     } else {
//         let S=0
//         for (let i=A; i<=B; i++){
//             S += i;
//         }
//         return S
//     }
// }
// let S = sumRange(8,10)
// console.log(S);



// fun7 
// function calc(A, B, S) {
//     if (S === '-') {
//         return A-B
//     } else if (S === '*') {
//         return A*B
//     } else if (S === '/') {
//         return A/B
//     } else if (S === '+') {
//         return A+B
//     } else {
//         return 0
//     }
// }
// let x = calc(7,8,"+");
// console.log(x);



// fun8 
// function  isEven(K) {
//     if (K%2==1) {
//         return false
//     } else {
//         return true
//     }
// }
// let x = isEven(8)
// console.log(x);



// fun9
// function sortABC(a, b, c) {
//     let min = Math.min(a,b,c);
//     let max = Math.max(a,b,c);
//     let x;
//     if (a != max && a != min) {
//         x = [min, a, max]
//         return x
//     } else if (b != max && b != min) {
//         x = [min, b, max]
//         return x
//     } else {
//         x = [min, c, max]
//         return x
//     }
// }
// let x = sortABC(10,5,8)
// console.log(x);


// fun10


// fun11 
// function isPrime(N) {
//     let S=0;
//     for (let i=1; i<=N; i++) {
//         if (N % i == 0) {
//             S++
//         }
//     }
//     if (S==2) {
//         return true
//     } else {
//         return false
//     }
// }
// let x = isPrime(7)
// console.log(x);



// fun12 
// function isPrime(N) {
//     let S=0;
//     for (let i=1; i<=N; i++) {
//         if (N % i == 0) {
//             S++
//         }
//     }
//     if (S==2) {
//         return true
//     } else {
//         return false
//     }
// }
// function numberOfPrime(N) {
//     let S=0;
//     for (let i=2; i<N; i++) {
//         if (isPrime(i)) {
//             S++;
//             console.log(i);
//         }
//     }
//     return S
// }
// let x =numberOfPrime(10)
// console.log(x);



// fun13 
// function digitCount (K) {
//     let x = K;
//     let c = 0
//     while (x>0) {
//         c ++
//         x =Math.floor(x/10)
//     }
//     return c
// }
// function digitNth(K, N) {
//     let c = digitCount(K)
//     let x;
//     if (c<N) {
//         return -1
//     } else {
//         x = K % (Math.pow(10, (c-N+1)))
//         x /= Math.pow(10, c-N)
//         x = Math.floor(x)
//         return x
//     }
// }
// let x = digitNth(105782,5)
// console.log(x);



// fun14
// function inverseNumber(N) {
//     let a = N % 10;
//     let b = Math.floor(N/10)
//     while (b>0) {
//         a = a*10 + b % 10
//         b = Math.floor(b/10)
//     }
//     return a
// }
// let a = inverseNumber(56814)
// console.log(a);



// fun15 
// function inverseNumber(N) {
//     let a = N % 10;
//     let b = Math.floor(N/10)
//     while (b>0) {
//         a = a*10 + b % 10
//         b = Math.floor(b/10)
//     }
//     return a
// }
// function isPalindrom(N) {
//     let a = inverseNumber(N)
//     if (a == N) {
//         return true
//     } else return false
// }
// let x = isPalindrom(123454321)
// console.log(x);



// fun16 
// function factorial(N) {
//     let S=1
//     for (let i=2; i<=N; i++) {
//         S *= i;
//     }
//     return S
// }
// let x = factorial(6)
// console.log(x);



// fun17
// function getSum3(N) {
//     let s=0;
//     for (let i=1; i<=N; i++) {
//         if (i % 3 == 0){
//             s += i
//         }
//     }
//     return s
// }
// let x = getSum3(15)
// console.log(x);



// fun18
// function sumOddEven(N) {
//     let juft = 0
//     let toq = 0
//     for (let i=1; i<=N; i++) {
//         if (i % 2 == 1) {
//             toq += i
//         } else {
//             juft += i
//         }
//     }
//     let x = [juft, toq]
//     return x;
// }
// let x = sumOddEven(10)
// console.log(x);