function awaitf()
{
    console.log("This is inside await function");
    throw "new error";
}
async function func()
{
    console.log("This is inside async function");
    // try
    // {
    //     await awaitf();
    //     console.log("This is async > await > try");
    // }
    // catch(err)
    // {
    //     console.log("Error of await inside async");
    // }
    // finally
    // {
    //     console.log("this is finally of await inside async");
    // }
    await awaitf();
    //console.log("This is after await");
}

try
{
    func();
    console.log("This is try outside async");
}
catch(err)
{
    console.log("error of async outside await");
}
finally 
{
    console.log("This is finally of async");
}
console.log("outside main 1");
console.log("outside main 2");