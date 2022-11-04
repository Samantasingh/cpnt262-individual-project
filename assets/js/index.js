const randomProduct = function(max){
  const randomProduct = Math.floor(Math.random() * max);
  return randomProduct;
}

const fetchData = async function() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const product = data[randomProduct(data.length)];
  const body = document.querySelector('body');

  output = `
  <figure>
  <h4>Category: ${product.category}</h4>
    <h1>${product.title}</h1>
    <img src="${product.image}" alt="picture of ${product.description}">
    <figcaption>${product.description}</figcaption>
    <h4>Price: $${product.price}</h4>
  </figure>
  `
 document.getElementById("output").innerHTML = output;
}

fetchData("https://fakestoreapi.com/products")