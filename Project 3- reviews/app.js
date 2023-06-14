// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Keyur Patel',
      job: 'Chemist',
      img: 'https://drive.google.com/uc?export=view&id=1YgdBJN40EsKYzlLfRVCgL1-f9KDyVAhv',
      text: "Return stare for 1.6 seconds, ensure your face is mask-like, within a short period of two years, subject will warm up to you",
    },
    {
      id: 2,
      name: 'Snehal Patel',
      job: 'Chemist',
      img: 'https://drive.google.com/uc?export=view&id=1St62bBG2nyqbedfBVjB2uVdN6718Ul2v',
      text: 'Compliment weight loss. Subject will grow ecstatic and offer weight loss secrets',
    },
    {
      id: 3,
      name: 'Abid Iqbal',
      job: 'Reviewer',
      img: 'https://drive.google.com/uc?export=view&id=1XfM1OBaRZboPwPG5Zm_RftEkU-1woM1H',
      text: 'Mention the worse traits of the pesky Liberals. Subject will begrudgingly take you under wing',
    },
    {
      id: 4,
      name: 'Ritesh Tailor',
      job: 'Chemist',
      img: 'https://drive.google.com/uc?export=view&id=1t-Ui7NIfQqZOPgD1S-4jvN57tJmlOHRG',
      text: `Find a way to highlight subject's brain power. e.g. Bring up his doctorate. Note: If subject appears agitated, pull fire alarm`,
    },
  ];
  

//   select items

const img= document.getElementById("person-img")
const author= document.getElementById("author")
const job= document.getElementById("job")
const info= document.getElementById("info")

const previous= document.querySelector(".prev-btn")
const next= document.querySelector(".next-btn")
const random= document.querySelector(".random-btn")


// next button goes to the next item

let currentItem=0

window.addEventListener("DOMContentLoaded", function(){
showPerson(currentItem)
    
})

// previous button

previous.addEventListener('click',function(){
    currentItem--
    if (currentItem<0){
        currentItem=4
    }
    
showPerson(currentItem)})

// next button
next.addEventListener('click',function(){
    currentItem++

    if (currentItem>reviews.length-1){
        currentItem=0
    }

showPerson(currentItem)})


//  random button  
random.addEventListener('click',function(){
    let currentItem=Math.floor(Math.random()*reviews.length)
    showPerson(currentItem)
})


// function for altering the content of the DOM
function showPerson(person){
    const item= reviews[person]

    img.src=item.img
    author.innerText=item.name
    job.innerText=item.job
    info.textContent=item.text

   
    
}