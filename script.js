const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", handleFormSubmission);

function handleFormSubmission(event){
    event.preventDefault();
    window.alert("Thanks for the payment!");
}