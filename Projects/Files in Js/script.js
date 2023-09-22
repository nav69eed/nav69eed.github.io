// document.addEventListener('DOMContentLoaded', function () {
//     const contentDiv = document.getElementById('content');

//     // Function to read the contents of the file and display it in the div
//     function displayFileContent(fileContent) {
//         contentDiv.innerText = fileContent;
//     }

//     // Function to handle file reading errors
//     function displayError(error) {
//         contentDiv.innerText = 'Error reading the file: ' + error.message;
//     }

//     // Fetch the text file using fetch API
//     fetch('na.txt')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('File not found');
//             }
//             return response.text();
//         })
//         .then(displayFileContent)
//         .catch(displayError);
// });



// div = document.getElementById('content')
// // console.log(div)

// function display(texttodisplay) {
//     div.innerText = texttodisplay;
// }
// fetch('na.txt')
//     .then(response => {
//         return response.text();
//     })
//     .then(display);

// document.addEventListener('DOMContentLoaded', function () {
//     const contentDiv = document.getElementById('content');
//     const saveButton = document.getElementById('saveButton');

//     // Function to save the content of the div to a file
//     function saveContentToFile() {
//         const content = contentDiv.innerText;
//         const blob = new Blob([content], { type: 'text/plain' });
//         const url = URL.createObjectURL(blob);

//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'saved_content.txt';
//         document.body.appendChild(a);
//         a.click();

//         // Cleanup
//         document.body.removeChild(a);
//         URL.revokeObjectURL(url);
//     }

//     // Add click event listener to the save button
//     saveButton.addEventListener('click', saveContentToFile);
// });



const stars = document.querySelectorAll('.star');
const selectedRating = document.getElementById('selected-rating');

let rating = 0;

// Function to highlight the stars when the user hovers over them
function highlightStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

// Function to set the selected rating when the user clicks on a star
function setRating(ratingValue) {
  rating = ratingValue;
  selectedRating.textContent = rating;
}

// Event listeners for hover and click events
stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const starRating = parseInt(star.dataset.rating);
    highlightStars(starRating);
  });

  star.addEventListener('mouseout', () => {
    highlightStars(rating);
  });

  star.addEventListener('click', () => {
    const starRating = parseInt(star.dataset.rating);
    setRating(starRating);
  });
});
