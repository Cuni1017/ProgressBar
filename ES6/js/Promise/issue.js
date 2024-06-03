let step1 = () => {
  setTimeout(() => {
    console.log("step1");
  }, 300);
};
let step2 = () => {
  setTimeout(() => {
    console.log("step2");
  }, 200);
};
let step3 = () => {
  setTimeout(() => {
    console.log("step3");
  }, 100);
};
const run = () => {
  step1();
  step2();
  step3();
};
run();
