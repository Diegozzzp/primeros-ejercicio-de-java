const pantalla= document.querySelector("#pantalla")
const buttons = document.querySelectorAll("button")

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(btn.id === "="){
        pantalla.value= eval(pantalla.value)
    }else if (btn.id === "ac"){
        pantalla.value = ""
    }else if (btn.id == "de"){
        pantalla.value = pantalla.value.slice(0, -1)
    } else{
        pantalla.value += btn.id
    }
    })
})

