const onLoad =()=>{
    fetch('../achievementGallery.json')
    .then(res => res.json())
    .then(data => displayGalleryImages(data))
    console.log(data);
}

const displayGalleryImages =(achievementGalleryImage)=>{
    const productContainer = document.getElementById("achievementGallery");
    achievementGalleryImage.forEach(achievementGalleryImage => {
        console.log(achievementGalleryImage.img);
        const div = document.createElement("div");
        div.innerHTML = 
        `
        <a href=${achievementGalleryImage.img}>
          <img src=${achievementGalleryImage.img} alt="" class="img-fluid rounded">
        </a>
        `
        productContainer.appendChild(div);
    });
}

onLoad();