function func()
{
    console.log("Inside await function");
    throw "new error";
}

try{
    async function asFunc(){
        try{
        console.log("This is inside async function");
        await func();
        }
        catch(err)
        {
            console.log("Error is caught inside asynchronous function");
        }
    }
    asFunc();
}
catch(err)
{
    console.log("This is error");
}
finally
{
    console.log("This is finally block");
}
console.log("This is outside of main 1");
console.log("This is outside of main 2");
console.log("This is outside of main 3");
console.log("This is outside of main 4");
for(var i=1;i<=5;i++) console.log(i);
