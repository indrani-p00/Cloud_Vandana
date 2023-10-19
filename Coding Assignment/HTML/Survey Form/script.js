document.getElementById('submitBtn').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.getElementsByName('gender');
    let gender = '';
    for (let element of genderElements) {
        if (element.checked) {
			gender = element.value;
        }
    }
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
 
    // Validate all fields
    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        alert('Please fill out all required fields');
        return;
    }
 
    // Display the collected data in the popup
    document.getElementById('popupFirstName').textContent = firstName;
    document.getElementById('popupLastName').textContent = lastName;
    document.getElementById('popupDob').textContent = dob;
    document.getElementById('popupCountry').textContent = country;
    document.getElementById('popupGender').textContent = gender;
    document.getElementById('popupProfession').textContent = profession;
    document.getElementById('popupEmail').textContent = email;
    document.getElementById('popupMobile').textContent = mobile;
 
    // Show the popup
    document.getElementById('popup').style.display = 'flex';
});
 
document.getElementById('closePopup').addEventListener('click', function() {
    // Close the popup
    document.getElementById('popup').style.display = 'none';
 
    // Reset the form
    document.getElementById('surveyForm').reset();
});
 
document.getElementById('resetBtn').addEventListener('click', function() {
    // Reset the form
    document.getElementById('surveyForm').reset();
});