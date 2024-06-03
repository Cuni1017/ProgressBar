import func, { sum, pi, echo } from "./Tool.js";

// export default class App {
//   constructor() {
//     console.log("App js init");
//   }
// }

// export class App {
//   constructor() {
//     console.log("App js init");
//   }
// }

// const app = new App()

// 正確寫法
class App {
  constructor() {
    console.log("App js init");
  }
  echo = () => {
    echo("function echo from Others");
    console.log(sum(3, 6));
    console.log(pi);
    console.log(func(10));
  };
  renderTitle = (target) => {
    target.innerHTML = "This is a Titie";
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  //   app.echo();
  app.renderTitle(document.getElementById("title"));
});

export default App;
