// http://es6-features.org/#Constants ES6所有範例

// Array.prototype.map: 會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼(CallBack)函式運算後所回傳的結果之集合。 //要回傳值
// Array.prototype.foreach: 會將陣列內的每個元素，皆傳入並執行給定的函式一次。 //並沒有回傳值
// Array.prototype.concat() 方法被用來合併兩個或多個陣列。此方法不會改變現有的陣列，回傳一個包含呼叫者陣列本身的值，作為代替的是回傳一個新陣列。
// Array.prototype.includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
// Array.prototype.filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
// Array.prototype.reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。
// Array.from() 方法會從類陣列（array-like）或是可迭代（iterable）物件建立一個新的 Array 實體。
// Array.prototype.keys() 方法會回傳一個包含陣列中的每一個索引之鍵（keys）的新 Array Iterator 物件。
// Array.prototype.shift() 方法會移除並回傳陣列的第一個元素。此方法會改變陣列的長度。
// Array.prototype.slice() 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。
// Array.prototype.splice() 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。
// Math.random() 回傳0~1之間，包含0，不包含1
// Event.preventDefault() 如果事件可以被取消，就取消事件（即取消事件的預設行為）。但不會影響事件的傳遞，事件仍會繼續傳遞。
// Array.prototype.sort() 方法會 *原地（in place）* 對一個陣列的所有元素進行排序，並回傳此陣列。排序不一定是穩定的（stable）。預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。
// Array.prototype.indexOf() 方法會回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。
// Array.prototype.fill() 方法會將陣列中索引的第一個到最後一個的每個位置全部填入一個靜態的值。
// String.prototype.trim() 方法會移除字串起始及結尾處的空白字元。 本文中的空白字元指所有空格字元（如：空格、欄標、無間斷空格等等）及換行字元（如：換行、回車等等）。
// Array.prototype.every() 方法會測試陣列中的所有元素是否都通過了由給定之函式所實作的測試。

// #
{
  // console.dir(Promise);
  const p = new Promise((resolve, reject) => {
    reject("fail");
  });
  console.dir(p);
  console.log(
    p
      .then(
        (success) => {
          console.log(success);
        },
        (fail) => {
          console.log(fail, "1");
        }
      )
      .catch((error) => {
        console.log(error);
      })
  );
}

// #Call Stack, Event Queue
{
  // debugger會暫停JS並自動切到Resources
  // Scope: 作用域
  // Call Stack(Execution Stack): 執行堆疊，最下面的(anonymous)是指全域的執行環境

  // JavaScript的Call Stack是一種後進先出的數據結構，用於跟蹤函數調用的位置和儲存相關變量。
  // JS嚴格來說沒有計算時間的能力，setTimeout是Web API
  // 只要JS的程式碼包含非同步的事件，它都會被加到Event Queue，裡面的任務不會立刻執行，而是等待所有程式碼執行完才執行
  {
    // function callContext(params) {
    //   console.log(params);
    //   debugger;
    // }
    // callContext("小明");
  }
  {
    // function includingTax(price) {
    //   debugger;
    //   return price * 1.05;
    // }
    // function discount(price, percent) {
    //   return includingTax(price * percent);
    // }
    // function sum(price) {
    //   return discount(price, 0.9);
    // }
    // console.log(sum(1000));
  }
  {
    // console.time("早安");
    // function eatBreakfast() {
    //   console.log("吃早餐");
    // }
    // function doTheDishes() {
    //   let dishId = 0;
    //   for (let i = 0; i < 1000000; i++) {
    //     dishId = parseInt(Math.random() * i);
    //   }
    //   console.log("洗餐盤");
    // }
    // function callSomeone(someone) {
    //   console.time("打給恩娣");
    //   setTimeout(() => {
    //     debugger;
    //     console.log(someone + "回電");
    //     console.timeEnd("打給恩娣");
    //   }, 0);
    // }
    // (function goodMoring() {
    //   // debugger;
    //   eatBreakfast();
    //   callSomeone("恩娣");
    //   doTheDishes();
    // })();
    // console.timeEnd("早安");
  }
}

// #console.time() console.timeEnd()
{
  // function BrashAndWash() {
  //   console.log("洗臉刷牙");
  // }
  // function WashDishes() {
  //   let id = 1;
  //   for (let i = 0; i < 100000; i++) {
  //     id = Math.floor(Math.random() * i);
  //   }
  //   console.log(id);
  // }
  // function CallMing() {
  //   console.log("打給小明");
  // }
  // console.time("test");
  // (function () {
  //   BrashAndWash();
  //   WashDishes();
  //   CallMing();
  // })();
  // console.timeEnd("test");
}

// #如何使用class擴展內建函式建構子
{
  // class DateFormatter extends Date {
  //   constructor(d = new Date()) {
  //     super(d);
  //   }
  //   getLocalDate() {
  //     return `民國 ${this.getFullYear() - 1911} 年 ${
  //       this.getMonth() + 1
  //     } 月 ${this.getDate()} 日`;
  //   }
  // }
  // const date = new DateFormatter();
  // console.log(date.getLocalDate());
}

{
  // class P {
  //   constructor(name) {
  //     this.name = name;
  //   }
  //   getId() {
  //     return this.name;
  //   }
  // }
  // Object.defineProperty(P.prototype, "getName", {
  //   value: function () {
  //     return this.name;
  //   },
  //   // enumerable: true,
  // });
  // let p1 = new P("大");
  // console.log(p1);
  // function Person(name) {
  //   this.name = name;
  //   this.getId = function () {
  //     return "2";
  //   };
  // }
  // console.log(window);
  // // Person.__proto__.getName = function () {
  // //   return `${this.name} 你好`;
  // // };
  // Object.defineProperty(Person.prototype, "getName", {
  //   value: function () {
  //     return this.name;
  //   },
  //   enumerable: true,
  // });
  // let Ming = new Person("小明");
  // console.log(Ming);
  // console.log(Ming.__proto__.constructor === Person);
  // console.dir(Person.__proto__.constructor === Function);
}

