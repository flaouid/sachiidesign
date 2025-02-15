const imagePaths = [
    "images/design_1.png",
    "images/design_2.png",
    "images/design_3.png",
    "images/design_4.png",
    "images/design_5.png",
    "images/design_6.png",
    "images/design_7.png",
    "images/design_8.png",
    "images/design_9.png",
    "images/design_10.png",
    "images/design_11.png",
    "images/design_12.png",
    "images/design_13.png",
    "images/design_14.png",
    "images/design_15.jpg",
    "images/design_16.png"
  ];

  const gallery = document.getElementById('gallery');

  imagePaths.forEach(path => {
    const img = document.createElement('img');
    img.src = path;
    img.alt = 'design';
    gallery.appendChild(img);
  });

  const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

// Fermer la lightbox en cliquant dessus
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});