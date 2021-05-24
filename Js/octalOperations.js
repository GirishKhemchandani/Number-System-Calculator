let firstBox=document.querySelector('.first')
let secondBox=document.querySelector('.second')
let firstData
let secondData


let calcBtn=document.querySelector('.calc')
let resBox=document.querySelector('#result')

let chotaBaap=document.getElementById('chotabaap')

calcBtn.addEventListener('click',function(e){
    firstData=parseInt(firstBox.value,8)
    secondData=parseInt(secondBox.value,8)
    let result
    if(chotaBaap.value=='+'){
        result=firstData+secondData
        finalres=result.toString(8)
    }
    if(chotaBaap.value=='-'){
        result=firstData-secondData
        finalres=result.toString(8)
        
    }
    if(chotaBaap.value=='x'){
        result=firstData*secondData
        finalres=result.toString(8)
        
    }
    if(chotaBaap.value=='/'){
        result=firstData/secondData
        finalres=result.toString(8)
        
    }
    resBox.value=finalres
    if(finalres=='NaN'){
        firstBox.value='NaN'
        secondBox.value='NaN'
    }
    
    
})

let refreshButton=document.querySelector('.refresh')
refreshButton.addEventListener("click",function(e){
    firstBox.value=""
    secondBox.value=""
    resBox.value=""
})