
/* Use this line in HTML for include: <script src="./js/current_date_module.js" type="module"></script> */
"use strict"; /* That's Strict mode;  ⛔ DONT USE OTHER CODE WITH THIS IS STRICT, IF YOUR ALL CODE NOT "USE STRICT"... */

/* This is old code */
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("remake-body");
//     refs.modal.classList.toggle("focus");
//   }
// })();



/* REMAKE CODE */
/* Notice for me - In future that code must be optimize... */

(() => {

  /* Section CONTENT */

const cont = {
  contentOne: document.querySelector("[content-first]"),
  contentTwo: document.querySelector("[content-second]"),
  contentThree: document.querySelector("[content-third]"),
  contentFour: document.querySelector("[content-fourth]"),
  contentFive: document.querySelector("[content-fiveth]"),
  contentSix: document.querySelector("[content-sixth]"),
  
  correctMain: document.querySelector("[correctMain]")
};

/* Section MODAL */

  const refs = {
    openModalBtnOne: document.querySelector("[data-modal-open1]"),
    openModalBtnTwo: document.querySelector("[data-modal-open2]"),
    openModalBtnThree: document.querySelector("[data-modal-open3]"),
    openModalBtnFour: document.querySelector("[data-modal-open4]"),
    openModalBtnFive: document.querySelector("[data-modal-open5]"),
    openModalBtnSix: document.querySelector("[data-modal-open6]"),
    modal: document.querySelector("[data-modal]"),

    closeModalBtnOne: document.querySelector("[data-modal-close-one]"),
    closeModalBtnTwo: document.querySelector("[data-modal-close-two]"),
    closeModalBtnThree: document.querySelector("[data-modal-close-three]"),
    closeModalBtnFour: document.querySelector("[data-modal-close-four]"),
    closeModalBtnFive: document.querySelector("[data-modal-close-five]"),
    closeModalBtnSix: document.querySelector("[data-modal-close-six]"),
  };

  refs.openModalBtnOne.addEventListener("click", toggleModalOne);
  refs.openModalBtnTwo.addEventListener("click", toggleModalTwo);
  refs.openModalBtnThree.addEventListener("click", toggleModalThree);
  refs.openModalBtnFour.addEventListener("click", toggleModalFour);
  refs.openModalBtnFive.addEventListener("click", toggleModalFive);
  refs.openModalBtnSix.addEventListener("click", toggleModalSix);

  refs.closeModalBtnOne.addEventListener("click", toggleModalOne);
  refs.closeModalBtnTwo.addEventListener("click", toggleModalTwo);
  refs.closeModalBtnThree.addEventListener("click", toggleModalThree);
  refs.closeModalBtnFour.addEventListener("click", toggleModalFour);
  refs.closeModalBtnFive.addEventListener("click", toggleModalFive);
  refs.closeModalBtnSix.addEventListener("click", toggleModalSix);

  function toggleModalOne() {
    document.body.classList.toggle("remake-body");
    refs.modal.classList.toggle("focus");
    cont.contentOne.classList.toggle("show");
  }

  function toggleModalTwo() {
    document.body.classList.toggle("remake-body");
    refs.modal.classList.toggle("focus");
    cont.contentTwo.classList.toggle("show");
  }

  function toggleModalThree() {
    document.body.classList.toggle("remake-body");
    refs.modal.classList.toggle("focus");
    cont.contentThree.classList.toggle("show");
    cont.correctMain.classList.toggle("correct");
  }

  function toggleModalFour() {
    document.body.classList.toggle("remake-body");
    refs.modal.classList.toggle("focus");
    cont.contentFour.classList.toggle("show");
  }

  function toggleModalFive() {
    document.body.classList.toggle("remake-body");
    refs.modal.classList.toggle("focus");
    cont.contentFive.classList.toggle("show");
  }

  function toggleModalSix() {
    document.body.classList.toggle("remake-body");
    refs.modal.classList.toggle("focus");
    cont.contentSix.classList.toggle("show");
  }

})();



/* GALLERY MODAL */

