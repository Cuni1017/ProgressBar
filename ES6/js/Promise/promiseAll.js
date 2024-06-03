let step1 = () => {
  console.log("step1 start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step1");
      if (true) {
        resolve("step1 resolve");
      } else {
        reject("step1 reject");
      }
    }, 300);
  });
};
let step2 = () => {
  console.log("step2 start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step2");
      if (false) {
        resolve("step2 resolve");
      } else {
        reject("step2 reject");
      }
    }, 200);
  });
};
let step3 = () => {
  console.log("step3 start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step3");
      if (true) {
        resolve("step3 resolve");
      } else {
        reject("step3 reject");
      }
    }, 100);
  });
};
let step4 = () => {
  console.log("step4 start");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step4");
      if (true) {
        resolve("step4 resolve");
      } else {
        reject("step4 reject");
      }
    }, 100);
  });
};

const run = () => {
  Promise.all([step1(), step2()])
    .then(
      (result) => {
        console.log(result);
        return step3();
      },
      (result) => {
        console.log(result);
      }
    )
    .then(() => {
      return Promise.all([step3(), step4()]);
    })
    .then(() => {
      return step4();
    });
};
run();
