

function calculate(){
    let height=document.querySelector("#height").value;
    let weight=document.querySelector("#weight").value
    let age=document.querySelector("#age").value
    if(age===null || isNaN(age) || 2>age && age>120){
        alert("Enter valid age")
    }else if(height===null || isNaN(height) || height<=0){
        alert("Positive number only.")
    }else if(weight===null || isNaN(weight) || weight<=0){
        alert("Positive number only.")
    }else{
        document.querySelector("#height").value=""
        document.querySelector("#weight").value=""
        document.querySelector("#age").value=""
    }
    let bmi=weight/(height*height)
    let description=""
    console.log(bmi)
    let p=document.querySelector(".bmi")
    p.innerHTML=bmi

}

function clear(){
    console.log("clear")
    let C=document.querySelector("#clear")
    C.addEventListener("click",()=>{
        document.querySelector("#height").value=""
        document.querySelector("#weight").value=""
        document.querySelector("#age").value=""
    })
}