var title = document.getElementById("title");
var bg_2 = document.getElementById("bg-2");
var bg_3 = document.getElementById("bg-3");

var image_card_1 = document.getElementById("image__card-1");
var image_card_2 = document.getElementById("image__card-2");
var image_card_3 = document.getElementById("image__card-3");
var image_card_4 = document.getElementById("image__card-4");

document.addEventListener("scroll", (event) => {
  var positionY = window.scrollY;

  title.style.fontSize = `${100 + positionY * 0.5}px`;

  bg_2.style.top = `-${positionY * 0.5}px`;
  bg_3.style.top = `-${positionY}px`;
  bg_3.style.scale = 1 + positionY * 0.001;

  image_card_1.style.transform = `translateY(${
    positionY * -0.5 + 400
  }px)`;

  image_card_2.style.transform = `translateY(${positionY * 0.1 + -50}px)`;

  image_card_3.style.transform = `translateY(${
    positionY * -0.1 + 100
  }px)`;

  image_card_4.style.transform = `translateY(${
    positionY * 0.2 + -125
  }px)`;

  var _newOpacity = positionY * 0.001;
  if (_newOpacity >= 0 && _newOpacity <= 1) {
    image_card_1.style.opacity = _newOpacity;
    image_card_2.style.opacity = _newOpacity;
    image_card_3.style.opacity = _newOpacity;
    image_card_4.style.opacity = _newOpacity;
  }
});


// Center title dynamically on load
document.getElementById("title").style.margin = "0 auto";

// Generate Fake Reviews for "What People Say"
const feedbackSlider = document.querySelector(".feedback-slider");
const feedbackData = [
  "Amazing photography and experience!",
  "Captured memories beautifully.",
  "Highly professional and creative shots.",
  "Absolutely stunning work!",
  "Best photographer I've worked with!",
  "Unique perspectives in each shot.",
  "Brings moments to life with the lens.",
  "Incredible attention to detail.",
  "A true artist behind the camera.",
  "Exceeded all my expectations!"
];

let currentFeedback = 0;

// Function to render feedback card
function showFeedback(index) {
  feedbackSlider.innerHTML = ""; // Clear previous card
  const feedbackCard = document.createElement("div");
  feedbackCard.className = "feedback-card active";
  feedbackCard.textContent = feedbackData[index];
  feedbackSlider.appendChild(feedbackCard);

  // Increment and loop through reviews
  currentFeedback = (currentFeedback + 1) % feedbackData.length;
}

// Loop through reviews every 3 seconds
setInterval(() => {
  showFeedback(currentFeedback);
}, 3000);

// Contact Form Submission Alert (link functionality)
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you for contacting us!");
});


