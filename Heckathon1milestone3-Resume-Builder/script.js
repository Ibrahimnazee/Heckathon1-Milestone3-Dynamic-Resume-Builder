// Select the form elements
var form = document.getElementById('resumeForm');
var generateResumeBtn = document.getElementById('generateResume');
var resumeContainer = document.getElementById('resumeContainer');
var formContainer = document.getElementById('formContainer');
// Add event listener to the generate resume button
generateResumeBtn.addEventListener('click', function (event) {
    var _a;
    event.preventDefault(); // Prevent form submission
    // Fetch the input values
    var name = document.getElementById('name').value;
    var position = document.getElementById('position').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var linkedin = document.getElementById('linkedin').value;
    var profilePicture = ((_a = document.getElementById('profilePicture').files) === null || _a === void 0 ? void 0 : _a[0]) || null;
    var sonOf = document.getElementById('sonOf').value;
    var dob = document.getElementById('dob').value;
    var nationality = document.getElementById('nationality').value;
    var languages = document.getElementById('languages').value;
    var hobbies = document.getElementById('hobbies').value;
    var objective = document.getElementById('objective').value;
    var experience = document.getElementById('experience').value.split(',');
    var education = document.getElementById('education').value.split(',');
    var skills = document.getElementById('skills').value.split(',');
    var certifications = document.getElementById('certifications').value.split(',');
    // Display resume
    var displayName = document.getElementById('displayName');
    var displayPosition = document.getElementById('displayPosition');
    var displayPhone = document.getElementById('displayPhone');
    var displayEmail = document.getElementById('displayEmail');
    var displayAddress = document.getElementById('displayAddress');
    var displayLinkedIn = document.getElementById('displayLinkedIn');
    var displayProfilePicture = document.getElementById('displayProfilePicture');
    var displaySonOf = document.getElementById('displaySonOf');
    var displayDOB = document.getElementById('displayDOB');
    var displayNationality = document.getElementById('displayNationality');
    var displayLanguages = document.getElementById('displayLanguages');
    var displayHobbies = document.getElementById('displayHobbies');
    var displayObjective = document.getElementById('displayObjective');
    var displayExperience = document.getElementById('displayExperience');
    var displayEducation = document.getElementById('displayEducation');
    var displaySkills = document.getElementById('displaySkills');
    var displayCertifications = document.getElementById('displayCertifications');
    displayName.textContent = name;
    displayPosition.textContent = position;
    displayPhone.textContent = phone;
    displayEmail.textContent = email;
    displayEmail.href = "mailto:".concat(email);
    displayAddress.textContent = address;
    displayLinkedIn.textContent = linkedin;
    displayLinkedIn.href = linkedin;
    if (profilePicture) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            displayProfilePicture.src = reader_1.result;
            displayProfilePicture.style.display = 'block';
        };
        reader_1.readAsDataURL(profilePicture);
    }
    displaySonOf.textContent = sonOf;
    displayDOB.textContent = dob;
    displayNationality.textContent = nationality;
    displayLanguages.textContent = languages;
    displayHobbies.textContent = hobbies;
    displayObjective.textContent = objective;
    // Clear and populate work experience
    displayExperience.innerHTML = '';
    experience.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        displayExperience.appendChild(li);
    });
    // Clear and populate education details
    displayEducation.innerHTML = '';
    education.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        displayEducation.appendChild(li);
    });
    // Clear and populate skills with progress bar
    displaySkills.innerHTML = '';
    skills.forEach(function (skill) {
        var _a = skill.split(':'), skillName = _a[0], percentage = _a[1];
        var skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.innerHTML = "\n            <strong>".concat(skillName, "</strong>: ").concat(percentage, "%\n            <div class=\"progress-container\">\n                <div class=\"progress-bar\" style=\"width: ").concat(percentage, "%;\">").concat(percentage, "%</div>\n            </div>\n        ");
        displaySkills.appendChild(skillDiv);
    });
    // Clear and populate certifications
    displayCertifications.innerHTML = '';
    certifications.forEach(function (cert) {
        var p = document.createElement('p');
        p.textContent = cert;
        displayCertifications.appendChild(p);
    });
    // Toggle visibility
    formContainer.style.display = 'none';
    resumeContainer.style.display = 'block';
});