// #原型
{
  // function Animal(family) {
  //   this.basic = "有四肢，五官";
  //   this.family = family || "人科";
  // }
  // Animal.prototype.move = function () {
  //   console.log(`${this.name} 移動`);
  // };
  // var Ming = new Animal();
  // Ming.name = "小明";
  // function Dog(name, color, size) {
  //   Animal.call(this, "狗科");
  //   this.name = name;
  //   this.color = color;
  //   this.size = size;
  // }
  // Dog.prototype = Object.create(Animal.prototype);
  // Dog.prototype.constructor = Dog;
  // Dog.prototype.bark = function () {
  //   console.log(`${this.name} bark!`);
  // };
  // let d1 = new Dog("d1", "red", "大");
  // // d1.bark();
  // // d1.move();
  // console.dir(d1);
  // console.dir(Animal);
  // console.log(Animal.prototype);
  // console.dir(Dog);
  // console.log(Dog.prototype.__proto__ === Animal.prototype);
  // console.log("--");
  // console.log(Animal.prototype.__proto__);
  // console.log({} instanceof Object);
  // console.log([] instanceof Object);
  // let a = 1;
  // a.b = 2;
  // console.dir(a);
  // console.log(Dog.prototype.constructor === Dog);
  // console.log(d1 instanceof Dog);
  // console.log(d1.__proto__.constructor === Dog);
  // console.dir(d1.__proto__ === Dog.prototype);
  // console.log(Dog.prototype);
}
// #在瀏覽器看__proto__，原型方法看起來比較淺(粉色)，而自訂函式比較深(紫色)
{
  // console.log([1, 2, 3]);
  // function Person(name) {
  //   this.name = name;
  // }
  // var Ming = new Person("小明");
  // Person.prototype.callme = function () {
  //   return `${this.name} 你好`;
  // };
  // console.log(Ming);
  // console.log(Ming.callme());
}
// #屬性描述器
{
  // 在JS中，每一個物件除了其value外，還包含其描述器(descriptor) 如configurable
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
  // let person = {};
  // Object.defineProperty(person, "name", {
  //   value: "小明", //要賦予的值
  //   writable: false, //預設為false，該屬性(name)的值能不能被更改
  //   configurable: false, //能否被刪除(delete)，預設為false
  //   enumerable: false, //能否被列舉(Object.keys, for...in...)，預設為false
  // });
  // console.log(person);
  // person.name = "大"; //##若writable為true才可以這樣更改
  // // ##若違反defineProperty給的描述器，在嚴格模式下都會丟錯誤出來
  // {
  //   (() => {
  //     // "use strict";
  //     // delete person.name; // 若configurable為true則可以刪除
  //   })();
  // }
  // // ##若enumerable為true則['name']；false則為[]
  // {
  //   console.log(Object.keys(person));
  //   for (const key in person) {
  //     console.log(key);
  //   }
  // }
  // // ##若其屬性為不可列舉，在chrome會呈現淺色(粉紅色)
  // person.generalProperty = "這是一般屬性";
  // console.log(person);
}
// #getter和setter如何運作？
{
  // getter和setter一樣屬於屬性描述器(descriptor)
  // getter在取值觸發，而setter在設值時觸發
  // let money = {
  //   total: 100,
  //   set save(m) {
  //     this.total += m / 2;
  //   },
  //   get hope() {
  //     return this.total * 2;
  //   },
  // };
  // console.log(money);
  // money.save = 300; //不是money.save()，因為setter不是function
  // console.log(money.hope);
}

// #原型方法使用for...in...可能發生什麼情況？
{
  // function Person(name) {
  //   this.name = name;
  // }
  // Person.prototype.run = function () {
  //   return `${this.name} 快跑啊`;
  // };
  // let Ming = new Person("小明");
  // console.log(Ming);
  // // ##用這種方式會連__proto__的方法也輸出
  // {
  //   // for (const key in Ming) {
  //   //   console.log(key);
  //   //   // name
  //   //   // run
  //   // }
  // }
  // // ##Object.keys只會取得key而不會取方法
  // // console.log(Object.keys(Ming)); //['name']
  // // ##如果必要使用for...in...
  // {
  //   for (const key in Ming) {
  //     // Object.hasOwnProperty.call(Ming, key) 另一種判斷
  //     if (Ming.hasOwnProperty(key)) {
  //       const element = Ming[key];
  //       console.log(element);
  //     }
  //   }
  // }
}

// #call、apply、bind
{
  // call、apply、bind都可以傳入一個物件改變this的指向，主要差異在使用方法不同。
  // let Jay = {
  //   name: "杰",
  // };
  // let Mei = {
  //   name: "美",
  // };
  // function callName(text1, text2) {
  //   console.log(this.name, text1, text2);
  // }
  // callName("a", "b");
  // callName.call(Jay, "你好", "再見!"); // call是以,隔開
  // callName.apply(Mei, ["你好", "再見!"]); // apply是以一個[]包起來傳入
  // let newCallName = callName.bind(Jay, "你好", "再見!"); //bind也是用,隔開
  // newCallName();
}

