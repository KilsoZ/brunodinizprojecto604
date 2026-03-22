const imgs= document.querySelectorAll('.bio-bloco img');

imgs.forEach(function(img) {
    img.addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.classList.add('lightbox-overlay');

    const imgGrande = document.createElement('img');
    imgGrande.src = this.src; 
    overlay.appendChild(imgGrande);

    document.body.appendChild(overlay);

});
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('lightbox-overlay')) {
        e.target.remove();
    }
});
