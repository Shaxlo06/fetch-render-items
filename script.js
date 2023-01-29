"use strict"

fetch('https://dummyjson.com/products')
.then(res=>res.json())
.then(json=>{
  let products = json.products
  products.forEach(element => {
    let cards = document.querySelector(".cards")
    let temp = document.querySelector(".template").content.cloneNode(true)
    let fragment = document.createDocumentFragment();
    
    let img = temp.querySelector(".img")
    let price = temp.querySelector(".price")
    let discount = temp.querySelector(".discount")
    let decs = temp.querySelector(".decs")
    let name = temp.querySelector(".name")
    let del = temp.querySelector(".delete")
    
    img.src = element.thumbnail
    price.innerText = element.price
    discount.innerText = element.discountPercentage
    decs.innerText = element.description
    name.innerText = element.title
    del.id = element.id    
    
    fragment.appendChild(temp)
    cards.appendChild(fragment)
  });
})

let cards = document.querySelector(".cards")
cards.addEventListener("click", (event)=> {
  
  if (event.target.classList.contains("delete")) {
    const postID = event.target.getAttribute("id")
    fetch(`https://dummyjson.com/products/${postID}`, {
    method: "DELETE"
  }).then(res => res.json())
  .then(console.log);   
}
})     