{
  // function callName(name) {
  //   console.log(name, arguments, this, window);
  //   // debugger;
  // }
  // callName("Cuni");
  // class Person {
  //   static hello() {
  //     console.log("hello");
  //     // console.log(this);
  //   }
  //   constructor(name) {
  //     this.name = name;
  //   }
  //   callName() {
  //     console.log(this.name);
  //     Person.hello();
  //   }
  // }
  // let p1 = new Person("小明");
  // console.log(p1);
  // p1.callName();
  // Person.hello();
}

{
  // myName = "小名";
  // delete myName;
  // var myName;
  // console.log(myName);
  // var myName = "小";
  // function f1(s) {
  //   console.log(s);
  // }
  // function f2() {
  //   f1(myName);
  //   myName = "大";
  // }
  // f2();
  // setTimeout(() => {
  //   f1(myName);
  //   myName = "大";
  //   console.log(myName);
  // }, 3000);
  // myName = "中";
  // var a = 5;
  // if (function fn1() {}) {
  //   console.log("hi");
  // }
  // let a = function fn1() {
  //   console.log("a");
  // };
  // var a = 1;
  // console.log(a);
  // console.log();
}

// #every
{
  // const isBelowThreshold = (currentValue) => currentValue < 40;
  // const array1 = [1, 30, 39, 29, 10, 13];
  // console.log(array1.every(isBelowThreshold));
  // Expected output: true
}

// #檢測A-Z是否都出現過一次
{
  // ##大神方法
  // function isPangram(string) {
  //   return "abcdefghijklmnopqrstuvwxyz"
  //     .split("")
  //     .every((x) => string.toLowerCase().indexOf(x) !== -1);
  // }
  // ##SB
  // function isPangram(string) {
  //   let AtoZ = [
  //     "a",
  //     "b",
  //     "c",
  //     "d",
  //     "e",
  //     "f",
  //     "g",
  //     "h",
  //     "i",
  //     "j",
  //     "k",
  //     "l",
  //     "m",
  //     "n",
  //     "o",
  //     "p",
  //     "q",
  //     "r",
  //     "s",
  //     "t",
  //     "u",
  //     "v",
  //     "w",
  //     "x",
  //     "y",
  //     "z",
  //   ];
  //   let result = false;
  //   const arr = string.split("");
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === " ") continue;
  //     AtoZ = AtoZ.filter((e) => e !== arr[i].toLowerCase());
  //     if (AtoZ.length === 0) {
  //       result = true;
  //       break;
  //     }
  //   }
  //   return result;
  // }
  // let string = "The quick brown fox jumps over the lazy dog.";
  // console.log(isPangram(string));
}

// #String.trim()
{
  // const greeting = "   Hello world!   ";
  // console.log(greeting);
  // // Expected output: "   Hello world!   ";
  // console.log(greeting.trim());
  // Expected output: "Hello world!";
}

// #Array.fill()
{
  // arr.fill(value[, start[, end]])
  // value => 欲填入陣列的值。、start => 起始的索引值，預設為 0。、end => 結束的索引值，預設為 this.length（即陣列的長度）。
  // const array1 = [1, 2, 3, 4];
  // // Fill with 0 from position 2 until position 4
  // console.log(array1.fill(0, 2, 4));
  // // Expected output: Array [1, 2, 0, 0]
  // // Fill with 5 from position 1
  // console.log(array1.fill(5, 1));
  // // Expected output: Array [1, 5, 5, 5]
  // console.log(array1.fill(6));
  // // Expected output: Array [6, 6, 6, 6]
}

// #Array.Sorting
{
  // ##number
  {
    // let numList = [5, 1, 6, 10, 6, 1, 2, 1];
    // console.log(numList);
    // // a是後面那個=> 一開始: a=>1, b=>5
    // // 若回傳 1.小於0 => a排在小於b之索引的位置 2.等於0 => 不動作 3.大於0 => 把b排在小於a之索引的位置
    // numList = numList.sort((a, b) => {
    //   return a - b;
    // });
    // console.log(numList);
  }
  // ##string
  {
    // let strList = ["t", "A", "a", "b", "B"];
    // console.log(strList);
    // strList = strList.sort((a, b) => {
    //   // localeCompare() 回傳一個數字，用來表示其與被比較的字串的先後順序。
    //   return a.localeCompare(b);
    // });
    // console.log(strList);
  }
  // ##object
  {
    // let data = [
    //   { name: "Tomato", cost: 10, weight: 5 },
    //   { name: "Carrot", cost: 15, weight: 2 },
    //   { name: "Onion", cost: 5, weight: 7 },
    // ];
    // function getSortValue(vegetable) {
    //   return vegetable.name; //指定要sort的東西
    // }
    // const sortOrder = "desc"; //數字的升序還降序 asc or desc
    // data = data.sort((a, b) => {
    //   const valueA = getSortValue(a);
    //   const valueB = getSortValue(b);
    //   const reverseOrder = sortOrder === "asc" ? 1 : -1;
    //   if (typeof valueA === "string") {
    //     return valueA.localeCompare(valueB) * reverseOrder;
    //   } else if (typeof valueA === "number") {
    //     return (valueA - valueB) * reverseOrder; //如果要decending => *-1
    //   }
    // });
    // console.log(data);
  }
}

// #Array.splice()
{
  // const months = ["Jan", "March", "April", "June"];
  // months.splice(1, 0, "Feb");
  // // Inserts at index 1
  // console.log(months);
  // // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
  // months.splice(4, 1, "May");
  // // Replaces 1 element at index 4
  // console.log(months);
  // console.log(months.splice(2, 1));
  // // months.splice(2, 1);
  // console.log(months);
  // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
}

