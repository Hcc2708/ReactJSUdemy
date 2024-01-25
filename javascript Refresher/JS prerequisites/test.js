// const user ={
//     name : 'raj',
//     age : 25,
//     greet(){
//         console.log('hey how are you');
//     },
//     fun : function (num){
//         console.log(`the Number is ${num}`);
//         console.log(this.name);
//     },
//     // fun2 : ()=> {
//     //     return this.age  arrow function do not have their own this context
//     // }
// }

// console.log(user.fun(27));
// // console.log(user.fun2())
// console.log(user.greet());

function getRandomInt(max){
    return Math.random()*(max + 1)
}

console.log(getRandomInt(2));