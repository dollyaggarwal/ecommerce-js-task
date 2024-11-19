document.addEventListener('DOMContentLoaded', function(){
 
  fetch('productsArray.json')
  .then(res=>{
    if (!res.ok) {
      throw new Error('Network response was not ok.');
  }
  return   res.json();
  })
  .then(data=>{
    window.products = data;
    displayProducts(data);
    const productList = document.getElementById('product-list');
    productList.innerHTML += discountedProduct.display();

    attachEventListener();

    })
    .catch(error => {
        console.error('Error fetching products:', error);
        document.getElementById('error-message').textContent = 'Failed to load products. Please try again later.';
        });
    });

    function displayProducts(products){
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';
      products.forEach(product =>{
          const card = document.createElement('div');
          card.classList.add('col-lg-3', 'col-md-4','col-sm-6','mb-4');
          card.innerHTML=`
          <div class="card" style="width: 18rem;">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text fw-bold">$${product.price.toFixed(2)}</p>
          <div class="d-flex align-items-center justify-content-between">
          <input type="number" class="quantity-input form-control" value="1" min="1">
         <a href="#" class="btn btn-primary add-to-cart"  data-product='${JSON.stringify(product)}'>Add To Cart</a>
          </div>
          </div>
          </div>
          `;
          productList.appendChild(card);
        });

    }