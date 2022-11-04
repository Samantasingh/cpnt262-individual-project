const randomInteger = function(max){
  const randomInteger = Math.floor(Math.random() * max);
  return randomInteger;
}

const fetchData = async function() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const product = data[randomInteger(data.length)];
  const body = document.querySelector('body');

  output = `
  <article>
    <h3>${product.description}</h3>
    <img src="${product.image}" alt="picture of ${product.description}">
    <ul>
    <li>Price:${product.price}</li>
    <li>Rating:${product.rating}</li>
    <li>Title:${product.title}</li>
    <ul>
  </article>
  `
 document.getElementById("output").innerHTML = output;
}
fetchData("https://fakestoreapi.com/products")