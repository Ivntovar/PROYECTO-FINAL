let carrito = []


if(window.location.pathname.includes("checkout.html")) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    console.log(carrito)
 }

function generarTicket() {
    let contenedorTickets = document.getElementById('ticket')
    let ticket = document.createElement('div')
    let total = document.getElementById('total')

    function sumarTotal() {
        let nPrecio =  Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0);
        return nPrecio
    }

for(let boleto of Object.values(carrito)) {
    
    ticket.innerHTML += `
    <div class="ticket_body">
    <p>Se compraron ${boleto.cantidad} boleto/s de ${boleto.title}</p>
    <span>Precio: ${boleto.precio}</span>
    </div>
    `
 
    total.innerText = `Gracias por tu compra: Total abonado: $${sumarTotal()}`

    
    
    contenedorTickets.appendChild(ticket)
}

}

generarTicket()