// Toggle Theme Function
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Save Journal Entry
function saveEntry() {
    let title = document.getElementById("entryTitle").value;
    let text = document.getElementById("entryText").value;
    let bgColor = document.getElementById("bgColorPicker").value;
    let date = new Date().toLocaleDateString();

    if (title && text) {
        let entryDiv = document.createElement("div");
        entryDiv.style.backgroundColor = bgColor;
        entryDiv.innerHTML = `<h3>${title} (${date})</h3><p>${text}</p>`;
        document.getElementById("entries").appendChild(entryDiv);

        // Clear inputs
        document.getElementById("entryTitle").value = "";
        document.getElementById("entryText").value = "";
    } else {
        alert("Please enter a title and some text.");
    }
}

// Save Calendar Entry
function saveCalendarEntry() {
    let date = document.getElementById("entryDate").value;
    let entry = document.getElementById("calendarEntry").value;

    if (date && entry) {
        alert(`Saved entry for ${date}: ${entry}`);
    } else {
        alert("Please select a date and enter some text.");
    }
}

// Set Reminder
function setReminder() {
    let date = document.getElementById("entryDate").value;
    let entry = document.getElementById("calendarEntry").value;

    if (date && entry) {
        alert(`Reminder set for ${date}: ${entry}`);
    } else {
        alert("Please select a date and enter some text.");
    }
}

// Save Profile Information
function saveProfile() {
    let name = document.getElementById("userName").value;
    let hobbies = document.getElementById("userHobbies").value;

    if (name && hobbies) {
        document.getElementById("profileDisplay").innerHTML = `<p><strong>Name:</strong> ${name}</p><p><strong>Hobbies:</strong> ${hobbies}</p>`;
    } else {
        alert("Please enter your name and hobbies.");
    }
}
