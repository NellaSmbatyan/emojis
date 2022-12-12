const hearts = document.querySelectorAll(".fa-heart")
const emojis = document.querySelectorAll(".fa-regular",".fa-solid")
const colors = ["red", "yellow","green"]
updatePage(0)
hearts.forEach((heart,index) =>{
     heart.addEventListener("click",()=>{
        updatePage(index)
     })
})

function updatePage(index){
    hearts.forEach((heart,ind)=>{
        if(ind < index + 1){
           heart.classList.add("active")
        } else {
            heart.classList.remove("active")
        }
    })
    emojis.forEach(emoji => {
        emoji.style.transform = `translateX(-${ index * 50}px)`
        emoji.style.color = colors[index]
    })

}