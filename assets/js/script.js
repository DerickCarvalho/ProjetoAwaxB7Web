const pointers = document.querySelectorAll('.pointer');
var slide = document.getElementById('slide');

pointers.forEach((pointer, index) => {
    pointer.addEventListener('click', () => {
        pointers.forEach(poiterRemoveClass => {
            poiterRemoveClass.classList.remove('active');
        });

        pointer.classList.add('active');
        slide.style.marginLeft = `-${index * 100}vw`;
    });
});