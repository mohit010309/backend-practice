try{
    async function func(){
        console.log("This is asynchronous function");
        await (function(){
            throw "new error";
        })();
    }
    func();
}
catch(err)
{
    console.log("Error");
}
finally
{
    console.log("This is finally");
}
console.log("This is console 1");
console.log("This is console 2");
console.log("This is console 3");
console.log("This is console 4");
console.log("This is console 5");
console.log("This is console 6");