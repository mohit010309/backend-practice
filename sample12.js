function awaitf()
	{
        console.log("This is await 1");
		throw "new error";
        console.log("This is await 2");
	}
	try{
		async function func(){
			console.log("Inside async function 1");
			await awaitf();
		}
		func();
	}
	catch(err)
	{
		console.log("This is error");
	}
	finally
	{
		console.log("This is finally");
	}
	console.log("This is outside main 1");
	console.log("This is outside main 2");