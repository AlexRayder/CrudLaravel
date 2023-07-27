// const { forEach } = require("lodash");

var id = 0;

function Create() {
    axios.post("/producto", {
        nombre: txtNombre.value,
        cantidad: txtCantidad.value,
        
    })
        .then(function (response) {
            console.log(response);
            Read();
            limpiar();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto agregado correctamente',
            });
        })
        .catch(function (error) {
            console.log(error.response.data.errors);
            let errors = "";
            Object.values(error.response.data.errors).forEach(element => {
                errors += `${element}<br>`; // Utilizar etiqueta <br> para el salto de línea
            });
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: errors // Utilizar el atributo "html" para permitir etiquetas HTML
            });
        });
}
    


function Read() {
    axios.get("/producto")
        .then(function (response) {
            console.log(response.data);
            let filas = "";
            response.data.forEach((element, index) => {
                filas += `<tr>`;
                filas += `<td scope='row' style="text-align: center;">${index + 1}</td>`;
                filas += `<td>${element.nombre}</td>`;
                filas += `<td style="text-align: center;">${element.cantidad}</td>`;
                filas += `<td style="text-align: center;"><input onclick='load(${JSON.stringify(element)})' type="radio" name="checkOpcion" id="checkOpcion"></td>`;
                filas += `</tr>`;
            });
            document.getElementById("tbl-Producto").innerHTML = filas
        })
        .then(function (error) {
            console.log(error);
        });
}

function Update() {
    // Verificar si los campos están vacíos
    if (txtNombre.value.trim() === "" || txtCantidad.value.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los campos nombre o cantidad estan vacios.',
        });
        return; // Evitar que la función continúe si los campos están vacíos
    }

    // Si los campos no están vacíos, mostrar el diálogo de confirmación
    Swal.fire({
        title: '¿Estás seguro de actualizar?',
        text: 'Confirme sus datos antes de actualizar',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, ¡Actualiza!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, proceder con la actualización
            axios.put("/producto/" + this.id, {
                id: this.id,
                nombre: txtNombre.value,
                cantidad: txtCantidad.value,
            })
            .then(function (response) {
                console.log(response);
                Swal.fire(
                    '¡Actualizado!',
                    'El registro ha sido actualizado.',
                    'success'
                );
                Read();
                limpiar();
            })
            .catch(function (error) {
                console.log(error.response.data.errors);
                let errors = "";
                Object.values(error.response.data.errors).forEach(element => {
                    errors += `${element}<br>`; // Utilizar etiqueta <br> para el salto de línea
                });
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: errors // Utilizar el atributo "html" para permitir etiquetas HTML
                });
            });
        } else {
            // Si el usuario cancela, no hacer nada
            console.log("Operación de actualización cancelada.");
        }
    });
}

  








function Delete() {
    if (txtNombre.value.trim() === "" || txtCantidad.value.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Los campos nombre o cantidad estan vacios.',
        });
        return; // Evitar que la función continúe si los campos están vacíos
    }
    let respuesta = (Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        showWosButton: true,
        confirmButtonColor: '#FF0000',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'

      }).then((result) => {
        if (result.isConfirmed) {
            if (respuesta) {
                axios.delete("/producto/" + this.id)
                    .then(function (response) {
                        console.log(response);
                        Read();
                        limpiar();
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      }));
   
}

function load(element) {
    this.id = element.id;
    txtNombre.value = element.nombre;
    txtCantidad.value = element.cantidad;
}

function limpiar() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtCantidad").value = "";
}

Read();