// #插入text至Array的指定index Array.slice(begin,end) 從begin開始到end之前
{
  // const animals = ["ant", "bison", "camel", "duck", "elephant"];
  // console.log(animals.slice(2));
  // // Expected output: Array ["camel", "duck", "elephant"]
  // console.log(animals.slice(2, 4));
  // // Expected output: Array ["camel", "duck"]
  // console.log(animals.slice(1, 5));
  // // Expected output: Array ["bison", "camel", "duck", "elephant"]
  // console.log(animals.slice(-2));
  // // Expected output: Array ["duck", "elephant"]
  // console.log(animals.slice(2, -1));
  // // Expected output: Array ["camel", "duck"]
  // console.log(animals.slice());
  // const insert = (array, index, text) => {
  //   return [...array.slice(0, index), text, ...array.slice(index)];
  // };
  // console.log(animals);
  // console.log(insert(animals, 3, "Hello"));
  // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
}

// #Array加總 Array.reduce()
{
  //   let arr = [2, 3, 1, 5, 7, -5, "*", 2]; //字串會被直接加到數字後面
  //   console.log(
  //     arr.reduce((sum, num) => {
  //       return (sum += num);
  //     }, 0)
  //   );
}

// #自動產生一組Array => Array(n), Array.from(), Array.keys()
{
  // ##Array.from()
  {
    // console.log(Array.from("foo"));
    // // Expected output: Array ["f", "o", "o"]
    // console.log(Array.from([1, 2, 3], (x) => x + x));
    // // Expected output: Array [2, 4, 6]
  }
  // ##Array.keys()
  {
    // const array1 = ["a", "b", "c"];
    // const iterator = array1.keys();
    // console.log(iterator);
    // for (const key of iterator) {
    //   console.log(key);
    // }
  }
  // #Array.shift()
  {
    // const array1 = [1, 2, 3];
    // const firstElement = array1.shift();
    // console.log(array1);
    // // Expected output: Array [2, 3]
    // console.log(firstElement);
    // // Expected output: 1
  }
  {
    // 如果傳遞給 Array 構造函數的唯一參數是 0 和 2^32 - 1（含）之間的整數，將回傳一個新的 JavaScript 陣列，其長度被設定為這個數字。如果參數是任何其他數值，將拋出 RangeError 異常。
    // console.log(Array(100));
    // console.log(Array(100).keys());
    // let Arr = Array.from(Array(100).keys(), (x) => x + 1);
    // console.log(Arr);
  }
}

// #24 ES7 async與await，用Fetch來實作練習
{
  //   const step1 = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         console.log("step1");
  //         const returnResult = 1;
  //         if (false) {
  //           resolve(returnResult);
  //         } else {
  //           reject("Error 1!!");
  //         }
  //       }, 300);
  //     });
  //   };
  //   const step2 = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         console.log("step2");
  //         const returnResult = 2;
  //         if (true) {
  //           resolve(returnResult);
  //         } else {
  //           reject("Error 2!!");
  //         }
  //       }, 200);
  //     });
  //   };
  //   const run = async () => {
  //     // 方式三 try Catch
  //     // try {
  //     //   const returnValue1 = await step1();
  //     //   console.log(returnValue1);
  //     //   const returnValue2 = await step2();
  //     //   console.log(returnValue2);
  //     // } catch (error) {
  //     //   console.log(error);
  //     // }
  //     // 方式二 async await
  //     // await 一定使用在 async的function裡面
  //     const returnValue1 = await step1().catch((error) => {
  //       console.log(error);
  //     });
  //     if (returnValue1) {
  //       console.log(returnValue1);
  //     }
  //     const returnValue2 = await step2().catch((error) => {
  //       console.log(error);
  //     });
  //     if (returnValue2) {
  //       console.log(returnValue2);
  //     }
  //     //     // 方式一 最原始的 以上等同於下面的
  //     //     // step1().then((returnValue) => {
  //     //     //     console.log(returnValue)
  //     //     //     return step2()
  //     //     // }).then((returnValue) => {
  //     //     //     console.log(returnValue)
  //     //     // })
  //   };
  //   run();
}

// #Fetch #22 方法用於發起獲取資源的請求。它返回一個Promise，這個Promise會在請求響應後被解決，並傳回Response對象。
// https://developer.mozilla.org/zh-CN/docs/Web/API/fetch
// https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent

// #22 Fetch GET #23 Fetch Post的參數設定和throw error用處
{
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // response.ok決定會不會是resolve或reject
  // 404並不會算是error，因為可能有404的頁面之類的
  //   fetch("http://127.0.0.1:5500/ES6/json/user.json", { method: "GET" }) //fetch也是一個Promise
  //     .then(
  //       (response) => {
  //         //有回應的話進這裡
  //         // console.log(response.ok) //如果是true表狀態碼在200~299之間
  //         //   console.log(response.status);
  //         if (response.ok) {
  //           return response.json();
  //         } else {
  //           // 方式1;
  //           //   const errorString = {
  //           //     reason: `Status code is ${response.status}`,
  //           //   };
  //           //   return Promise.reject(errorString);
  //           //   方式2;
  //           throw new Error(`Status code is ${response.status}`);
  //         }
  //         // return response.json();
  //       },
  //       (error) => {
  //         //HTTP error的話進這裡
  //         const errorString = {
  //           reason: error,
  //           statusCode: 0,
  //         };
  //         console.log("response error: " + errorString.reason);
  //         return Promise.reject("failed");
  //         // return false
  //         //直接return false的話會進到下面的resolve所以回傳false
  //       }
  //     )
  //     .then(
  //       (myJson) => {
  //         console.log(myJson);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // .catch((error) => {
  //   console.log(error);
  // });
  //   //   (errorObject) => {
  //   //     console.log(`error: ${errorObject.reason}`);
  //   //   }
  //   // );
}

