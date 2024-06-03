export * from "./Math.js"; //將Math.js裡的export一起回傳
export * from "./Others.js";

export default (x) => {
  return x * x;
};

// 每一個js檔只能有一個default export

let aaa = 10;
// export default aaa;

export let bbb = 5;

// 除了default，export 後必須是宣告式或陳述式
// let bbb = 5;
// export bbb;

// default 只能有一個
// let bbb = 100
// export default bbb
