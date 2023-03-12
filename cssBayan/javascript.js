let targetImg = 1;
const texts = document.querySelectorAll('.text');

texts.forEach(text => {
    text.addEventListener('mouseover', showImage);
});

function showImage(e) {
    const text = e.target;
    const popup = text.parentElement;
    const img = text.nextElementSibling;
    const sign = text.firstElementChild;
    const currentTargetImg = img.getAttribute("key");
    console.log(text);
    console.log(img);
    console.log(sign);

    if (currentTargetImg !== targetImg) {
        sign.classList.remove('hidden');
        sign.textContent = '×';

        img.classList.remove('hide-img');
        img.classList.add('show-img');
        console.log(img);
    }
    
    popup.onmouseup = () => {
        text.style.color = "#000";
        selectImage(img);
    };

    popup.addEventListener('mouseleave', hideImage);
}

function hideImage(e) {
    const popup = e.target;
    const img = popup.lastElementChild;
    const sign = popup.firstElementChild.firstElementChild;
    const currentTargetImg = img.getAttribute("key");
    
    if (currentTargetImg !== targetImg) {
        sign.textContent = '+';
    
        img.classList.remove('show-img');
        img.classList.add('hide-img');
    }
}

function hideOldImage(oldTargetImg) {
    if (oldTargetImg !== 0) {
        const oldImg = document.querySelector(`img[key="${oldTargetImg}"]`)
        const sign = oldImg.previousElementSibling.firstElementChild;
    
        sign.textContent = '+';
    
        oldImg.classList.remove('show-img');
        oldImg.classList.add('hide-img');
    }
}

function selectImage(img) {
    const oldTargetImg = targetImg;
    hideOldImage(oldTargetImg, img);
    targetImg = img.getAttribute("key");
}

const main = document.querySelector('main');

main.onmouseover = () => {
    const signs = document.querySelectorAll('.sign');
    const texts = document.querySelectorAll('.text');

    signs.forEach(sign => {
        sign.classList.remove('hidden');
    });

    texts.forEach(text => text.style.color = "#000");
};

main.onmouseleave = () => {
    const signs = document.querySelectorAll('.sign');
    const texts = document.querySelectorAll('.text');
    
    signs.forEach(sign => {
        sign.classList.add('hidden');
    });

    if (targetImg !== 0) {
        texts.forEach(text => {
            const img = text.nextElementSibling;
            if (img.getAttribute('key') !== targetImg) {
                text.style.color = "#00f";
            }
        });
    } else {
        texts.forEach(text => text.style.color = "#00f");
    }
}

main.onmousedown = () => {
    main.style.cursor = "grabbing";
};

main.onmouseup = () => {
    main.style.cursor = "grab";
};

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    if (width <= 1000) {
        const main = document.querySelector('main');
        main.style.width = "80%";
    } 
});

window.onload = () => {
    const text = texts[0];
    const img = text.nextElementSibling;
    const sign = text.firstElementChild;

    sign.classList.remove('hidden');
    sign.textContent = '×';

    img.classList.remove('hide-img');
    img.classList.add('show-img');
    
    text.style.color = "#000";
    
    targetImg = img.getAttribute("key");
};