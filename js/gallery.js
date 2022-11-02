const onLoad =()=>{
    fetch('../imageGallery.json')
    .then(res => res.json())
    .then(data => displayGalleryImages(data))
}

const displayGalleryImages =(galleryImages)=>{
    const productContainer = document.getElementById("gallery");
    galleryImages.forEach(galleryImage => {
        console.log(galleryImage.img);
        const div = document.createElement("div");
        div.innerHTML = 
        `
        <a href=${galleryImage.img}>
          <img src=${galleryImage.img} alt="" class="img-fluid rounded">
        </a>
        `
        productContainer.appendChild(div);
    });
}

onLoad();