(() => {
  const gallery = {
    galleryOne: document.querySelector("[gallery-one]"),
    galleryTwo: document.querySelector("[gallery-two]"),
    galleryThree: document.querySelector("[gallery-three]"),
    galleryFour: document.querySelector("[gallery-four]"),
    galleryFive: document.querySelector("[gallery-five]"),
    gallerySix: document.querySelector("[gallery-six]"),
    gallerySeven: document.querySelector("[gallery-seven]"),
    galleryEight: document.querySelector("[gallery-eight]"),
    galleryNine: document.querySelector("[gallery-nine]"),

    galleryModal: document.querySelector("[modal-gallery]"),
    galleryModalClose: document.querySelector("[close-modal-gallery]"),

    photoOne: document.querySelector("[photo-one]"),
    photoTwo: document.querySelector("[photo-two]"),
    photoThree: document.querySelector("[photo-three]"),
    photoFour: document.querySelector("[photo-four]"),
    photoFive: document.querySelector("[photo-five]"),
    photoSix: document.querySelector("[photo-six]"),
    photoSeven: document.querySelector("[photo-seven]"),
    photoEight: document.querySelector("[photo-eight]"),
    photoNine: document.querySelector("[photo-nine]"),
  };


  gallery.galleryModalClose.addEventListener("click", toggleGallery);
  gallery.galleryModalClose.addEventListener("click", additionToggleGallery);

  gallery.galleryOne.addEventListener("click", toggleGallery);
  gallery.galleryTwo.addEventListener("click", toggleGallery);
  gallery.galleryThree.addEventListener("click", toggleGallery);
  gallery.galleryFour.addEventListener("click", toggleGallery);
  gallery.galleryFive.addEventListener("click", toggleGallery);
  gallery.gallerySix.addEventListener("click", toggleGallery);
  gallery.gallerySeven.addEventListener("click", toggleGallery);
  gallery.galleryEight.addEventListener("click", toggleGallery);
  gallery.galleryNine.addEventListener("click", toggleGallery);

  gallery.galleryOne.addEventListener("click", togglePhotoOne);
  gallery.galleryTwo.addEventListener("click", togglePhotoTwo);
  gallery.galleryThree.addEventListener("click", togglePhotoThree);
  gallery.galleryFour.addEventListener("click", togglePhotoFour);
  gallery.galleryFive.addEventListener("click", togglePhotoFive);
  gallery.gallerySix.addEventListener("click", togglePhotoSix);
  gallery.gallerySeven.addEventListener("click", togglePhotoSeven);
  gallery.galleryEight.addEventListener("click", togglePhotoEight);
  gallery.galleryNine.addEventListener("click", togglePhotoNine);

  function toggleGallery() {
    gallery.galleryModal.classList.toggle("gallery-active");
  }

  function additionToggleGallery() {
    if (gallery.photoOne.classList.toString() === "gallery__modal__content-first photo-active") {
      gallery.photoOne.classList.toggle("photo-active"); } else if 
      (gallery.photoTwo.classList.toString() === "gallery__modal__content-third__one photo-active") {
        gallery.photoTwo.classList.toggle("photo-active"); } else if 
        (gallery.photoThree.classList.toString() === "gallery__modal__content-third__two photo-active") {
          gallery.photoThree.classList.toggle("photo-active"); } else if 
          (gallery.photoFour.classList.toString() === "gallery__modal__content-third__three photo-active") {
            gallery.photoFour.classList.toggle("photo-active"); } else if 
            (gallery.photoFive.classList.toString() === "gallery__modal__content-third__four photo-active") {
              gallery.photoFive.classList.toggle("photo-active"); } else if 
              (gallery.photoSix.classList.toString() === "gallery__modal__content-fiveth__one photo-active") {
                gallery.photoSix.classList.toggle("photo-active"); } else if 
                (gallery.photoSeven.classList.toString() === "gallery__modal__content-fiveth__two photo-active") {
                  gallery.photoSeven.classList.toggle("photo-active"); } else if 
                  (gallery.photoEight.classList.toString() === "gallery__modal__content-fiveth__three photo-active") {
                    gallery.photoEight.classList.toggle("photo-active"); } else if 
                    (gallery.photoNine.classList.toString() === "gallery__modal__content-fiveth__four photo-active") {
                      gallery.photoNine.classList.toggle("photo-active"); };
  }

  function togglePhotoOne() {
    gallery.photoOne.classList.toggle("photo-active");
  }

  function togglePhotoTwo() {
    gallery.photoTwo.classList.toggle("photo-active");
  }

  function togglePhotoThree() {
    gallery.photoThree.classList.toggle("photo-active");
  }

  function togglePhotoFour() {
    gallery.photoFour.classList.toggle("photo-active");
  }

  function togglePhotoFive() {
    gallery.photoFive.classList.toggle("photo-active");
  }

  function togglePhotoSix() {
    gallery.photoSix.classList.toggle("photo-active");
  }

  function togglePhotoSeven() {
    gallery.photoSeven.classList.toggle("photo-active");
  }

  function togglePhotoEight() {
    gallery.photoEight.classList.toggle("photo-active");
  }

  function togglePhotoNine() {
    gallery.photoNine.classList.toggle("photo-active");
  }
})();






