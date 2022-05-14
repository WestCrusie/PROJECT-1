let submitBtn = document.getElementById("submitBtn"),
    setAge = document.getElementById("age"),
    fname = document.getElementById("fname"),
    lname = document.getElementById("lname"),
    gender = document.getElementById("gender"),
    phone = document.getElementById("phone"),
    Email = document.getElementById("mail"),
    dob = document.getElementById("dob"),
    school = document.getElementById("sch"),
    age = document.getElementById("age"),
    Continent = document.getElementById("Continent"),
    africa = document.getElementById("africa"),
    asia = document.getElementById("asia"),
    northamerica = document.getElementById("northamerica"),
    southamerica = document.getElementById("southamerica"),
    others = document.getElementById("others"),
    africaContr = document.getElementById("africaContr"),
    asiaContr = document.getElementById("asiaContr"),
    northamericaContr = document.getElementById("northamericaContr"),
    southamericaContr = document.getElementById("southamericaContr"),
    othersContr = document.getElementById("othersContr"),
    sbuj1 = document.getElementById("sbuj1"),
    subj2 = document.getElementById("subj2"),
    subj3 = document.getElementById("sub3"),
    subj4 = document.getElementById("sub4"),
    subj5 = document.getElementById("sub5"),
    subj6 = document.getElementById("sub6"),
    subj7 = document.getElementById("sub7"),
    subj8 = document.getElementById("sub8"),
    subjSc1 = document.getElementById("subSc1"),
    subjSc2 = document.getElementById("subSc2"),
    subjSc3 = document.getElementById("subSc3"),
    subjSc4 = document.getElementById("subSc4"),
    subjSc5 = document.getElementById("subSc5"),
    subjSc6 = document.getElementById("subSc6"),
    subjSc7 = document.getElementById("subSc7"),
    subjSc8 = document.getElementById("subSc8"),
    resultContainer = document.getElementById("resultContainer"),
    allInputs = document.getElementById("subjs"),
    Age,
    point,
    agePoint,
    countryPoint,
    gradePoint,
    avg;

Continent.addEventListener("change", function () {
    showCountry()
})

submitBtn.addEventListener("click", function (e) {
    e.preventDefault()
    applyForm()
    calcScore()
    displayResult()
    Pic()

    fname.value = "";
    lname.value = "";
    dob.value = "";
    phone.value = "";
    Continent.value = "";
    gender.value = "";
    school = "";
    sbuj1 = "";
    subj2 = "";
    subj3 = "";
    subj4 = "";
    subj5 = "";
    subj6 = "";
    subj7 = "";
    subj8 = "";
    subjSc1 = "";
    subjSc2 = "";
    subjSc3 = "";
    subjSc4 = "";
    subjSc5 = "";
    subjSc6 = "";
    subjSc7 = "";
    subjSc8 = "";




});

function Pic() {
    let massChart = new Chart(myChart, {
        type: "pie",
        data: {
            labels: ["agePoint", "gradePoint", "countryPoint"],
            datasets: [{
                label: "Results",
                data: [
                    agePoint,
                    gradePoint,
                    countryPoint
                ],
                backgroundColor: [
                    "purple",
                    "orange",
                    "grey"
                ],
                borderWidth: 2,
                borderColor: "black",
                hoverBorderWidth: 2,
                hoverBorderColor: "red"
            }]
        },
        options: {}
    });
}

