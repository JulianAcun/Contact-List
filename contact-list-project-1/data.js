// Clase Contacto
class Contacto {
  constructor(id, nombres, apellidos, telefono, ubicaciones) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.ubicaciones = ubicaciones;
  }
}

// Clase Ubicacion
class Ubicacion {
  constructor(ciudad, direccion) {
    this.ciudad = ciudad;
    this.direccion = direccion;
  }
}

// Lista de contactos con datos predefinidos
let listaDeContactos = [
  { id: 1, nombres: "Yina", apellidos: "Vasquez", telefono: "32451234", ubicaciones: { ciudad: "Ciudad de México", direccion: "Calle 123" } },
  { id: 2, nombres: "Jhon", apellidos: "Acuna", telefono: "123579565", ubicaciones: { ciudad: "Madrid", direccion: "Avenida 456" } },
  { id: 3, nombres: "Danna", apellidos: "Cubillos", telefono: "345632567", ubicaciones: { ciudad: "Buenos Aires", direccion: "Carrera 789" } },
];

// Función para mostrar los contactos en la consola
function mostrarContactos() {
  listaDeContactos.forEach((contacto) => {
    console.log(`ID: ${contacto.id}, Nombre: ${contacto.nombres} ${contacto.apellidos}, Teléfono: ${contacto.telefono}, Ubicación: ${contacto.ubicaciones.ciudad}, ${contacto.ubicaciones.direccion}`);
  });
}

// Función para agregar un nuevo contacto a la lista
document
  .getElementById("agregar-contacto")
  .addEventListener("click", function () {
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    const ciudad = document.getElementById("ciudad").value;
    const direccion = document.getElementById("direccion").value;

    if (nombres && apellidos && telefono && ciudad && direccion) {
      const id = listaDeContactos.length + 1;
      const ubicaciones = new Ubicacion(ciudad, direccion);
      const nuevoContacto = new Contacto(id, nombres, apellidos, telefono, ubicaciones);
      listaDeContactos.push(nuevoContacto);
      mostrarContactos();
      document.getElementById("nombres").value = "";
      document.getElementById("apellidos").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("ciudad").value = "";
      document.getElementById("direccion").value = "";
    }
  });

// Función para borrar un contacto existente de la lista
document
  .getElementById("borrar-contacto")
  .addEventListener("click", function () {
    const id = parseInt(document.getElementById("id-eliminar").value);
    if (id) {
      listaDeContactos = listaDeContactos.filter(
        (contacto) => contacto.id !== id
      );
      mostrarContactos();
      document.getElementById("id-eliminar").value = "";
    }
  });

// Función para actualizar un contacto existente
function actualizarContacto(id, nuevosDatos) {
  for (let i = 0; i < listaDeContactos.length; i++) {
    if (listaDeContactos[i].id === id) {
      if (nuevosDatos.nombres) {
        listaDeContactos[i].nombres = nuevosDatos.nombres;
      }
      if (nuevosDatos.apellidos) {
        listaDeContactos[i].apellidos = nuevosDatos.apellidos;
      }
      if (nuevosDatos.telefono) {
        listaDeContactos[i].telefono = nuevosDatos.telefono;
      }
      if (nuevosDatos.ubicaciones) {
        if (nuevosDatos.ubicaciones.ciudad) {
          listaDeContactos[i].ubicaciones.ciudad = nuevosDatos.ubicaciones.ciudad;
        }
        if (nuevosDatos.ubicaciones.direccion) {
          listaDeContactos[i].ubicaciones.direccion = nuevosDatos.ubicaciones.direccion;
        }
      }
      break;
    }
  }
}
