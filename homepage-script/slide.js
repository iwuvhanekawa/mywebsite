//let intervalId; // Declare a variable to store the interval ID

function slideRight() {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}

function restartSlideInterval() {
  clearInterval(intervalId); // Clear the current interval
  intervalId = setInterval(slideRight, 5000); // Start a new interval
}

document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
  restartSlideInterval(); // Restart the interval after clicking Next
}

document.getElementById('pre').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
  restartSlideInterval(); // Restart the interval after clicking Previous
}

restartSlideInterval(); // Start the interval initially