function awaitf()
{
    console.log("This is await 1");
    throw "new error";
    console.log("This is await 2");
}
async function func(){
    try{
        console.log("Inside async function 1");
        await awaitf();
    }
    catch(err)
    {
        console.log("error");
    }
}
func();
console.log("This is outside main 1");
console.log("This is outside main 2");