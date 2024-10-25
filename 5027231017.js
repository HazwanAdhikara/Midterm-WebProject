fetch("https://ets-pemweb-seru.vercel.app/api/products")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("product-container");
    data.data.forEach((product) => {
      const markup = `
        <div class="col-lg-3 col-md-6 col-sm-12 my-4">
         <div class="card h-100">
         <h5 class="card-title text-center fw-bold fs-3">${product.name}</h5>
         <img src="${
           product.thumbnail
         }" class="card-img-top object-fit-cover border rounded" alt="${
        product.name
      }" style="height: 400px;">
         <div class="card-body d-flex flex-column fs-5">
             <p class="card-text text-warning">
                 Rating: ${product.rating} | ${"★".repeat(
        Math.floor(product.rating)
      )}
             </p>
             <p class="card-text text-success fw-bold">$${(
               product.price / 1000
             ).toFixed(1)}</p>
             <p class="card-text text-center">${product.description}</p>
             <p class="card-text text-body-secondary text-end mt-3 mb-2">${
               product.shop_name
             }</p>
             <button class="btn btn-primary w-100 mt-auto" ${
               !product.status.available && "disabled"
             }>
                Beli Sekarang
             </button>
             <p class="card-text pt-2 mt-2 border-top .bg-dark-subtle" style="color: ${
               (product.status.available && "green") || "red"
             };">Qty: ${product.status.qty}</p>
         </div>
     </div>
 </div>
      `;

      container.innerHTML += markup;
    });
  })
  .catch((error) => console.log(error));
