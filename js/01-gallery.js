import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item')
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link')
    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery__image')
    galleryImage.setAttribute('data-source',item.original)

  galleryLink.href = item.original;
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  galleryImage.addEventListener('click', e => {
    e.preventDefault();

    basicLightbox.create(`
      <img src="${item.original}" alt="${item.description}">
    `).show();
  });

  return galleryItem;
}

galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  gallery.appendChild(galleryItem);
});



console.log(galleryItems);