function applyForm() {
    if (fname.value == "" || fname.value == null) {
        fname.nextElementSibling.innerHTML = "First Name is Required"
    } else {
        fname.nextElementSibling.innerHTML = "";
    }
    if (lname.value == "" || lname.value == null) {
        lname.nextElementSibling.innerHTML = "Last Name is Required"
    } else {
        lname.nextElementSibling.innerHTML = "";
    }
    if (dob.value == "" || dob.value == null) {
        dob.nextElementSibling.innerHTML = " Date of birth Required";
    } else {
        dob.nextElementSibling.innerHTML = "";
    }
    if (gender.value == "" || gender.value == null) {
        gender.nextElementSibling.innerHTML = "Gender Required";
    } else {
        gender.nextElementSibling.innerHTML = "";
    }
    if (phone.value == "" || phone.value == null) {
        phone.nextElementSibling.innerHTML = "Phone number  Required";
    } else {
        phone.nextElementSibling.innerHTML = "";
    }
    if (sch.value == "" || sch.value == null) {
        sch.nextElementSibling.innerHTML = "School is Required";
    } else {
        sch.nextElementSibling.innerHTML = "";
    }
    if (mail.value == "" || mail.value == null) {
        mail.nextElementSibling.innerHTML = "Email is Required"
    } else {
        mail.nextElementSibling.innerHTML = "";
    }
    if (Continent.value == "" || Continent.value == null) {
        Continent.nextElementSibling.innerHTML = "Continent  Required";
    } else {
        Continent.nextElementSibling.innerHTML = "";
    }

    if (subSc1.value == "" || subSc1.value == null) {
        subSc1.nextElementSibling.innerHTML = "Score Required";
    } else {
        subSc1.nextElementSibling.innerHTML = "";
    }
    if (subSc2.value == "" || subSc2.value == null) {
        subSc2.nextElementSibling.innerHTML = "Score Required";
    } else {
        subSc2.nextElementSibling.innerHTML = "";
    }
    if (sub3.value == "" || sub3.value == null) {
        sub3.nextElementSibling.innerHTML = "Score Required";
    } else {
        sub3.nextElementSibling.innerHTML = "";
    }
    if (subSc3.value == "" || subSc3.value == null) {
        subSc3.nextElementSibling.innerHTML = "Score Required";
    } else {
        subSc3.nextElementSibling.innerHTML = "";
    }
    if (sub4.value == "" || sub4.value == null) {
        sub4.nextElementSibling.innerHTML = "Score Required";
    } else {
        sub4.nextElementSibling.innerHTML = "";
    }
    if (subSc4.value == "" || subSc4.value == null) {
        subSc4.nextElementSibling.innerHTML = "Score Required";
    } else {
        subSc4.nextElementSibling.innerHTML = "";
    }
    if (sub5.value == "" || sub5.value == null) {
        sub5.nextElementSibling.innerHTML = "Score Required";
    } else {
        sub5.nextElementSibling.innerHTML = "";
    }
    if (subSc5.value == "" || subSc5.value == null) {
        subSc5.nextElementSibling.innerHTML = "Score Required";
    } else {
        subSc5.nextElementSibling.innerHTML = "";
    }
    if (sub6.value == "" || sub6.value == null) {
        sub6.nextElementSibling.innerHTML = "Score Required";
    } else {
        sub6.nextElementSibling.innerHTML = "";
    }
    if (subSc6.value == "" || subSc6.value == null) {
        subSc6.nextElementSibling.innerHTML = "Score Required";
    } else {
        subSc6.nextElementSibling.innerHTML = "";
    }
    if (sub7.value == "" || sub7.value == null) {
        sub7.nextElementSibling.innerHTML = "Score Required";
    } else {
        sub7.nextElementSibling.innerHTML = "";
    }
    if (subSc7.value == "" || subSc7.value == null) {
        subSc7.nextElementSibling.innerHTML = "Score Required";
    } else {
        subSc7.nextElementSibling.innerHTML = "";
    }
    if (sub8.value == "" || sub8.value == null) {
        sub8.nextElementSibling.innerHTML = "Score Required";
    } else {
        sub8.nextElementSibling.innerHTML = "";
    }
    if (subSc8.value == "" || subSc8.value == null) {
        subSc8.nextElementSibling.innerHTML = "Score Required";
    } else {
        subSc8.nextElementSibling.innerHTML = "";
    }

    if (africa.value == "" || africa.value == null || asia.value == "" || asia.value == null || others.value == "" || others.value == null || northamerica.value == "" || northamerica.value == null || southamerica.value == "" || southamerica.value == null) {
        africa.nextElementSibling.innerHTML = "Country Required";
        asia.nextElementSibling.innerHTML = "Country Required";
        others.nextElementSibling.innerHTML = "Country Required";
        northamerica.nextElementSibling.innerHTML = "Country Required";
        southamerica.nextElementSibling.innerHTML = "Country Required";
    } else {
        africa.nextElementSibling.innerHTML = "";
        asia.nextElementSibling.innerHTML = "";
        others.nextElementSibling.innerHTML = "";
        northamerica.nextElementSibling.innerHTML = "";
        southamerica.nextElementSibling.innerHTML = "";
    }

}

