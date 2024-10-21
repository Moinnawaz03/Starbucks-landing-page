function firstImg() {
  imgslider('./images/img1.png');
  changeCircleColor('#017143'); // Starbucks green
  changeTextColor('#017143'); // Change Starbucks text color to green
  changeButtonColor('#017143'); // Change button color to green
}

function secondImg() {
  imgslider('./images/img2.png');
  changeCircleColor('#eb7495'); // Light pink
  changeTextColor('#eb7495'); // Change Starbucks text color to light pink
  changeButtonColor('#eb7495'); // Change button color to light pink
}

function thirdImg() {
  imgslider('./images/img3.png');
  changeCircleColor('#d752b1'); // Bright purple
  changeTextColor('#d752b1'); // Change Starbucks text color to purple
  changeButtonColor('#d752b1'); // Change button color to purple
}

function imgslider(imgPath) {
  document.getElementById('glas1').src = imgPath; // Change the main image source
}

function changeCircleColor(color) {
  const circle = document.querySelector('.circle'); // Select the circle
  circle.style.background = color; // Change the background color
}

function changeTextColor(color) {
  const span = document.querySelector('.textBox h2 span'); // Select the span inside h2
  span.style.color = color; // Change the color of Starbucks text
}

function changeButtonColor(color) {
  const button = document.querySelector('.btn'); // Select the button
  button.style.backgroundColor = color; // Change the background color of the button
}
