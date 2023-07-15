console.log("Hello")
	async function func(){
		console.log("Inside async function 1");
		await console.log("Inside await function 1");
		console.log("Inside async function 2");
	}
	func();
	console.log("World");
	console.log("outside async function 1");