// Understanding lodash module
const lodash=require('lodash');
const arr=[1,2,3,4,5];
const ans=lodash.chunk(arr,3);
console.log(ans);

// string methods
var s = "m-ohit";
var s1="mohit";
var s2="moh_it";
var s3="moh%it";
var s4="Mo45Hit";
console.log(lodash.camelCase(s));
console.log(lodash.camelCase(s1));
console.log(lodash.camelCase(s2));
console.log(lodash.camelCase(s3));
console.log(lodash.camelCase(s4));