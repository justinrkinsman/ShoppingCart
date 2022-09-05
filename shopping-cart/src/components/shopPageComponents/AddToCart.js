export const addToCart = () => {
    const quantity = parseInt(document.getElementById('cartQuantity').value)
    const items = parseInt(document.getElementById('items').textContent)
    let newQuantity = quantity + items
    document.getElementById('items').textContent = newQuantity
}