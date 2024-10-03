const productosDisponibles = [
    { id: 1, nombre: 'Espresso', precio: 2000 },
    { id: 2, nombre: 'Lungo', precio: 2500 },
    { id: 3, nombre: 'Macciato', precio: 3000 }
];

let carrito = [];

function mostrarProductos() {
    let mensaje = 'Productos disponibles:\n';
    productosDisponibles.forEach(producto => {
        mensaje += `${producto.id}: ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensaje);
}

function agregarProducto() {
    const idProducto = parseInt(prompt('Ingresa el ID del producto que deseas agregar:'));
    const productoSeleccionado = productosDisponibles.find(producto => producto.id === idProducto);
    
    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
        alert(`${productoSeleccionado.nombre} agregado al carrito.`);
    } else {
        alert('Producto no encontrado.');
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    let mensaje = 'Carrito actual:\n';
    carrito.forEach(producto => {
        mensaje += `${producto.nombre} - $${producto.precio}\n`;
    });

    const total = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0);
    mensaje += `\nTotal: $${total}`;
    
    alert(mensaje);
}

function eliminarProducto() {
    const idProducto = parseInt(prompt('Ingresa el ID del producto que deseas eliminar:'));
    const indice = carrito.findIndex(producto => producto.id === idProducto);
    
    if (indice !== -1) {
        const productoEliminado = carrito.splice(indice, 1);
        alert(`${productoEliminado[0].nombre} ha sido eliminado del carrito.`);
    } else {
        alert('Producto no encontrado en el carrito.');
    }
}

function iniciarSimulador() {
    let opcion;
    do {
        
        opcion = prompt('Bienvenido, elige una opción:\n1. Mostrar productos\n2. Agregar producto al carrito\n3. Mostrar carrito\n4. Eliminar producto del carrito\n5. Salir');
        
        switch(opcion) {
            case '1':
                mostrarProductos();
                break;
            case '2':
                agregarProducto();
                break;
            case '3':
                mostrarCarrito();
                break;
            case '4':
                eliminarProducto();
                break;
            case '5':
                alert('Gracias por usar el simulador de carrito.');
                break;
            default:
                alert('Opción no válida.');
        }
    } while(opcion !== '5');
}

iniciarSimulador();
