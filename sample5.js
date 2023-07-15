async function func()
{
    console.log("Some value printed from function...");
    try{
    await (function(){throw "new error";})();
    }
    catch(err)
    {
        console.log("Hello mohit actually error was here...");
    }
}
try{
    func();
}
catch(err)
{
    console.log("This error will be here");
}
