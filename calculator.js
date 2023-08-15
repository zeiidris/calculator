const numbers = document.querySelectorAll('.number')
const controls = document.querySelectorAll('.control')
const resultEl = document.getElementById('result')
let sign = ""
let clickedNums = []
let result = 0
numbers.forEach(num =>{
    num.addEventListener('click' , e=>{
        clickedNums.push(+e.target.innerText)
        console.log(clickedNums);
    })
})
controls.forEach(btn =>{
    btn.addEventListener('click' , e =>{
        if(e.target.innerText == "*"){
            sign = "multiply"
        }else if(e.target.innerText == "/"){
            sign = "divise"
        }else if (e.target.innerText == "+"){
            sign = "add"
        }else if (e.target.innerText == "-"){
            sign = "minus"
        }
        if(e.target.innerText == "="){
            if(sign == "multiply"){
                result = clickedNums[0] * clickedNums[1]
                resultEl.value = result;
            }
            if(sign == "minus"){
                result = clickedNums[0] - clickedNums[1]
                console.log(result);
                resultEl.value = result;
            }
            if(sign == "add"){
                result = clickedNums[0] + clickedNums[1]
                console.log(result);
                resultEl.value = result;
            }
            if(sign == "divise"){
                result = clickedNums[0] / clickedNums[1]
                console.log(result);
                resultEl.value = result;
            }
            clickedNums = []
        }
    })
})
