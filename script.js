let movie=[
    {
        name : "Loki",
        des : "After stealing the Tesseract in Avengers: Endgame, Loki lands before the Time Variance Authority. Mobius puts Loki to work, but not everyone at TVA is thrilled about the God of Mischief's presence. Loki finds out The Variant's plans, but he has his own that will forever alter both their destinies.",
        image : "images/slider 1.PNG"
    },
    {
        name: "The Freelancer",
        des: "The plot revolves around a rescue mission undertaken by an ex-cop turned mercenary, Avinash Kamath (Mohit Raina), who embarks on a journey to bring back Aliya (Kashmira Pardeshi), the daughter of his best friend and suspended cop, Inayat Khan (Sushant Singh) after she has been unknowingly trapped in war-torn Syria.",
        image: "images/slider 2.PNG"
    },
    {
        name: "The Night Manager",
        des: "Former Indian Navy Lieutenant Shantanu 'Shaan' Sengupta, is currently working as a night manager in a premiere star hotel in Dhaka, amidst the Rohingya genocide in 2017. He is approached by Safina Kidwai, wife of the majority share owner of the star hotel, Freddie Rehman, to help her escape to India.",
        image: "images/night_manager.png"
    }
];

const carousel=document.querySelector('.carousel');
let sliders=[];
let slideIndex=0;//track the current slide
const createSlide=()=>{
    if(slideIndex >= movie.length){
        slideIndex=0;
    }

//creating Dom elements
let slider= document.createElement('div');
var imgElement= document.createElement('img');
let content= document.createElement('div');
var h1= document.createElement('h1');
var p= document.createElement('p');

//Attaching Element

imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movie[slideIndex].name));
p.appendChild(document.createTextNode(movie[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slider.appendChild(imgElement);
carousel.appendChild(slider);

//setting up the images
imgElement.src=movie[slideIndex].image;
slideIndex++;

//setting elements classnames
slider.className='slider';
content.className='slide-content';
h1.className='movie-title';
p.className='movie-des';

sliders.push(slider);
if(sliders.length){
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
    }px)`;
  }
};
for(let i=0; i<3; i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);

