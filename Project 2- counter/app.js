// set initial value

let count=0

// select the span
const value =document.querySelector("#value")
// select all the buttons
const btns =document.querySelectorAll(".btn")

// loop over each button click and spits out the classlist, if the classlist contains the keyword, then conduct the appropriate action

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
    const styles=e.currentTarget.classList

    if (styles.contains('decrease')){
        count --
    }else if(styles.contains('increase')){
        count++
    }else{
        count=0
    }
    value.textContent=count

    if (count>0){
        value.style.color="green"
    }else if(count<0){
            value.style.color="red"
        }
        else{
            value.style.color="black"
        }
    }
    )
})


