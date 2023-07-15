setInterval(func,1000);
var i=0;
function func()
{
    var s1="Hello";
    var s2="World";
    var s;
    if(i%2==0)
        s=s1;
    else
        s=s2;
    i++;
    document.querySelector("h1").innerHTML=s;
}