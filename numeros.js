const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const numerosErrados = []
const sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = parseInt(frm.inNumero.value)

    if (num == sorteado) {
        respDica.innerText = `Parabéns! Você acertou. Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    } else {
        if (numerosErrados.includes(num)) {
            alert(`Você já apostou o número ${num}. Tento outro...`)
        } else {
            numerosErrados.push(num)
            const erros = numerosErrados.length
            const numChances = CHANCES - erros
            respErros.innerText = `${erros} (${numerosErrados.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0) {
                alert(`Suas chances acabaram`)
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Fim de Jogo!! O número sorteado foi: ${sorteado}`
            } else {
                const dica = num < sorteado ? "maior" : "menor"
                respDica.innerText = `Tente um número ${dica}`
            }
        }
        
    }

    frm.btNovo.addEventListener("click", () => {
        location.reload()
    })

    frm.inNumero.value = ""
    frm.inNumero.focus()
})