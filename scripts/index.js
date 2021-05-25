"use strict";

window.onload = function () {
    const estimateBtn = document.getElementById("estimateBtn");
    estimateBtn.onclick = estimateBtnClicked;
}

function estimateBtnClicked() {
    // Get the number of rental days from <input> element
    const rentalDateField = document.getElementById("rentalDate");
    let rentalDate = rentalDateField.value;

    // Get value for number of days from <input> element
    const numberOfDaysField = document.getElementById("numberOfDays");
    let numberOfDays = Number(numberOfDaysField.value);

    let carRental;

    let mo = rentalDate.substr(5, 2);
    let da = rentalDate.substr(8);
    let yr = rentalDate.substr(0,4);

    let reformattedRentalDate = mo + "/" + da + "/" + yr;
    let dateSelected = new Date(reformattedRentalDate);
    let dayOfWeek = dateSelected.getDay()
    
    
    if ((dayOfWeek == 5 && numberOfDays <= 2) || (dayOfWeek == 6 && numberOfDays == 1)) {
        carRental = 10 * numberOfDays;
    }
    else {
        carRental = 29.99 * numberOfDays;
    }

    let options = 0;


    // If checkbox is checked, add a daily Toll Tag fee
    const tollTagCheckbox = document.getElementById("tollTag");
    if (tollTagCheckbox.checked == true) {
        options += (numberOfDays * 3.95);
    }

    const gpsCheckbox = document.getElementById("gps");
    if (gpsCheckbox.checked == true) {
        options += (2.95 * numberOfDays);
    }

    const roadsideAssistCheckbox = document.getElementById("roadsideAssist");
    if (roadsideAssistCheckbox.checked == true) {
        options += (2.95 * numberOfDays);
    }

    let surcharge = 0;

    const yesUnderRadioBtn = document.getElementById("yesUnder");
    if (yesUnderRadioBtn.checked == true) {
        surcharge += (carRental * .30);
    }

    let totalDue = carRental + options + surcharge;


    const carRentalPara = document.getElementById("carRental");
    carRentalPara.innerHTML = "Car Rental: $" + carRental.toFixed(2);


    const optionsPara = document.getElementById("options");
    optionsPara.innerHTML = "Options: $" + options.toFixed(2);


    const surchargePara = document.getElementById("surcharge");
    surchargePara.innerHTML = "Under 25 surcharge: $" + surcharge.toFixed(2);

    const totalDuePara = document.getElementById("totalDue");
    totalDuePara.innerHTML = "Total due $: " + totalDue.toFixed(2);
}