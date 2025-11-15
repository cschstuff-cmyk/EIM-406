// Make all SVG-component figures clickable
document.querySelectorAll('figure.svg-component img').forEach(img => {
  img.addEventListener('click', () => {
    const figure = img.closest('figure.svg-component');
    const modal = figure.querySelector('.modal');
    const modalImg = modal.querySelector('.modal-content');
    const caption = modal.querySelector('.caption');
    
    modal.style.display = 'block';      // Show modal
    modalImg.src = img.src;             // Set image source
    caption.textContent = img.alt;      // Set caption
  });
});

// Close button functionality
document.querySelectorAll('figure.svg-component .close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

// Close modal when clicking outside the image
document.querySelectorAll('figure.svg-component .modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
