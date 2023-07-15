console.log("above async function");
async function func(){
    console.log("Inside async function 1");
    await console.log("Inside async function 2");
    console.log("Inside async function 3");
    console.log("Inside async function 4");
    console.log("Inside async function 5");
}
func();
console.log("Below async 1");
console.log("Below async 2");
console.log("Below async 3");
console.log("Below async 4");