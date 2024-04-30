document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Assuming you want to log the form data, you can replace this with your desired action
    console.log(formDataObject);
});
