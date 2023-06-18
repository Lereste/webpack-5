// ================================= Webpack =================================
import Avatar from '/images/Avatar.png';
import example from '/src/example.txt';

function addNewImage() {
    const img = document.createElement('img');
    img.alt = 'Avatar';
    img.width = 300;
    img.src = Avatar;

    const exampleSourceText = document.createElement('h2');
    exampleSourceText.textContent = example;

    const body = document.querySelector('body');
    body.appendChild(img);
    body.appendChild(exampleSourceText);
}

export default addNewImage;