function showCountry() {

    if (Continent.value == "africa") {
        africaContr.style.display = "block"
        asiaContr.style.display = "none"
        othersContr.style.display = "none"
        northamericaContr.style.display = "none"
        southamericaContr.style.display = "none"
    } else if (Continent.value == "asia") {
        africaContr.style.display = "none"
        asiaContr.style.display = "block"
        othersContr.style.display = "none"
        northamericaContr.style.display = "none"
        southamericaContr.style.display = "none"
    } else if (Continent.value == "others") {
        africaContr.style.display = "none"
        asiaContr.style.display = "none"
        othersContr.style.display = "block"
        northamericaContr.style.display = "none"
        southamericaContr.style.display = "none"
    } else if (Continent.value == "northamerica") {
        africaContr.style.display = "none"
        asiaContr.style.display = "none"
        othersContr.style.display = "none"
        northamericaContr.style.display = "block"
        southamericaContr.style.display = "none"
    } else if (Continent.value == "southamerica") {
        africaContr.style.display = "none"
        asiaContr.style.display = "none"
        othersContr.style.display = "none"
        northamericaContr.style.display = "none"
        southamericaContr.style.display = "block"
    } else if (Continent.value == "" || Continent.value == null) {
        africaContr.style.display = "none"
        asiaContr.style.display = "none"
        othersContr.style.display = "none"
        northamericaContr.style.display = "none"
        southamericaContr.style.display = "none"
    }
}

function calcScore() {
    let year = new Date().getFullYear(),
        date_of_birth = new Date(dob.value).getFullYear()
    age = year - date_of_birth;

    if (18 <= age && age <= 24) {
        agePoint = 100
    } else if (25 <= age && age <= 30) {
        agePoint = 80
    } else if (31 <= age && age <= 35) {
        agePoint = 50
    } else if (36 <= age && age <= 40) {
        agePoint = 30
    } else if (41 <= age) {
        agePoint = 10
    }
    console.log(agePoint)

    if (africa.value != "" || africa.value != null) {
        countryPoint = 50
    } else if (asia.value != "" || asia.value != null) {
        countryPoint = 40
    } else if (southamerica.value != "" || southamerica.value != null) {
        countryPoint = 30
    } else if (northamerica.value != "" || northamerica.value != null) {
        countryPoint = 20
    } else if (others.value != "" || others.value != null) {
        countryPoint = 10
    }
    console.log(countryPoint)

    avg = (parseInt(subSc1.value) + parseInt(subSc2.value) + parseInt(subSc3.value) + parseInt(subSc4.value) + parseInt(subSc5.value) + parseInt(subSc6.value) + parseInt(subSc7.value) + parseInt(subSc8.value)) / 8
    console.log(avg)

    if (avg >= 90 && avg <= 100) {
        gradePoint = 150
    } else if (avg >= 85 && avg <= 90) {
        gradePoint = 140
    } else if (avg >= 75 && avg <= 84) {
        gradePoint = 120
    } else if (avg >= 65 && avg <= 74) {
        gradePoint = 100
    } else if (avg >= 60 && avg <= 64) {
        gradePoint = 80
    } else if (avg >= 50 && avg <= 59) {
        gradePoint = 50
    } else if (avg >= 40 && avg <= 49) {
        gradePoint = 20
    }

    console.log(gradePoint)
    point = gradePoint + countryPoint + agePoint
    console.log(point)

}

function displayResult() {
    let sex
    if (gender.value == "male") {
        sex = "Mr"
    } else if (gender.value == "female" && age < 30) {
        sex = "Miss"
    } else if (gender.value == "female" && age > 30) {
        sex = "Mrs"
    }
    if (point >= 180) {
        resultContainer.innerHTML =
            `<div class="inner-result-container">
                         <h2>CONGRATULATION</h2>
                         <p> Hello ${sex} ${fname.value} ${lname.value} ,
                              After considering your data,We are pleased to announce to you that
                             you  have qualified for our scholarship programme.
                             Below is your performance Chart.
                         </p>
                         <canvas class="chart-results" id="myChart">
     
                         </canvas>
                         
                     </div>`
    } else {
        resultContainer.innerHTML =
            `<div class="inner-result-container">
                         <h2>SORRY, APPLICATION DECLINED</h2>
                         <p> Hello ${sex} ${fname.value} ${lname.value},
                             You displayed some great personal strength but we have 
                             received aapplications from other candiates whose avg aligned
                             more closely with our requirements. 
                             Below is your performance Chart.
                         <canvas class="chart-results" id="myChart">
     
                         </canvas>
                     </div>`
    }
}








