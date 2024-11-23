// Select the form elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const generateResumeBtn = document.getElementById('generateResume') as HTMLButtonElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement;
const formContainer = document.getElementById('formContainer') as HTMLDivElement;

// Add event listener to the generate resume button
generateResumeBtn.addEventListener('click', (event: Event) => {
    event.preventDefault();  // Prevent form submission

    // Fetch the input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0] || null;
    const sonOf = (document.getElementById('sonOf') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const nationality = (document.getElementById('nationality') as HTMLInputElement).value;
    const languages = (document.getElementById('languages') as HTMLTextAreaElement).value;
    const hobbies = (document.getElementById('hobbies') as HTMLTextAreaElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.split(',');
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.split(',');
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split(',');
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value.split(',');

    // Display resume
    const displayName = document.getElementById('displayName') as HTMLHeadingElement;
    const displayPosition = document.getElementById('displayPosition') as HTMLParagraphElement;
    const displayPhone = document.getElementById('displayPhone') as HTMLParagraphElement;
    const displayEmail = document.getElementById('displayEmail') as HTMLAnchorElement;
    const displayAddress = document.getElementById('displayAddress') as HTMLParagraphElement;
    const displayLinkedIn = document.getElementById('displayLinkedIn') as HTMLAnchorElement;
    const displayProfilePicture = document.getElementById('displayProfilePicture') as HTMLImageElement;
    const displaySonOf = document.getElementById('displaySonOf') as HTMLSpanElement;
    const displayDOB = document.getElementById('displayDOB') as HTMLSpanElement;
    const displayNationality = document.getElementById('displayNationality') as HTMLSpanElement;
    const displayLanguages = document.getElementById('displayLanguages') as HTMLSpanElement;
    const displayHobbies = document.getElementById('displayHobbies') as HTMLSpanElement;
    const displayObjective = document.getElementById('displayObjective') as HTMLParagraphElement;
    const displayExperience = document.getElementById('displayExperience') as HTMLUListElement;
    const displayEducation = document.getElementById('displayEducation') as HTMLUListElement;
    const displaySkills = document.getElementById('displaySkills') as HTMLDivElement;
    const displayCertifications = document.getElementById('displayCertifications') as HTMLDivElement;

    displayName.textContent = name;
    displayPosition.textContent = position;
    displayPhone.textContent = phone;
    displayEmail.textContent = email;
    displayEmail.href = `mailto:${email}`;
    displayAddress.textContent = address;
    displayLinkedIn.textContent = linkedin;
    displayLinkedIn.href = linkedin;

    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = () => {
            displayProfilePicture.src = reader.result as string;
            displayProfilePicture.style.display = 'block';
        };
        reader.readAsDataURL(profilePicture);
    }

    displaySonOf.textContent = sonOf;
    displayDOB.textContent = dob;
    displayNationality.textContent = nationality;
    displayLanguages.textContent = languages;
    displayHobbies.textContent = hobbies;
    displayObjective.textContent = objective;

    // Clear and populate work experience
    displayExperience.innerHTML = '';
    experience.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        displayExperience.appendChild(li);
    });

    // Clear and populate education details
    displayEducation.innerHTML = '';
    education.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        displayEducation.appendChild(li);
    });

    // Clear and populate skills with progress bar
    displaySkills.innerHTML = '';
    skills.forEach(skill => {
        const [skillName, percentage] = skill.split(':');
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.innerHTML = `
            <strong>${skillName}</strong>: ${percentage}%
            <div class="progress-container">
                <div class="progress-bar" style="width: ${percentage}%;">${percentage}%</div>
            </div>
        `;
        displaySkills.appendChild(skillDiv);
    });

    // Clear and populate certifications
    displayCertifications.innerHTML = '';
    certifications.forEach(cert => {
        const p = document.createElement('p');
        p.textContent = cert;
        displayCertifications.appendChild(p);
    });

    // Toggle visibility
    formContainer.style.display = 'none';
    resumeContainer.style.display = 'block';
});
