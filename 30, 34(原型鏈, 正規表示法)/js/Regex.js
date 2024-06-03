// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// // exec
// const regex1 = RegExp("foo*", "gi"); // g:當找到第一個符合時不回傳，#跳過已經找到過的foo i:不分大小寫的找foo
// const str1 = "table football, foosball, Foosasd";
// let array1;

// while ((array1 = regex1.exec(str1)) !== null) {
//     console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
//     // expected output: "Found foo. Next starts at 9."
//     // expected output: "Found foo. Next starts at 19."
// }

// // test
// const str = "table football";
// const regex = new RegExp("foo*");
// const globalRegex = new RegExp("foo*", "g");

// console.log(regex.test(str));
// // expected output: true

// console.log(globalRegex.lastIndex);
// // expected output: 0

// console.log(globalRegex.test(str));
// // expected output: true

// console.log(globalRegex.lastIndex);
// // expected output: 9

// console.log(globalRegex.test(str));
// // expected output: false

//validateEmail 驗證信箱
var regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var email = "ahet1017@gmail.com";
console.log(email);
console.log(regex.test(email.toLowerCase()));
