// SLIDE DO BANNER

const pointers = document.querySelectorAll('.pointer-banner');
var slide = document.getElementById('slide-banner');

pointers.forEach((pointer, index) => {
    pointer.addEventListener('click', () => {
        pointers.forEach(poiterRemoveClass => {
            poiterRemoveClass.classList.remove('active');
        });

        pointer.classList.add('active');
        slide.style.marginLeft = `-${index * 100}vw`;
    });
});

// SLIDE DO OUR TEAM

const teamPointers = document.querySelectorAll('.pointer-team');
var slideTeam = document.getElementById('slide-team');

teamPointers.forEach((pointer, index) => {
    pointer.addEventListener('click', () => {
        teamPointers.forEach(pointerRemoveClass => {
            pointerRemoveClass.classList.remove('active');
        });

        pointer.classList.add('active');
        slideTeam.style.marginLeft = `-${index * 900}px`;
    });
});

// SLIDE DOS CLIENTS

const clientPointers = document.querySelectorAll('.pointer-client');
var slideClient = document.getElementById('slide-clients');

clientPointers.forEach((pointer, index) => {
    pointer.addEventListener('click', () => {
        clientPointers.forEach(pointerRemoveClass => {
            pointerRemoveClass.classList.remove('active');
        });

        pointer.classList.add('active');
        slideClient.style.marginLeft = `-${index * 100}vw`;
    });
});