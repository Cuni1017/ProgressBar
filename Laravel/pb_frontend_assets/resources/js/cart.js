const initCart = () => {
    return getCart();
};

const getCart = () => {
    let cart = Cookies.get("cart");
    return !cart ? {} : JSON.parse(cart); //解析JSON
};

const saveCart = (cart) => {
    Cookies.set("cart", JSON.stringify(cart)); //Cookies是String所以要存的話要用JSON轉
};

const addProductToCart = (productId, quantity) => {
    let cart = getCart();
    let currentQuantity = parseInt(cart[productId]) || 0;
    let addQuantity = parseInt(quantity) || 0;
    let newQuantity = currentQuantity + addQuantity;
    cart[productId] = newQuantity;
    updateProductToCart(productId, newQuantity);
};

const updateProductToCart = (productId, newQuantity) => {
    let cart = getCart();
    cart[productId] = newQuantity;
    saveCart(cart);
};

const alertProductQuantity = (productID) => {
    let cart = getCart();
    let quantity = parseInt(cart[productID]) || 0;
    alert(`add id:${productID}, quantity:${quantity}`);
};

const initAddToCart = (productID) => {
    let cart = getCart();
    console.log(cart);
    let addToCartBtn = document.getElementById("addToCart");

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            let quantityInput = document.querySelector(
                'input[name="quantity"]'
            );
            // let quantityInput = document.getElementsByName('quantity')[0].value

            if (quantityInput) {
                addProductToCart(productID, quantityInput.value);

                alertProductQuantity(productID);
            }
        });
    }
};

export { initAddToCart };
