const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}
// Changee image when clicked in sproduct.html.
var MainImg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

var products = document.getElementsByClassName('products');

var shopProducts = document.getElementsByClassName('shopPageProducts');

smallimg[0].onclick = function() {
  MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
  MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
  MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
  MainImg.src = smallimg[3].src;
}

products[0].onclick = function() {
  MainImg.src = products[0].src;
}
products[1].onclick = function() {
  MainImg.src = products[1].src;
}
products[2].onclick = function() {
  MainImg.src = products[2].src;
}
products[3].onclick = function() {
  MainImg.src = products[3].src;
}




shopProducts[0].onclick = function() {
  MainImg.src = shopProducts[0].src;
}
shopProducts[1].onclick = function() {
  MainImg.src = shopProducts[1].src;
}
