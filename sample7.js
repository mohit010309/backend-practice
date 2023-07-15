function func1()
{
    console.log("This is function 1");
}
function func2()
{
    console.log("this is function 2");
}

console.log("Hello");
async function func()
{
    console.log("This is starting of asynchronous function");
    await func1();
    console.log("This is ending of asynchronous function");
}
func();
func2();
console.log("world");