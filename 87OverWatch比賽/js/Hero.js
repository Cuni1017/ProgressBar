// 英雄、是個人、大招衝能速度、大招100才能放、小技能1.2都有自己的CD
// 他能做的Action: 前後左右、普攻、防禦、放大招、小技能1、小技能2
class Position {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  PrintPosition = (Position) => {
    console.log(`x : ${this.x}, y : ${this.y}, z : ${this.z}`);
  };
}

class Human extends Position {
  constructor(Name, Health = 100, Height, Weight, Sex, Age, x, y, z) {
    super(x, y, z);
    this.Name = Name;
    this.Health = Health;
    this.Height = Height;
    this.Weight = Weight;
    this.Sex = Sex;
    this.Age = Age;
  }
  set name(name) {
    console.log(`Set Name: ${name}`);
    this._name = Name;
  }
  //   { ["x"]: 1, ["y"]: 2, ["z"]: 4 }
  allMove = (objArray) => {
    let xAmount = objArray["x"];
    let yAmount = objArray["y"];
    let zAmount = objArray["z"];
    this.move("x", xAmount);
    this.move("y", yAmount);
    this.move("z", zAmount);
  };
  move = (direction, amount = 0) => {
    if (direction === "x") {
      this.x += amount;
    } else if (direction === "y") {
      this.y += amount;
    } else if (direction === "z") {
      this.z += amount;
    } else {
      console.log("wrong direction");
    }
    // console.log(`${this.Name} Move After`);
    // this.PrintPosition();
  };
}

class Hero extends Human {
  constructor(Name, Health, Height, Weight, Sex, Age, x, y, z, attack) {
    super(Name, Health, Height, Weight, Sex, Age, x, y, z);
  }
}

let H1 = new Human("Mike", 168, 70, "boy", 22);
let H2 = new Human("Cuni", 176, 68, "boy", 23);
console.log(H1);
H1.Name = "MikeLiu";
console.log(H2);
// H1.PrintPosition();
// H1.move("z", 1);
H1.allMove({ ["x"]: 1, ["y"]: 2 });
H1.PrintPosition();
H1.allMove({ ["x"]: 5, ["y"]: 3, ["z"]: 5 });
H1.PrintPosition();
// class Hero extends Human {
//   constructor(Name,Height,Weight,Sex,Age) {
//     super(props);
//   }
// }

// let obj = { ["x"]: 1, ["y"]: 2, ["z"]: 4 };
// obj.forEach((element) => {
//   console.log(element);
// });
// console.log(obj);
