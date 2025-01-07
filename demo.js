function openTab(evt, tabName) {
    // Panaikinti visas atidarytas tabų klases
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }

    // Pašalinti aktyvią klasę iš visų skirtukų nuorodų
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Rodyti pasirinktą tabą ir pažymėti nuorodą kaip aktyvią
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Automatiškai atidaryti Home tabą pagal nutylėjimą
document.getElementsByClassName("tablinks")[0].click();
