// console.log("promise")

//now lets create a simple JS class



//1.function defination
function myFunction() {//camelcase
    console.log("hello from function 1")
}
//2.function calling
myFunction()

class MyClass {//pscal case

    //1.Property 

    //2. Constructor

    //3.Method
    myFunc() {
        console.log("hello from myFunction")
    }

}

//you have to create instance/object

//let object=new ClassName()
let object = new MyClass();
//object.method
object.myFunc()

let po = new Promise((resolve, reject) => {
    //Producing code
    setTimeout(() => {
        resolve('santosh');//actual argument
        // reject("onkar")
    }, 3000)
})
//consuming code


//promise object chain
po.then((d) => {
    console.log('result', d)
}).then().then().catch((e) => {
    console.log("err", e)

}).finally((all) => {
    console.log('All', all)
})