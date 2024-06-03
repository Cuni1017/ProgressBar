let step1 = (callback) => {
  setTimeout(() => {
    console.log("callback: step1");
    if (callback) {
      callback();
    }
  }, 300);
};
let step2 = (callback) => {
  setTimeout(() => {
    console.log("callback: step2");
    if (callback) {
      callback();
    }
  }, 200);
};
let step3 = (callback) => {
  setTimeout(() => {
    console.log("callback: step3");
    if (callback) {
      callback();
    }
  }, 100);
};
const run = () => {
  step1(() => {
    step2(() => {
      step3();
    });
  });
};
run();
