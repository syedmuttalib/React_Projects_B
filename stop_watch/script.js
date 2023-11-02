
let counter;
// function start(){
// let output=document.getElementById('result')
// let count=1
//   function demo()
//   {
//     output.innerHTML=count++
//   }
//   counter=setInterval(demo,1000)
// }
// function stop()
// {
//     clearInterval(counter)
// }
let btnstart=document.getElementById('btn1')
let btnstop=document.getElementById('btn2')
let lap=document.getElementById('lap')
let reset=document.getElementById('reset')
let Test=document.getElementById('test')
let count=1
let output=document.getElementById('result');
let lap_result=document.getElementById('content')
let global
btnstart.addEventListener('click',()=>{
    
    function demo()
    {
        output.innerHTML=count++
    }
   global= setInterval(demo,1000)

})
btnstop.addEventListener('click',()=>clearInterval(global))

lap.addEventListener('click',()=>{

   lap_result.innerHTML=count-1
    
})

reset.addEventListener('click',()=>{
    output.innerHTML=0
    clearInterval(global)
    lap_result.innerHTML=0
})