const step1 = (callback) => {
  setTimeout(() => {
    console.log("step1");
    if (callback) {
      callback();
    }
  }, 300);
};
const step2 = (callback) => {
  setTimeout(() => {
    console.log("step2");
    if (callback) {
      callback();
    }
  }, 200);
};
const step3 = (callback) => {
  setTimeout(() => {
    console.log("step3");
    if (callback) {
      callback();
    }
  }, 100);
};

const step4 = (callback) => {
  setTimeout(() => {
    console.log("step4");
    if (callback) {
      callback();
    }
  }, 600);
};

let eventHandler = [step1, step2, step4, step3, step4];

const run = (index = 0) => {
  if (index >= eventHandler.length) {
    return;
  }
  const handler = eventHandler[index];
  handler(() => {
    run(index + 1);
  });
};
run();
