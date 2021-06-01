//Storing buttons for each shape in variables 

let rectangle = document.getElementById('rectangle')
let triangle = document.getElementById('triangle')
let pentagon = document.getElementById('pentagon')
let square = document.getElementById('square')
let circle = document.getElementById('circle')
let hexagon = document.getElementById('hexagon')
const correct = document.getElementById("correctText")
const wrong = document.getElementById("wrongText")

//Declaring the state of the buttons when clicked
let state = -1;


//Creating an array with objects for each shape declared above
const shapes =[
    {shape:rectangle,name:"Rectangle"},{shape:triangle, name: "Triangle"}, {shape: pentagon, name:"Pentagon"}, {shape: square, name:"Square"}, {shape: circle, name: "Circle"}, {shape: hexagon, name: "Hexagon"}
]

//Creating function for what happens when each of the buttons are clicked

function handleClick(index){
    if(state===index){
        state=-1
        }else{
        state=index
        } 
//Making only one button active when clicked
        shapes.map((value, index)=>{
            if(state===index){ 
                value.shape.setAttribute("class","shapes shapes_selected")
            }else{
                value.shape.setAttribute("class","shapes")
            } 
         
        
        })
    
    
}

//Giving the shapes list indexes attached to each shape
shapes.map((value, index)=>{
    value.shape.addEventListener('click', function(){handleClick(index)})

})



//declare guess function 

function guessShape(){
   const guessed = Math.floor(Math.random() *6);
   const correctVal = correct.textContent
   const wrongVal = wrong.textContent
   if(state===guessed){
    correct.textContent = Number(correctVal )+ 1
   }else{
    wrong.textContent = Number(wrongVal) +1
   }

   alert(shapes[guessed].name)
    
}
//When button is clicked, the guessSShape functioni is triggered
let button = document.getElementById('guessBtn')
button.addEventListener('click', ()=>guessShape())


// function good(value){
//     return value*value
// }

// const good = (value)=> (value*value)