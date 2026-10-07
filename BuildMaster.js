function showInfo(text){
    alert(text);
}

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("message").innerHTML =
    "✅ Съобщението беше изпратено успешно!";

    this.reset();
});