export const addToCart = (e) => {
    let index = e.target.id.slice(-1)
    const items = parseInt(document.getElementById(`items${index}`).value)
    const quantity = parseInt(document.getElementById('cartQuantity').textContent)
    let newQuantity = quantity + items
    document.getElementById('cartQuantity').textContent = newQuantity
    document.getElementById(`items${index}`).value = 0
    console.log(index)
}