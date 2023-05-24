let slideIndex = 1;
var n1;
var res = 0;
var nomeProd;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} //caso o parametro N seja maior que o numero de slides ele retornará ao primeiro slide
  if (n < 1) {slideIndex = slides.length} //caso o parametro N seja menor que 1, ou seja, for para trás
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //ocultando eles
  }
  slides[slideIndex-1].style.display = "block"; //exibir ele
} 

function addCar(n1, nomeProd) {
    let total = document.getElementById('val');

    res = res + n1;

    total.innerHTML = `  ${res.toFixed(2)}  `;
    
    alert(`O Produto ${nomeProd} foi adicionado no carrinho`);

}
