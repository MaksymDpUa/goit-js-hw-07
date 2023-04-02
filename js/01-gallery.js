import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// {/* <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li> */}

//  {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   }

const galleryMarkup = makeGalerry(galleryItems).join("");
const gallery = document.querySelector(".gallery");

function makeGalerry(arr) {
  return arr.map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/> </a></li>`
  );
}

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const originImageSource = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${originImageSource}">`,
    {
      onShow: () => window.addEventListener("keydown", onEscClick),
      onClose: () => window.removeEventListener("keydown", onEscClick),
    }
  );

  function onEscClick(event) {
    if (event.code === "Escape") {
      instance.close();
    }
    };

  instance.show();
}
