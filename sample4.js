// using JSON parse and JSON stringify methods

function func()
{
    console.log("This is a function");
}
function main()
{
    var s='{"name":"mohit","age":22}';
    var ob=JSON.parse(s);
    console.log(ob);

    var ss=JSON.stringify(ob);
    console.log(typeof ss);
    console.log(ss+2);
}
main();