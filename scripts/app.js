document.addEventListener('DOMContentLoaded', ()=>{
    const btnAdvice = document.querySelector('.main__btn');
    const textId = document.querySelector('.main__id')
    const textMain =  document.querySelector('.main__text')
    btnAdvice.addEventListener('click', generarID)
    function generarID(){ 
        let numAleatorio =  Math.random()
        numAleatorio = Number(Number(numAleatorio.toFixed(2))*100).toFixed(2)
        fetch(`https://api.adviceslip.com/advice/${numAleatorio}`)
                                        .then( respuesta =>{
                                            return respuesta.json();
                                        })
                                        .then( resultado =>{
                                            const {slip: {id, advice}} = resultado;
                                            generarHTML(id, advice)
                                        })
    }
    function generarHTML(id, advice){
        textId.textContent = `Advice # ${id}`
        textMain.textContent = `"${advice}"`
    }
})