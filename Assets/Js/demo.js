function openTab(evt, tabName) {
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const tablinks = document.getElementsByClassName("tablinks");
    if (tablinks.length > 0) {
        tablinks[0].click(); 
    } else {
        console.error('Элементы с классом "tablinks" не найдены');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close");

    document.querySelectorAll(".view-project").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const imageSrc = this.getAttribute("data-image");
            modalImage.src = imageSrc;
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeIcon.textContent = '🌞';
} else {
  body.classList.add('light-theme');
  themeIcon.textContent = '🌙';
}


themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');


  if (body.classList.contains('dark-theme')) {
    themeIcon.textContent = '🌞'; 
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.textContent = '🌙'; 
    localStorage.removeItem('theme');
  }
});


function updateClock() {
    const now = new Date(); 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

  
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}


setInterval(updateClock, 1000);

updateClock();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get values from input fields
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    const question1 = parseInt(document.getElementById("question1").value) || 0;
    const question2 = parseInt(document.getElementById("question2").value) || 0;
    const question3 = parseInt(document.getElementById("question3").value) || 0;
    const question4 = parseInt(document.getElementById("question4").value) || 0;
    const question5 = parseInt(document.getElementById("question5").value) || 0;

    if (!firstName || !lastName || !email || !phone || !address) {
        alert("Please fill in all the required fields.");
        return;
    }

    if (
        isNaN(question1) ||
        isNaN(question2) ||
        isNaN(question3) ||
        isNaN(question4) ||
        isNaN(question5)
    ) {
        alert("Please provide valid ratings (1-10) for all questions.");
        return;
    }

    const averageScore =
        (question1 + question2 + question3 + question4 + question5) / 5;

    const formattedResult = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Question 1 Rating: ${question1}
        Question 2 Rating: ${question2}
        Question 3 Rating: ${question3}
        Question 4 Rating: ${question4}
        Question 5 Rating: ${question5}
        
        Summary:
        ${firstName} ${lastName} (${email}): ${averageScore.toFixed(2)}
    `;

    // Log result to console
    console.log(formattedResult);

    // Display result in the result section on the webpage
    const resultElement = document.getElementById("result");
    resultElement.textContent = formattedResult;
});



let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

