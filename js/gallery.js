const images = [
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
  ];
  
  const gallery = document.querySelector('.gallery');
  
  // Генерація розмітки галереї
  const galleryMarkup = images.map(({ preview, original, description }) => 
    `<li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  ).join('');
  
  gallery.innerHTML = galleryMarkup;
  
  // Делегування подій
  gallery.addEventListener('click', (event) => {
    event.preventDefault();
  
    const imgElement = event.target;
    if (!imgElement.classList.contains('gallery-image')) return;
  
    const largeImageUrl = imgElement.dataset.source;
  
    const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" width="800" height="600">
    `);
    
    instance.show();
  });
  