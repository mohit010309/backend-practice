dataRec=20;
function func(num1,callback)
{
    console.log(num1);
    callback();
}
func(2,function(){
    dataRec=30;
});
console.log(dataRec);