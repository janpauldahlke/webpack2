//iam lazy so i import $ here, but it could be vanilla also
//a little testing things
//import $ from 'jquery';



//importing css here (this might change later on, unsure of coding conventions)

//css needs to be specified unlike *.js files
import '../styles/image_view.css';

const image = document.createElement('img');
//image.src = "http://lorempixel.com/400/400/";
image.src = './js_modules/assets/350x350.png';
//unsauber, aber sonst kann das nild nicht geladen werden, sollte später in ein resolve überführt werden
setTimeout(function (){
  document.body.appendChild(image);
}, 3000);
//$('#entry').add(image);

//document.body.appendChild(image);
