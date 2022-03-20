var numberofbtn = document.querySelectorAll(".rating-btn").length;

for(var i=0;i<numberofbtn;i++){
    document.querySelectorAll(".rating-btn")[i].addEventListener("click", handleClick);
}

document.querySelector(".submit").addEventListener("click",handleSubmit);
var x = 0;
function handleClick(){
    x = this.value;
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
}
function handleSubmit(){
    if(x == 0){
        alert("Please choose a number");
        return;
    }  
    else{
        var eleme = document.getElementById("card");
      eleme.classList.add("hidden");
    
        var element = document.getElementById("thankyou-card");
      element.classList.remove("hidden");
    
      document.querySelector(".rate").textContent = "You selected "+x+" out of 5";
    }
}