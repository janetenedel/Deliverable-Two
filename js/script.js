
function fashionAdvice() {
    var eventType = "";
    var clothingEvent = "";
    while (eventType === "") {
        eventType = prompt("What type of event are you attending today? \rIs it casual, semi-formal or formal?");

        if (eventType === null) {
            return;
        }

        else if (eventType === "casual") {
            clothingEvent = "something comfy";
        }

        else if (eventType === "semi-formal") {
            clothingEvent = "a polo";
        }
        else if (eventType === "formal") {
            clothingEvent = "a suit";
        }
        else {
            eventType = "";
        }

    }

    var tempFahr = "";
    var clothingTemp = "";
    while (tempFahr === "") {
        tempFahr = prompt("What is the expected temperature for the day?");

        if (tempFahr === null) {
            return;
        }

        else if (tempFahr === "") {
            ;
        }

        else if (tempFahr < 54) {
            clothingTemp = "a coat";
        }
        else if (tempFahr >= 54 && tempFahr < 70) {
            clothingTemp = "a jacket";
        }

        else if (isNaN(tempFahr)){
            alert("Please enter a number");
            tempFahr = "";
        }
        else {
            clothingTemp = "no jacket";
        }
    }

    var result = "Since it is " + tempFahr + "  degrees and you are going to a " + eventType + " event, you should wear " + clothingEvent + " and " + clothingTemp + ".";
    console.log(result);
    document.getElementById("result").innerHTML = result;
}

