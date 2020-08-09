// Procurar o botao
document.querySelector('#add-time')
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao (Duplicar os campos)
    function cloneField() {
        //Pega os campos
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
        //Limpar os campos
        const fields = newFieldContainer.querySelectorAll('input')
            //para cada campo, limpar
            fields.forEach(function(field) {
                //pega o field do momento e limpa
                field.value = ""
            })
        // Selecionar onde vai colocar
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }

    

    