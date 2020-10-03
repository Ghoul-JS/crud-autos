const car = [
    {
        id: 1,
        brand: 'Tesla',
        model: 'Tesla X',
        color: 'Azul',
        year: 2020,
        price: 2000
    }, 

    {
        id: 2,
        brand: 'BMW',
        model: 'iX3',
        color: 'Gris',
        year: 2015,
        price: 5000
    },

    {
        id: 3,
        brand: 'Cadillac',
        model: 'Cimarron',
        color: 'Verde',
        year: 1969,
        price: 10000
    }
];

let editingCar = false;

function printPropertis() {
    const tableBody = document.getElementById('table-users-body');
    tableBody.innerHTML = '';

    car.forEach((property) => {
        const td = `<tr>
                        <td>
                            ${property.id}
                        </td>
                        <td>
                            ${property.brand}
                        </td>
                        <td>
                            ${property.model}
                        </td>
                        <td>
                            ${property.color}
                        </td>
                        <td>
                            ${property.year}
                        </td>
                        <td>
                            $${property.price} dlls
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="removeCar(${property.id})">
                            <i class="far fa-trash-alt"></i> Eliminar
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-warning" onclick="editCarButton(${property.id})">
                            <i class="far fa-edit"></i>  Editar
                            </button>
                        </td>
                    </tr>`
        tableBody.innerHTML += td;
    })
}

function submitCar() {
    console.log(editingCar)
    if(editingCar) {
        editCar();
    } else {
        addCar();
    }
}

function editCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    editingCar.brand = brand;
    editingCar.model = model;
    editingCar.color = color;
    editingCar.year = year;
    editingCar.price = price;

    printPropertis();
    editingCar = false;

    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('color').value = '';
    document.getElementById('year').value = '';
    document.getElementById('price').value = ''; 
}

function editCarButton(id) {
    const position = car.find((property) => property.id === id);
    
    document.getElementById('brand').value = position.brand;
    document.getElementById('model').value = position.model;
    document.getElementById('color').value = position.color;
    document.getElementById('year').value = position.year;
    document.getElementById('price').value = position.price;

    editingCar = position;
    
}

function addCar() {

    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    // Creo un nuevas propiedades que es un objeto
    const newProperty = {
        id: car.length + 1,
        brand: brand,
        model: model,
        color: color,
        year: year,
        price: price
    }
    // Agrego el auto creado al array que tiene todos los autos
    car.push(newProperty);
    // imprimo nuevamente a todos los autos
    printPropertis();
    

}

function removeCar(id) {
    const position = car.findIndex((property) => property.id === id);
    car.splice(position, 1);
    printPropertis();
}

// Ejecuto esta función para que al cargar la página se impriman todos los autos del array que tengo actualmente
printPropertis();