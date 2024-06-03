const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step1");
      const returnValue = 1;
      if (false) {
        resolve(returnValue);
      } else {
        reject("Error 1!!");
      }
    }, 300);
  });
};

const step2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step2");
      const returnValue = 2;
      if (true) {
        resolve(returnValue);
      } else {
        reject("Error 2!!");
      }
    }, 200);
  });
};

// async / await

const run = async () => {
  try {
    const returnValue1 = await step1();
    console.log(returnValue1);
    const returnValue2 = await step2();
    console.log(returnValue2);
  } catch (error) {
    console.log(error);
  }

  // step1().then((returnValue1) => {
  //     console.log(returnValue1)
  //     return step2()
  // }).then((returnValue2) => {
  //     console.log(returnValue2)
  // })
};

run();
