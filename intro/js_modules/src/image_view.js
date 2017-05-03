//iam lazy so i import $ here, but it could be vanilla also
//a little testing things
//import $ from 'jquery';



//importing css here (this might change later on, unsure of coding conventions)

//css needs to be specified unlike *.js files
import '../styles/image_view.css';

//image loader
//import big from '../assets/1200x1200.jpeg';
import small from '../assets/350x350.png';


//const bigImage = document.createElement('img');
//const image = document.createElement('img');
//image.src = 'http://lorempixel/400/400';
//image.src = small; // works
//bigImage.src = big; //does not work // 'build/'+big //migth work but bad solution

//image.src = './js_modules/assets/350x350.png';
//unsauber, aber sonst kann das bild nicht geladen werden, sollte später in ein resolve überführt werden
//TODO integrate an image loader to prevent this
/*setTimeout(function (){
  document.body.appendChild(image);
}, 3000);*/
//$('#entry').add(image);
//document.body.appendChild(image);
//document.body.appendChild(bigImage);

export default () => {
  const image = document.createElement('img');
  image.src = small;

  document.body.appendChild(image);
}
