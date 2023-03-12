const texts = document.querySelectorAll('.text');
texts.forEach(text => {
    text.addEventListener('mouseover', showImage);
});

function showImage(e) {
    const text = e.target;
    const popup = text.parentElement.parentElement;
    const img = text.parentElement.nextElementSibling;

    img.classList.remove('hide');
    img.classList.add('show');

    popup.addEventListener('mouseleave', hideImage);
}

function hideImage(e) {
    const popup = e.target;
    const img = popup.lastElementChild;

    img.classList.remove('show');
    img.classList.add('hide');
}

// function changeColor() {
//     const text = document.querySelector('main');
//     text.style.color = "#000";
// }

const text = document.querySelector('main');
// console.log(text.lastElementChild);
// text.classList.remove
// const img = document.querySelector('img');
// console.log(text.parentElement.nextElementSibling);
// text.onmouseover = () => console.log('hover');
// text.addEventListener('mouseover', e => console.log(e));