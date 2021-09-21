function rating(star) {
    const tagValue = ["Hand Sanitisers","Staff with masks","Social distancing","Deep Cleaned Buses","Mandatory mask","Punctuality",
                        "AC","Rest stop hygiene","Driving","Other"]
    var star = parseInt(star.id)
    const length = 5;

    for (let i = 1; i <= star; i++) {
        let element = document.getElementById(i.toString());
        element.src = "images/starSelected.png";
    }

    for (let i = star + 1; i <= length; i++) {
        let element = document.getElementById(i.toString());
        element.src = "images/starNotSelected.png";
    }

    var texttodisplay = ""
    let ratingtext = "Sorry to hear , we will work to improve it";

    switch(star){
        case 1: texttodisplay = "1 - Terrible";
            break;
        case 2: texttodisplay = "2 - Poor"
            break;
        case 3: texttodisplay = "3 - Okay"
            ratingtext = "We will work to improve it";
            break;
        case 4: texttodisplay = "4 - Good"
            ratingtext = "Thanks, we will work to improve it";
            break;
        case 5: texttodisplay = "5 - Excellent"
            ratingtext = "Thanks! Great to know!";
    }
    
    document.getElementById("ratingText").innerHTML = ratingtext
    var text = document.getElementById("starRatingIndicator");
    text.innerHTML = texttodisplay;
    text.style.fontSize = "3.4rem";


    let middle = ""
    const start = '<div class="better"> <div class = "betterHeading"> What could have been better ? </div> <ul class = "betterTags">'
    const end = ' </ul> </div> <div class = "tellMore" ><div class = "tellMoreHeading" > Tell us more </div> <textarea id="tellMoreText" class = "tellMoreText" onselect="textarea(this)"> </textarea> </div> <input id = "submitButton"type = "submit"value = "SUBMIT">'
    for(let i = 0;i<tagValue.length;i++){
        middle+= '<li> <input type = "checkbox" id = "checkbox'+(i+1)+'" value ="'+tagValue[i]+'"> <label class = "taglabel" for="checkbox'+(i+1)+'">'+tagValue[i]+'<img id="dislikeimg" src = "images/dislike.png"> </label> </li>'
    }
    document.getElementById("formContent").innerHTML = start+middle+end

}

function toastMessage() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(() => { x.className = x.className.replace("show", ""); }, 2000);
  }

function validateForm(form){

    var starSet = document.getElementById("starRating");
    starSet.style.pointerEvents = "none"
    starSet.style.opacity = 0.7;

    var formid = document.getElementById("formContent");
    for(var i = 0;i <formid.length;i++){
        formid[i].disabled = true;
    }
  
    formid.style.opacity = 0.7;
    toastMessage();
}