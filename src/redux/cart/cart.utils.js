//this utility function check's if our item that we want to add to our cart already exists in that array, if i does it will increasy its quantity by 1, if it's not it will add it to the array and create quantity value attached to it with value = 1.

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); //checking if item already exists in Cart

    if (existingCartItem) { // if true runs if statement
        return cartItems.map(cartItem => //we want to return nw array with each item from our cartItems
            (cartItem.id === cartItemToAdd.id) ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem // when we map we check if adding item we want to add matches current item being added ti the new array, it it is, we increase quantity, if not we just add it to array
            ) 
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }] // if existingCartItem value was false and if statement was no run, it means that item was not inside the array and we just add it as a nwe item of the array
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id); //checking if item already exists in Cart

    if (existingCartItem.quantity === 1) { // if our item quantity is equal to 1
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id) // we filter out cartItems array, filter function will return new array with items that met the condition, when it iterates through our array and encounters out item to be removed, it does not include it, beacuse the condition we provided returns fals value, as those items match. 
    }

    return cartItems.map( cartItem => (cartItem.id === cartItemToRemove.id) ? { ...cartItem, quantity: cartItem.quantity - 1} : cartItem)
    
}