let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.items')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button
nextBtn.onclick = function(){
    moveSlider('next')
}
// Function for prev button
prevBtn.onclick = function(){
    moveSlider('prev')
}

function moveSlider(direction){
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')

      

    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('.next')
    } else{
        sliderList.prependChild(sliderItems[sliderItems.length - 1])
        thumbnail.prependChild(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('.prev')
    }
}

slider.addEventListener('animationed',function() {
    if (direction === 'next') {
        slider.classList.remove('next')
    }  else {
        slider.classList.remove('prev')
    }
},  {once: true})