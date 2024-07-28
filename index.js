
let flag=0;

function slidecontroler(num){
     flag=flag+num;
     slideshow(flag);
}

function slideshow(slidenum){
    let slide=document.getElementsByClassName('slide');

    if(slidenum == slide.length){
        flag=0;
        slidenum=0;
    }
    if(slide.length < 0){
        flag=slide.length-1;
        slidenum=slide.length-1;
    }

    for(let x of slide){
        x.style.display='none'; 
    }

    slide[flag].style.display='block';
}

slideshow(flag);