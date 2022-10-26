const onLoad =()=>{
    fetch('../product.json')
    .then(res => res.json())
    .then(data => displayProduct(data))
}

const displayProduct =(products)=>{
    const productContainer = document.getElementById("product-container");
    products.forEach(product => {
        const div = document.createElement("div");
        div.innerHTML = 
        `
        <div class="card p-2 shadow" style="height: 30rem;">
        <img src=${product.picture} class="rounded">
            <p class="my-2 highlight"><strong>${product.name}</strong></p>
            <p class="text-muted">${product.description}</p>
        </div>
        `
        productContainer.appendChild(div);
    });
}

onLoad();