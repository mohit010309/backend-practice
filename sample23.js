var tl=anime.timeline({
    easing: 'easeOutExpo',
    duration:200,
});

// tl.add({
//     targets:".c1",
//     backgroundColor:"#ff0000"
// })
// tl.add({
//     targets:".c1",
//     backgroundColor:"#ffffff"
// })
// .add({
//     targets:".c2",
//     backgroundColor:"#ffff00"
// })
// .add({
//     targets:".c2",
//     backgroundColor:"#ffffff"
// })
// .add({
//     targets:".c3",
//     backgroundColor:"#008000"
// })
// .add({
//     targets:".c3",
//     backgroundColor:"#ffffff"
// });
var arr=[2,1,3,5,4,7,6];
var i,j;
for(i=0;i<arr.length-1;i++)
{
    tl.add({
        targets:".c"+(i+1),
        backgroundColor:"#ff0000"
    })
    for(j=i+1;j<arr.length-i-1;j++)
    {
        tl.add({
            targets:".c"+(j+1),
            backgroundColor:"#0000ff"
        })
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        console.log(arr[i],arr[j]);
        tl.add({
            targets:".c"+(j+1),
            backgroundColor:"#fff",
        })
    }
    tl.add({
        targets:".c"+(i+1),
        backgroundColor:"#ffffff"
    })
}
console.log(arr);
