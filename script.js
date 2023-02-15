/*largura dinamica */

let totalSlides = document.querySelectorAll('.slider--item').length;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;

/*correção altura botões  */
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

/*funções botões*/
let currentSlide = 0;/*variavel de ambiente para contagem de slides */

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();

}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides -1 ))
    {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext,5000); /*set intervalo de tempo*/