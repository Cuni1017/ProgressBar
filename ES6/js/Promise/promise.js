const step1 = (data, resolve, reject) => {
  const { url } = data;
  console.log(url);
  setTimeout(() => {
    console.log("step1");
    if (false) {
      resolve(["step1 result", "step1 result 2"]);
    } else {
      reject();
    }
  }, 300);
};
// const step2 = (data, resolve, reject) => {
//   const { value } = data;
//   console.log("step2 param value: " + value);
//   setTimeout(() => {
//     console.log("step2");
//     if (true) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 200);
// };
const step3 = (resolve, reject) => {
  setTimeout(() => {
    console.log("step3");
    if (true) {
      resolve("final value");
    } else {
      reject();
    }
  }, 100);
};

// 更好的寫法 最後再return Promise
const step2 = (value) => {
  console.log(value);
  //如果不加return會導致step2,step3都一起執行，而因為step3的TimeOut比較短所以先輸出step3
  return new Promise((resolve, reject) => {
    const data = {
      value,
    };
    const { value } = data;
    console.log("step2 param value: " + value);
    setTimeout(() => {
      console.log("step2");
      if (true) {
        resolve();
      } else {
        reject();
      }
    }, 200);
  });
};

// #跟callback無異
// var promise1 = new Promise(step1).then(() => {
//   new Promise(step2).then(() => {
//     new Promise(step3).then(() => {});
//   });
// });
// #改良
// var promise1 = new Promise(step1)
//   .then(() => {
//     return new Promise(step2); //如果不加return會導致step2,step3都一起執行，而因為step3的TimeOut比較短所以先輸出step3
//   })
//   .then(() => {
//     return new Promise(step3);
//   })
//   .then(() => {
//     return new Promise(step1);
//   });

// 新版
const getUser = (url) => {
  new Promise((resolve, reject) => {
    const data = {
      url: url,
    };
    step1(data, resolve, reject);
  })
    .then((value) => {
      return step2(value);
    })
    .then(
      () => {
        return new Promise(step3);
      },
      () => {
        console.log("step2 reject");
        return "failed"; // 傳入step3當value，否則step3的value會是undefined
      }
    )
    .then((value) => {
      console.log(value);
    });
};
getUser("https://domain");

// Promise 示範
// function msgAfterTimeout(msg, who, timeout) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
//   });
// }
// msgAfterTimeout("", "Foo", 200)
//   .then((msg) => msgAfterTimeout(msg, "Bar", 100))
//   .then((msg) => {
//     console.log(`done after 300ms:${msg}`);
//   });

//   done after 300ms: Hello Foo! Hello Bar!
