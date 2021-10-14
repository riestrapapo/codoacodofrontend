function visual() {
    let menu = document.getElementById('ocultar');
    if (menu.className === 'ocultar') {
        menu.className = 'mostrar';
    } else {
        menu.className = 'ocultar';
    }
}


window.onload = function() {
    // Variables
    const IMAGENES = [
        'img/service.jpeg',
        'img/mecanica.jpg',
        'img/mecanica2.jpg'
    ];
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');

    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }


    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    renderizarImagen();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario').addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
        alert('No has escrito nada en el Nombre');
        return;
    }

    let apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
        alert('No has escrito nada en Apellido');
        return;
    }

    //agregar funcion para email
    let email = document.getElementById('email').value;
    if (email.includes('@') && email.includes('.')) {} else {
        alert('Tu Email no es Valido, por favor, ingrese nuevamente');
        return;
    }

    let textArea = document.getElementById('textArea').value;
    if (textArea.length == 0) {
        alert('No has escrito nada en Consulta');
        return;
    }

    document.getElementById('formulario').reset();
    alert('Se ha enviado Correctamente')
    this.submit();

}