// #Promise #19 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。
{
  // 在js/Promise
}
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise

// #18 為解決#17回call地獄的 Promise
{
  // 有問題的 issue.js
}
// #17 Javascript 單執行緒中Async的排程順序
{
  //   Javascript並非parallel;
  //   let appendDiv = (times) => {
  //     for (let index = 0; index < times; index++) {
  //       let element = document.createElement("div");
  //       element.innerHTML = index;
  //       // console.log(element.innerHTML);
  //       let root = document.getElementById("root");
  //       // console.log(root);
  //       root.append(element);
  //     }
  //   };
  //   let stepA = (callback) => {
  //     console.log("stepA start");
  //     setTimeout(() => {
  //       console.log("stepA");
  //       if (callback) {
  //         callback();
  //       }
  //     }, 720);
  //     console.log("stepA end");
  //   };
  //   let stepB = (callback) => {
  //     console.log("stepB start");
  //     var t0 = performance.now(); //https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/now
  //     appendDiv(10000);
  //     console.log("stepB");
  //     var t1 = performance.now();
  //     console.log("Call to doSomething took " + (t1 - t0) + "maillsecond");
  //     console.log("stepB end");
  //     if (callback) {
  //       callback();
  //     }
  //   };
  //   let stepC = (callback) => {
  //     console.log("stepC start");
  //     setTimeout(() => {
  //       console.log("stepC");
  //       if (callback) {
  //         callback();
  //       }
  //     }, 0);
  //     console.log("stepC end");
  //   };
  //   let run = () => {
  //     stepA(() => {
  //       stepB(() => {
  //         stepC();
  //       });
  //     });
  //   };
  //   run();
}

// #15 HTML Script async 與 defer 的非同步使用 normal, defer, testasync.js
{
  // index.html 引入#15
  // sync = synchronize 同步 ,asynchronize 非同步(異步)
  // https://stackoverflow.com/questions/10808109/script-tag-async-defer
  // normal: 遇到Script時下載並執行後才接下去跑完HTML
  // async: 遇到Script時開啟另一執行緒下載(不影響HTML跑完)，當下載完成就直接執行，不管HTML有沒有跑完
  // defer: 遇到Script時就先下載，等所有HTML跑完才會執行 => 自帶document.ready 建議使用
}

// const A = {};
// const B = {};
// B.ref = A;
// B.ref.current = 3;
// console.log(A.current);

// #filter
{
  // const words = [
  //   "spray",
  //   "limit",
  //   "elite",
  //   "exuberant",
  //   "destruction",
  //   "present",
  // ];
  // const result = words.filter((word) => word.length > 6);
  // console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]
  // const removeFromIndex = (removeIndex) => {
  //   return words.filter((word, index) => {
  //     return index !== removeIndex;
  //   });
  // };
  // console.log(words);
  // console.log(removeFromIndex(5));
}

// #include
{
  // let a = [1, 2, 3];
  // console.log(a.includes(1));
}

// #map, foreach
{
  //   let evens = [2, 4, 6, 8];
  //   // map
  //   let inputFuctionMap = (value) => {
  //     return { even: value, odd: value + 1 };
  //   };
  //   let odds = evens.map(inputFuctionMap);
  //   console.log(odds);
  //   // foreach
  //   let inputFuctionForeach = (v) => {
  //       console.log({ even: v, odd: v + 1 });
  //   };
  //   evens.forEach(inputFuctionForeach);
  //   // tryMyself
  //   let getOdds = (evens) => {
  //     return evens.map((value) => {
  //       return { even: value, odd: value + 1 };
  //     });
  //   };
  //   console.log(getOdds(evens));
}

{
  // let func = function(s){
  //     console.log(s)
  // }
  // let func = (s) => {
  //     console.log(s)
  // }
  // func("888")
}
// #Arrow Function 箭頭函式
{
  // var evens = [2, 4, 6, 8];
  {
    // // ES6
    // let inputFuction = (value) => {
    //     return value + 1; //有大括號就要return
    // };
    // // ES5
    // let inputFuction = function (value) {
    //     return value + 1;
    // };
    // let odds = evens.map(inputFuction);
    // console.log(odds);
  }
  {
    // // 範例ES6
    // odds = evens.map((v) => v + 1);
    // pairs = evens.map((v) => ({ even: v, odd: v + 1 }));
    // nums = evens.map((v, i) => v + i);
    // // 範例ES5
    // odds = evens.map(function (v) {
    //     return v + 1;
    // });
    // pairs = evens.map(function (v) {
    //     return { even: v, odd: v + 1 };
    // });
    // nums = evens.map(function (v, i) {
    //     return v + i;
    // });
    // console.log(odds);
    // console.log(pairs);
    // console.log(nums);
  }
}

// #rest 剩餘參數
{
  // const b = (x, a, b, ...rest) => {
  //     // console.log(y);
  //     // let y = 10;
  //     console.log(x);
  //     console.log(a + b);
  //     console.log(rest);
  // };
  // // b(1, 2, 3, 4, 5);
  // ## 連接array
  {
    // let params1 = [1, 2, 3, 4];
    // let params2 = [5, 8, 9, 7];
    // // 方式1 concat
    // // Array.prototype.concat() 方法被用來合併兩個或多個陣列。此方法不會改變現有的陣列，回傳一個包含呼叫者陣列本身的值，作為代替的是回傳一個新陣列。
    // result = params1.concat(params2);
    // console.log(result);
    // // 方式2 rest
    // console.log(...params1, ...params2);
  }

  // // ##拆解字串
  // let str1 = "foo";
  // let str2 = "你好嗎";
  // console.log(...str2[0]);
}

