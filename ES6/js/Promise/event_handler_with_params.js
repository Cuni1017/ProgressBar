const step1 = (data, success = () => {}, failed = () => {}) => {
  console.log("Step1 get params: " + data);
  setTimeout(() => {
    console.log("step1");
    let result = "step1_";
    if (result == "step1_") {
      success(result);
    } else {
      failed(result);
    }
  }, 300);
};
const step2 = (data, success = () => {}, failed = () => {}) => {
  console.log("Step2 get params: " + data);
  setTimeout(() => {
    console.log("step2");
    let result = "step2_";
    if (result == "step2_") {
      success(result);
    } else {
      failed(result);
    }
  }, 200);
};
const step3 = (data, success = () => {}, failed = () => {}) => {
  console.log("Step3 get params: " + data);
  setTimeout(() => {
    console.log("step3");
    let result = "step3_";
    if (result == "step3_") {
      success(result);
    } else {
      failed(result);
    }
  }, 100);
};

const final = (data) => {
  console.log("final: " + data);
};

let eventHandler = [step1, step2, step3, final];

const run = (index = 0, data = {}) => {
  if (index >= eventHandler.length) {
    return;
  }
  const handler = eventHandler[index];
  const success = (params) => {
    run(index + 1, params);
  };
  const failed = () => {
    //failed
  };
  handler(data, success, failed);
};
run();
