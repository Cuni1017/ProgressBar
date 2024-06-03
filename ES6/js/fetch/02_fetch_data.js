const domainUrl = "http://127.0.0.1:5500/ES6";
// http://127.0.0.1:5500/ES6/json1/.json
const userUrl = (id) => {
  return `${domainUrl}/json/user${id}.json`;
};
const productUrl = (id) => {
  return `${domainUrl}/json/product${id}.json`;
};
const cartUrl = (user) => {
  const user_id_in_cart = user.id;
  return `${domainUrl}/json/cart${user_id_in_cart}.json`;
};
// console.log(productUrl(1));
// console.log(userUrl(1));
// console.log(cartUrl({ id: 1 }));

const getUser = (user_id) => {
  const url = userUrl(user_id);
  return fetch(url).then((response) => {
    return response.json();
  });
};
const getCart = (user) => {
  const url = cartUrl(user);
  return fetch(url).then((response) => {
    return response.json();
  });
};
const getProduct = (productId) => {
  const url = productUrl(productId);
  return fetch(url).then((response) => {
    return response.json();
  });
};
const getProducts = (productIds) => {
  const productFetchs = productIds.map((productId) => {
    return getProduct(productId);
  });
  return Promise.all(productFetchs);
  //   return Promise.all([getProduct(1), getProduct(2), getProduct(3)]);
};

// const run = () => {
//   getUser(1)
//     .then((user) => {
//       console.log(user);
//       return getCart(user);
//     })
//     .then((cart) => {
//       console.log(cart);
//       const product_ids = cart.cart_items.map((cart_item) => {
//         return cart_item.product_id;
//       });
//       return getProducts(product_ids);
//     })
//     .then((products) => {
//       console.log(products);
//     });
// };

// run();

// 一般的Promise
// const getUserAll = (id) => {
//   let me;
//   getUser(id)
//     .then((user) => {
//       me = user;
//       //   console.log(me);
//       return getCart(user);
//     })
//     .then((cart) => {
//       me.cart = cart;
//       //   console.log(me);
//       let items = cart.cart_items;
//       //   console.log(items);
//       const item_ids = items.map((item) => {
//         return item.product_id;
//       });
//       return getProducts(item_ids);
//     })
//     .then((products) => {
//       me.cart.cart_items.forEach((item) => {
//         products.forEach((product) => {
//           if (item.product_id == product.id) {
//             item.product = product;
//           }
//           //   console.log(product.id);
//         });
//         // console.log(items.product_id);
//       });
//       //   console.log(products);
//       //   console.log(me);
//       return me;
//     })
//     .then((res) => {
//       console.log(me);
//     });
// };

const combine = (user, cart, products) => {
  user.cart = cart;
  user.cart.cart_items.forEach((item) => {
    products.forEach((product) => {
      if (item.product_id == product.id) {
        item.product = product;
      }
    });
  });
  return user;
};

const getProductIdsFromCart = (cart) => {
  return cart.cart_items.map((item) => {
    return item.product_id;
  });
};

// async
const getUserAll = async (id) => {
  const user = await getUser(id);
  const cart = await getCart(user);
  let product_ids = getProductIdsFromCart(cart);
  const products = await getProducts(product_ids);

  console.log(combine(user, cart, products));
};

// 以下為練習---------------------

const getUserJson = (id) => {
  getUser(id).then((res) => {
    console.log(res);
  });
};

const getUserCart = (id) => {
  getUser(id)
    .then((user) => {
      //   console.log(user);
      return getCart(user);
    })
    .then((cart) => {
      let items = cart.cart_items;
      //   console.log(items);
      const ids = items.map((item) => {
        return getProduct(item.product_id);
      });
      return Promise.all(ids);

      //   let itemsList = [];
      //   items.forEach((item) => {
      //     itemsList.push(item.product_id);
      //   });
      //   return getProducts(ids);
      //   itemslist = items.map(() => {
      //     return items.product_id;
      //   });
      //   return itemslist;
    })
    .then((res) => {
      console.log(res);
    });
};
const getUserCartProducts = (id) => {
  getUser(id)
    .then((user) => {
      //   console.log(user);
      return getCart(user);
    })
    .then((cart) => {
      let items = cart.cart_items;
      //   console.log(items);
      const item_ids = items.map((item) => {
        return item.product_id;
      });
      return getProducts(item_ids);
      //   const ids = items.map((item) => {
      //     return getProduct(item.product_id);
      //   });
      //   return Promise.all(ids);

      //   let itemsList = [];
      //   items.forEach((item) => {
      //     itemsList.push(item.product_id);
      //   });
      //   return getProducts(ids);
      //   itemslist = items.map(() => {
      //     return items.product_id;
      //   });
      //   return itemslist;
    })
    .then((products) => {
      console.log(products);
    });
};

// getUserJson(1);
// getUserCartProducts(1);
getUserAll(1);
// getProduct(1).then((res) => {
//   console.log(res);
// });

// let list = [1, 2, 3];
// list.forEach((i) => {
//   //   console.log(i);
//   if (i == 1) {
//     console.log(i);
//     return;
//   }
// });