// #CallBack 回傳函式
// 讓函式成為另一個函式的參數，用於當一遇到函式需要等待，但其他函式又與該等待的函式有關連時，就會使用CallBack Function的時機點來處理。
{
  // let array = [1, 2, 3, 4, 5];
  // array.printNumbers = function (CallBack) {
  //     for (let index = 0; index < this.length; index++) {
  //         CallBack(this[index]);
  //     }
  // };
  // let PlusOne = function printNumberPlusOne(number) {
  //     console.log(number + 1);
  // };
  // let PlusTwo = function printNumberPlusTwo(number) {
  //     console.log(number + 2);
  // };
  // // array.printNumbers(PlusOne);
  // array.printNumbers(PlusTwo);
}

// # `` 字串嵌入變數與字串組合， ${}裡也可以做運算 e.g. ${isTrue() ? trueFunc() : falseFunc()}
{
  //   let arg1 = "apple";
  //   let arg2 = "banana";
  //   let b3 = "orange";
  {
    // let name = "apple"
    // let customer = {name: "Foo"}
    // let s1 = "s1: " + name
    // let s2 = `s2: ${(name)}`
    // let s3 = `s3: ${customer.name}
    // => ${name}
    // `
    // console.log(s1)
    // console.log(s2)
    // console.log(s3)
  }
  {
    // function tes(a,b,c){
    //     console.log(a) // a為``內的字串陣列，陣列元素以${}隔開
    //     console.log(b)
    //     console.log(c)
    // }
    // tes`this is ${arg1}, sb ${arg2} la`
  }
  {
    // function test(strings,a2,a3,a4){
    //     console.log(strings[0] + a2 + strings[1] + a3 +strings[2] + a4 + strings[3])
    // }
    // test`this is an ${arg1}, not a ${arg2} or ${b3}`
  }
  {
    // function quux(strings, ...values) {
    //   console.log(strings);
    //   console.log(strings[0] === "foo\n");
    //   console.log(strings[1] === "bar");
    //   console.log(strings.raw[0] === "foo\\n");
    //   console.log(strings.raw[1] === "bar");
    //   console.log(values[0] === 42);
    // }
    // quux`foo\n${42}bar`;
    // String.raw`foo\n${42}bar` === "foo\\n42bar";
  }
}

// #class
{
  // ##
  // ES5
  // var Shape = function (id, x, y) {
  //     this.id = id;
  //     this.move(x, y);
  // };
  // Shape.prototype.move = function (x, y) {
  //     this.x = x;
  //     this.y = y;
  // };
  // ES6
  //   class Shape {
  //     constructor(id, x, y) {
  //       this.id = id;
  //       this.move(x, y);
  //     }
  //     move(x, y) {
  //       this.x = x;
  //       this.y = y;
  //     }
  //     toString() {
  //       return `Shape:(${this.id})`;
  //     }
  //     // static父
  //     static test() {
  //       //會繼承 也可被覆寫
  //       return 1;
  //     }
  //   }
  //   ## 繼承
  //   class Rectangle extends Shape {
  //     constructor(id, x, y, width, height) {
  //       super(id, x, y);
  //       this.width = width;
  //       this.height = height;
  //     }
  //     // 覆蓋parent的function
  //     toString() {
  //       return "Rectangle > " + super.toString();
  //     }
  //     // getter setter https://zh.javascript.info/property-accessors
  //     set width(width) {
  //       this._width = width;
  //     } //當讀取Rectangle.width時起作用
  //     get width() {
  //       return this._width;
  //     } //當Rectangle.width被賦值時起作用
  //     set height(height) {
  //       this._height = height;
  //     }
  //     get height() {
  //       return this._height;
  //     }
  //     get area() {
  //       return this._width * this._height;
  //     }
  //     set name(name) {
  //       console.log(`Set name: ${name}`);
  //       this._name = name;
  //     }
  //   }
  //   class Circle extends Shape {
  //     constructor(id, x, y, radius) {
  //       super(id, x, y);
  //       this.radius = radius;
  //     }
  //     // static子
  //     static test() {
  //       return 3;
  //     }
  //   }
  //   let shape = new Shape(1, 10, 20);
  //   let rectangle = new Rectangle(2, -10, 0, 50, 70);
  //   let circle = new Circle(3, 50, 50, 10);
  //   console.log(shape);
  //   console.log(rectangle);
  //   console.log(circle);
  // static 覆寫
  // console.log(Shape.test())
  // console.log(Rectangle.test())
  // console.log(Circle.test())
  // toString 覆寫
  // console.log(shape.toString())
  // console.log(rectangle.toString())
  // console.log(circle.toString())
  // #getter setter
  // rectangle.name = "Progressbar"
  // rectangle.width = 200
  // console.log(rectangle)
  // console.log(rectangle.area)
  // console.log(rectangle.width)
}

