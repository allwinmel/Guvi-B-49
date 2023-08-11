document.addEventListener('DOMContentLoaded', () => {
  fetchProducts()
    .then((products) => {
      products.forEach((product) => {
        const productCard = createProductCard(product);
        document.getElementById('productsContainer').appendChild(productCard);
      });
    })
    .catch((error) => console.error('Error:', error));
});

function fetchProducts() {
  const apiUrl = 'https://fakestoreapi.com/products';

  return axios.get(apiUrl)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error('Error fetching products.');
    });
}

function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('col-md-4', 'product-card');

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.title;
  productCard.appendChild(image);

  const title = document.createElement('div');
  title.classList.add('product-title');
  title.textContent = product.title;
  productCard.appendChild(title);

  const price = document.createElement('div');
  price.classList.add('product-price');
  price.textContent = `$${product.price}`;
  productCard.appendChild(price);

  const description = document.createElement('div');
  description.classList.add('product-description');
  description.textContent = product.description;
  productCard.appendChild(description);

  const addToCartButton = document.createElement('button');
  addToCartButton.classList.add('btn', 'btn-primary');
  addToCartButton.textContent = 'Add to Cart';
  addToCartButton.addEventListener('click', () => addToCart(product));
  productCard.appendChild(addToCartButton);

  return productCard;
}

function addToCart(product) {
  alert(`Added "${product.title}" to the cart!`);
}
