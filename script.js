const changeColor = document.querySelector('.changeColor');

const viewColorCode = document.querySelector('input');

const colors = document.querySelectorAll('.color');
const color = document.querySelector('#colors');

const copyText = document.querySelector('.copyText');

const button = document.querySelector('button');

function generateColorCode(){
    for(i = 0; i < colors.length;i++){
        viewColorCode.setAttribute(`value`,`${colors[i].value}`);
    }
    changeColor.style.backgroundColor = color.value;
}

copyText.addEventListener('click',()=>{
    navigator.clipboard.writeText(viewColorCode.value).then(()=>{
        alert('Copied!')
    });
});

button.addEventListener('click',()=>{
    generateColorCode()
});
