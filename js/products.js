const seedProductLoad = () => {
  fetch("../seedProduct.json")
    .then((res) => res.json())
    .then((data) => displaySeedProduct(data));
};
const juteProductLoad = () => {
  fetch("../juteProducts.json")
    .then((res) => res.json())
    .then((data) => displayJuteProduct(data));
};

const displaySeedProduct = (products) => {
  const productContainer = document.getElementById("product-container");
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card p-2 shadow" style="height: 30rem;">
        <img src=${product?.picture} class="rounded">
            <p class="my-2 highlight"><strong>${product?.name}</strong></p>
            <p class="text-muted">${product?.description}</p>
        </div>
        `;
    productContainer.appendChild(div);
  });
};
const displayJuteProduct = (products) => {
  const productContainer = document.getElementById("jute-product-container");
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card p-2 shadow">
        <img src=${product?.img} class="rounded">
        <h5 class="highlight my-3">${product?.name}</h5>
        </div>
        `;
    productContainer.appendChild(div);
  });
};

seedProductLoad();
juteProductLoad();
