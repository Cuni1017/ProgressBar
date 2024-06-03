// let testCart = {
//   1: {
//     productId: 1,
//     name: "apple",
//   },
//   2: {
//     productId: 2,
//     name: "banana",
//   },
//   3: {
//     productId: 3,
//     name: "orange",
//   },
//   TEST: {
//     p: 1,
//   },
// };

// // console.log(testCart);
// // javascript Array要存進Cookie之前 要先轉成JSON的字串
// testCart = JSON.stringify(testCart);

// // console.log(testCart);
// Cookies.set("testCart", testCart);

// // 拿回來要console.log前要先解析回javascript的Array
// let out = JSON.parse(Cookies.get("testCart"));

// // out[0] = null;

// Cookies.set("testCart", JSON.stringify(out));
// console.log(out);

// // #過濾所有null或false
// let list = [null, false, 1, 5, 6];
// console.log(list.filter((x) => x));

class A {
  constructor(rawData) {
    const [getValue, setValue] = (() => {
      const cache = rawData;

      const getValue = (key) => {
        return cache[key];
      };
      const setValue = (key, value) => {
        cache[key] = value;
        return this;
      };

      return [getValue, setValue];
    })();

    this.getValue = getValue;
    this.setValue = setValue;
  }

  get id() {
    return this.getValue("id");
  }
}

class B extends A {
  constructor(product, quantity) {
    super({
      product: product,
      quantity: quantity,
    });
    this.ttt = "B";
  }

  get product() {
    return this.getValue("product");
  }

  get quantity() {
    return this.getValue("quantity");
  }

  get id() {
    return this.product.id;
  }

  get name() {
    return this.product.name;
  }
}

class C extends A {
  get sale_price() {
    return this.getValue("sale_price");
  }
}

let rawData = {
  id: "1",
  name: "apple",
  price: 30,
  quantity: 5,
};

let prod2 = {
  id: "2",
  name: "orange",
};

let prod3 = {
  id: "3",
  name: "banana",
  sale_price: 10,
};

let a = new A(rawData);
let b = new B(prod2, 3);
let c = new C(prod3);

console.log(a);
// a.id = 2;
// console.log(a.id);

console.log(c);

console.log(b);

let s;

let ddd = s || { id: 1, name: "test" };

console.log(ddd);
