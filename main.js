const input = document.getElementById('send-email');
const btn = document.getElementById('btn-send');
const textError = document.querySelector('.text-error')
const iconError = document.querySelector('.icon-error')



//Cuando presione el btn
btn.addEventListener('click', () => {
    let inptVal = input.value  
    if(!inptVal.includes('@')){
        generarError()
    }else{
        enviadoError()       
    }
})

function generarError(){
    setTimeout(() => {
        textError.style.display = 'none';
        iconError.style.display = 'none';
    }, 3000)
    textError.style.display = 'block';
    iconError.style.display = 'block';
}

function enviadoError(){

    setTimeout(() => {
        textError.style.display = 'none';
    }, 3000)

        textError.innerHTML = "Email send"
        textError.style.color = "green"
        textError.style.display = "block"
}