// #array
{
  // ## Array Matching
  {
    // ES6
    // let list = [ 1, 2, 3 ]
    // let [ a, , b ] = list //a=1,b=3
    // console.log(a)
    // console.log(b)
    // ES5
    // var list = [ 1, 2, 3 ];
    // var a = list[0], b = list[2];
    // console.log(a)
    // console.log(b)
  }
  // ## 實例
  {
    // let myProductPrices = [20,30,40,50]
    // let sum = (productPrices) => {
    //     let amount = 0
    //     productPrices.forEach((productPrice) => {
    //         amount += productPrice
    //     })
    //     return amount
    // }
    // let myCoupon = {
    //     amountShouldLargerOrEqualThan: 120,
    //     productCountShouldLargerOrEqualThan: 5,
    //     discount: 50,
    // }
    // console.log("amount:" + sum(myProductPrices))
    // let isCouponAvailable = (coupon, ProductPrices) =>{
    //     let productAmount = sum(ProductPrices)
    //     if(productAmount < coupon.amountShouldLargerOrEqualThan){
    //         return[
    //             false,
    //             `Amount Should Larger Or Equal Than ${coupon.amountShouldLargerOrEqualThan}`
    //         ]
    //         // 直接回傳一個簡單的陣列就不用寫這種，避免工程師間程式衝突 e.g.: errorMessage, Message, Error
    //         // return{
    //         //     result: false,
    //         //     errorMessage: `Amount Should Larger Or Equal Than ${coupon.amountShouldLargerOrEqualThan}`
    //         // }
    //     }else if(ProductPrices.length < coupon.productCountShouldLargerOrEqualThan){
    //         return[
    //             false,
    //             `Product Count Should Larger Or Equal Than ${coupon.productCountShouldLargerOrEqualThan}`
    //         ]
    //     }else{
    //         return[
    //             true
    //         ]
    //     }
    // }
    // let printCouponResult = ([Result, Message = "success"]) => {
    //     if(Result){
    //         console.log(Message)
    //     }else{
    //         console.log(Message)
    //     }
    // }
    // printCouponResult(isCouponAvailable(myCoupon, myProductPrices))
  }
  // ## Fail-Soft Destructuring
  {
    // ES6
    // var list = [ 7, 42 ]
    // var [ a = 1, b = 2, c = 3, d ] = list
    // let l = [
    //     a === 7,
    //     b === 42,
    //     c === 3,
    //     d === undefined
    // ]
    // l.forEach((o)=>{
    //     console.log(o)
    // })
    // ES5
    // var list = [ 7, 42 ];
    // var a = typeof list[0] !== "undefined" ? list[0] : 1;
    // var b = typeof list[1] !== "undefined" ? list[1] : 2;
    // var c = typeof list[2] !== "undefined" ? list[2] : 3;
    // var d = typeof list[3] !== "undefined" ? list[3] : undefined;
    // let l = [
    //     a === 7,
    //     b === 42,
    //     c === 3,
    //     d === undefined
    // ]
    // l.forEach((o)=>{
    //     console.log(o)
    // })
  }
}

// #Object
{
  {
    // ES6
    // var x = 0, y = 0
    // obj = { x, y }
    // ES5
    // var x = 0, y = 0;
    // obj = { x: x, y: y };
    // console.log(obj)
    // let name = {first: "Progress", last: "Bar"}
    // console.log(name)
  }
  // ## 常用於流水號
  {
    // let person = {}
    // person["student0"] = 0
    // // console.log(person)
    // // let s = {["student" + index] : 0}
    // // console.log(s)
    // let index = 1
    // person["student" + index] = 1
    // console.log(person)
  }
  // ## 省去key
  {
    // ES6
    // obj = {
    //     foo (a, b) {
    //         …
    //     },
    //     bar (x, y) {
    //         …
    //     },
    //     *quux (x, y) {
    //         …
    //     }
    // }
    // ES5
    // obj = {
    //     foo: function (a, b) {
    //         …
    //     },
    //     bar: function (x, y) {
    //         …
    //     },
    //     //  quux: no equivalent in ES5
    //     …
    // };
  }
  // http://es6-features.org/#ObjectAndArrayMatchingDefaultValues
  // Object And Array Matching, Default Value
  {
    // ES6
    // var obj = { a: 1 }
    // var list = [ 1 ]
    // var { a, b = 2 } = obj
    // var [ x, y = 2 ] = list
    // ES5
    // var obj = { a: 1 };
    // var list = [ 1 ];
    // var a = obj.a;
    // var b = obj.b === undefined ? 2 : obj.b;
    // var x = list[0];
    // var y = list[1] === undefined ? 2 : list[1];
  }
  // Object Matching, Shorthand Notation
  {
    // // ES6
    // var { op, lhs, rhs } = getASTNode()
    // // ES5
    // var tmp = getASTNode();
    // var op  = tmp.op;
    // var lhs = tmp.lhs;
    // var rhs = tmp.rhs;
  }
  // Object Matching, Deep Matching
  {
    // // ES6
    // var { op: a, lhs: { op: b }, rhs: c } = getASTNode()
    // // ES5
    // var tmp = getASTNode();
    // var a = tmp.op;
    // var b = tmp.lhs.op;
    // var c = tmp.rhs;
  }
  // Parameter Context Matching
  {
    // ES6
    // function f ([ name, val ]) {
    //     console.log(name, val)
    // }
    // function g ({ name: n, val: v }) {
    //     console.log(n, v)
    // }
    // function h ({ name, val }) {
    //     console.log(name, val)
    // }
    // f([ "bar", 42 ])
    // g({ name: "foo", val:  7 })
    // h({ name: "bar", val: 43 })
    // ES5
    // function f (arg) {
    //     var name = arg[0];
    //     var val  = arg[1];
    //     console.log(name, val);
    // };
    // function g (arg) {
    //     var n = arg.name;
    //     var v = arg.val;
    //     console.log(n, v);
    // };
    // function h (arg) {
    //     var name = arg.name;
    //     var val  = arg.val;
    //     console.log(name, val);
    // };
    // f([ "bar", 42 ]);
    // g({ name: "foo", val:  7 });
    // h({ name: "bar", val: 42 });
  }
  // 修改#array 實例
  {
    // let myProductPrices = [20,30,40,50]
    // let sum = (productPrices) => {
    //     let amount = 0
    //     productPrices.forEach((productPrice) => {
    //         amount += productPrice
    //     })
    //     return amount
    // }
    // let myCoupon = {
    //     amountShouldLargerOrEqualThan: 180,
    //     productCountShouldLargerOrEqualThan: 4,
    //     discount: 50,
    // }
    // console.log("amount:" + sum(myProductPrices))
    // let isCouponAvailable = ({
    //     amountShouldLargerOrEqualThan,
    //     productCountShouldLargerOrEqualThan,
    // }, productPrices) =>{
    //     let productAmount = sum(productPrices)
    //     let result = true
    //     let message = "success!!"
    //     if(productAmount < amountShouldLargerOrEqualThan){
    //         result = false
    //         message = `Amount Should Larger Or Equal Than ${amountShouldLargerOrEqualThan}`
    //     }else if(productPrices.length < productCountShouldLargerOrEqualThan){
    //         result = false
    //         message = `Product Count Should Larger Or Equal Than ${productCountShouldLargerOrEqualThan}`
    //     }
    //     return {result, message}
    // }
    // let printCouponResult = ({result, message}) => {
    //     // if(result){
    //         console.log(message)
    //     // }else{
    //     //     console.log(message)
    //     // }
    // }
    // printCouponResult(isCouponAvailable(myCoupon, myProductPrices))
  }
}

