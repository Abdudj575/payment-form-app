const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", handleFormSubmission);

function handleFormSubmission(event){
    event.preventDefault();
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if(new Date() > new Date(year, month - 1)){
        window.alert("Your card has expired!");
        return;
    }

    const cvv = document.getElementById("cvv").value;
    if (!/^[0-9]{3,4}$/.test(cvv)){
        window.alert("Invalid CVV. Must be 3 or 4 digits!");
        return;
    }

    const cnumber = document.getElementById("cnumber").value;
    if(!isValid(cnumber)){
        window.alert("Invalid card number!");
        return;
    }

    window.alert("Thanks for the payment!");
}

function isValid(cnumber){
    return true;
}