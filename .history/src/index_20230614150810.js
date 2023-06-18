// =============================== Not webpack ===============================
// logHelloWorld();




// =============================== Webpack =============================

import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const heading = new Heading();
heading.render();

import addNewImage from './add-image';
addNewImage();