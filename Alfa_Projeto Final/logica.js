let form = document.getElementById('formulario')

form.addEventListener('submit', function (e) {

    e.preventDefault()

    let nome = document.getElementById('nome').value
    let telefone = document.getElementById('celular').value
    let endr = document.getElementById('endr').value
    let email = document.getElementById('email').value
    let produto = document.getElementById('slct').value
    let quantidade = document.getElementById('quantidade').value

    document.getElementById('tabela').style.visibility = 'visible'

    let local = document.querySelector('#rnl')
    let casa = document.getElementById('rec')

    let txtlabel

    if (local.checked) {
        txtlabel = local.nextElementSibling.textContent
    } else if (casa.checked) {
        txtlabel = casa.nextElementSibling.textContent
    } else {
        txtlabel = ''
    }

    document.querySelector('#l1').innerHTML = ` ${nome} `
    document.querySelector('#l2').innerHTML = `${telefone}`
    document.querySelector('#l3').innerHTML = `${email}`
    document.querySelector('#l4').innerHTML = `${endr}`
    document.querySelector('#l5').innerHTML = `${produto}`
    document.querySelector('#l6').innerHTML = `${quantidade}`
    document.querySelector('#l7').innerHTML = txtlabel

})



function removerTabela() {
    document.getElementById('tabela').style.visibility = 'hidden';
}


document.querySelector('#botões-form').children[1].addEventListener('click', removerTabela);