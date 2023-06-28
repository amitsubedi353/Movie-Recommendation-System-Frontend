// Get all the genre checkboxes
let genreCheckboxes = document.querySelectorAll(".genre-checkbox");

// Get the next button
let nextButton = document.querySelector("#next-button");

// Add an event listener to the next button
nextButton.addEventListener("click", function() {
    // Check if at least one genre checkbox is selected
    let atLeastOneChecked = false;
    for (let i = 0; i < genreCheckboxes.length; i++) {
        if (genreCheckboxes[i].checked) {
            atLeastOneChecked = true;
            break;
        }
    }

    // If at least one genre checkbox is not selected, show an error message
    if (!atLeastOneChecked) {
        alert("Please select at least one genre.");
    }
    else {
        // navigate to next page
        window.location.href = "home.html";
    }
});
