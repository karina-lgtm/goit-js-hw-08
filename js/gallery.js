const images = [
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
      description: "Hokkaido Flower",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
    },
  ];
  
  const galleryContainer = document.querySelector(".gallery");
  
  const galleryMarkup = images
    .map(
      ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
    )
    .join("");
  
  galleryContainer.innerHTML = galleryMarkup;
  
  galleryContainer.addEventListener("click", (event) => {
    event.preventDefault();
  });
  
  galleryContainer.style.display = "flex";
  galleryContainer.style.flexWrap = "wrap";
  galleryContainer.style.gap = "24px";
  galleryContainer.style.justifyContent = "center";
  galleryContainer.style.listStyle = "none";
  galleryContainer.style.padding = "0";
  galleryContainer.style.margin = "0";
  galleryContainer.style.width = "1128px";
  galleryContainer.style.margin = "0 auto";
  
  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.style.width = "360px";
    item.style.height = "200px";
    item.style.overflow = "hidden";
    item.style.transition =
      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
  
    const img = item.querySelector(".gallery-image");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.transition = "transform 0.3s ease-in-out";
  });
  
  galleryContainer.addEventListener("click", (event) => {
    event.preventDefault();
  
    const clickedImage = event.target.closest(".gallery-image");
    if (!clickedImage) return;
  
    const largeImageUrl = clickedImage.dataset.source;
    const imageDescription = clickedImage.alt;
  
    const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" alt="${imageDescription}" width="800" height="600">
    `);
  
    instance.show();
  
    const closeOnEscape = (event) => {
      if (event.code === "Escape") {
        instance.close();
        document.removeEventListener("keydown", closeOnEscape);
      }
    };
  
    document.addEventListener("keydown", closeOnEscape);
  });