// #原型鏈
{
  //   function p(a) {
  //     this.a = a;
  //   }
  //   p1 = new p(1);
  //   let list = [];
  //   console.log(p1);
  //   console.log(list);
  // ## 在Javascript中沒有像C++、Java那種類別和實體的概念，它只有物件，每個物件在初始化時是以
  // Javascript提供給我們的物件原型當參考並繼承他的屬性，像一個中括號[]，在JS裡面的原型就是
  // Array，而這個原型也提供了很多函式讓我們繼承，像forEach、map、push、filter之類的。
  // [].[[Prototype]] => Array, Array.[[Prptotype]] => Object, Object.__proto__  => Array =>
  //
  // 這些函式也有它的原型，它可能也是一個函式或是另一種物件，一直連下去，直到這個原型指向null
  // 才停止，而這種一個物件連上另一個物件一直連下去的就稱作原型鏈 吧
  // https://maxleebk.com/2020/07/25/prototype/
  // https://ithelp.ithome.com.tw/articles/10223556
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
  // ## prototype和__proto__的差別 https://www.zhihu.com/question/34183746
  // 1. __proto__是每个物件都有的一個屬性，而prototype是函數才會有的屬性。
  // 2. __proto__指向的是当前对象的原型对象，而prototype指向的，是以当前函数作为构造函数构造出来的对象的原型对象。
  // prototype 与__proto__ 的关系就是：你的__proto__来自你构造函数的prototype
  // Object.prototype这个对象，它的__proto__指向的是null，然后就没有然后了。
  // ##
  // 利用含有 a 與 b 屬性的 f 函式，建立一個 o 物件：
  //   let f = function () {
  //     this.a = 1;
  //     this.b = 2;
  //   };
  //   let o = new f(); // {a: 1, b: 2}
  //   // 接著針對 f 函式的原型添加屬性
  //   f.prototype.b = 3;
  //   f.prototype.c = 4;
  //   // 不要寫 f.prototype = {b:3,c:4}; 因為它會破壞原型鏈
  //   // o.[[Prototype]] 有 b 與 c 的屬性：{b: 3, c: 4}
  //   // o.[[Prototype]].[[Prototype]] 是 Object.prototype.
  //   // 最後 o.[[Prototype]].[[Prototype]].[[Prototype]] 成了 null
  //   // 這是原型鏈的結末，因為 null 按照定義並沒有 [[Prototype]]。
  //   // 因此，整個原型鏈看起來就像：
  //   // {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null
  //   console.log(o.a); // 1
  //   // o 有屬性「a」嗎？有，該數值為 1。
  //   console.log(o.b); // 2
  //   // o 有屬性「b」嗎？有，該數值為 2。
  //   // o 還有個原型屬性「b」，但這裡沒有被訪問到。
  //   // 這稱作「property shadowing」。
  //   console.log(o.c); // 4
  //   // o 有屬性「c」嗎？沒有，那就找 o 的原型看看。
  //   // o 在「o.[[Prototype]]」有屬性「c」嗎？有，該數值為 4。
  //   console.log(o.d); // undefined
  // o 有屬性「d」嗎？沒有，那就找 o 的原型看看。
  // o 在「o.[[Prototype]]」有屬性「d」嗎？沒有，那就找 o.[[Prototype]] 的原型看看。
  // o.[[Prototype]].[[Prototype]] 是 Object.prototype，預設並沒有屬性「d」，那再找他的原型看看。
  // o 在「o.[[Prototype]].[[Prototype]].[[Prototype]]」是 null，停止搜尋。
  // 找不到任何屬性，回傳 undefined。
}
// #87
{
  //   var lottery = [];
  //   var n;
  //   // 直到陣列 lottery 選滿 6 球
  //   // while(lottery.length < 6) {
  //   //   // 取一隨機 1 ~ 49 數字
  //   //   n = Math.floor( Math.random() * 49 ) + 1;
  //   //   // 如果選出來的 n 不存在，就放入陣列
  //   //   if( lottery.indexOf( n ) === -1 ){
  //   //     lottery.push( n );
  //   //   }
  //   // }
  //   for (let i = 0; ; i++) {
  //     if (lottery.length === 6) {
  //       break;
  //     }
  //     n = Math.floor(Math.random() * 49) + 1;
  //     if (lottery.indexOf(n) !== "-1") {
  //       lottery.push(n);
  //     }
  //   }
  //   console.log(lottery);
}
