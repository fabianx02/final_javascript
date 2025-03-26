// Guardar datos de ejemplo en localStorage al cargar la página
window.onload = function() {
    const datosEjemplo = {
        datosPersonales: {
            nombre: "Juan Pérez",
            fecha_nacimiento: "1990-01-01",
            lugar_nacimiento: "Ciudad de México",
            nacionalidad: "Mexicana",
            documento_identidad: "123456789",
            estado_civil: "Soltero",
            direccion: "Calle Falsa 123",
            telefono: "555-1234",
            correo: "juan.perez@example.com"
        },
        informacionAcademica: {
            nivel_estudios: "Universitaria",
            institucion_educativa: "Universidad Nacional",
            titulo_obtenido: "Ingeniero",
            ano_graduacion: "2015"
        },
        datosFamiliares: {
            nombre_padre: "Carlos Pérez",
            nombre_madre: "María López",
            nombre_conyuge: "",
            numero_hijos: "0"
        },
        antecedentesMedicos: {
            enfermedad_cronica: "No",
            especificar_enfermedad: "",
            operado: "No",
            especificar_operacion: "",
            alergias: "No",
            especificar_alergias: "",
            dispositivo_medico: "No",
            especificar_dispositivo: ""
        },
        antecedentesJudiciales: {
            antecedentes_judiciales: "No",
            explicar_antecedentes: ""
        },
        experienciaMilitar: {
            fuerza_armada: "No",
            institucion_fuerza_armada: "",
            seguridad_maritima: "No",
            especificar_cursos: ""
        },
        motivacion: {
            motivacion: "Quiero servir a mi país y aprender nuevas habilidades."
        }
    };

    localStorage.setItem('datosEjemplo', JSON.stringify(datosEjemplo));
    cargarListaAspirantes();
};

// Función para rellenar el formulario con datos de ejemplo
function rellenarFormulario() {
    const datosEjemplo = JSON.parse(localStorage.getItem('datosEjemplo'));

    if (datosEjemplo) {
        const { datosPersonales, informacionAcademica, datosFamiliares, antecedentesMedicos, antecedentesJudiciales, experienciaMilitar, motivacion } = datosEjemplo;

        document.getElementById('nombre').value = datosPersonales.nombre;
        document.getElementById('fecha_nacimiento').value = datosPersonales.fecha_nacimiento;
        document.getElementById('lugar_nacimiento').value = datosPersonales.lugar_nacimiento;
        document.getElementById('nacionalidad').value = datosPersonales.nacionalidad;
        document.getElementById('documento_identidad').value = datosPersonales.documento_identidad;
        document.querySelector(`input[name="estado_civil"][value="${datosPersonales.estado_civil}"]`).checked = true;
        document.getElementById('direccion').value = datosPersonales.direccion;
        document.getElementById('telefono').value = datosPersonales.telefono;
        document.getElementById('correo').value = datosPersonales.correo;

        document.querySelector(`input[name="nivel_estudios"][value="${informacionAcademica.nivel_estudios}"]`).checked = true;
        document.getElementById('institucion_educativa').value = informacionAcademica.institucion_educativa;
        document.getElementById('titulo_obtenido').value = informacionAcademica.titulo_obtenido;
        document.getElementById('ano_graduacion').value = informacionAcademica.ano_graduacion;

        document.getElementById('nombre_padre').value = datosFamiliares.nombre_padre;
        document.getElementById('nombre_madre').value = datosFamiliares.nombre_madre;
        document.getElementById('nombre_conyuge').value = datosFamiliares.nombre_conyuge;
        document.getElementById('numero_hijos').value = datosFamiliares.numero_hijos;

        document.querySelector(`input[name="enfermedad_cronica"][value="${antecedentesMedicos.enfermedad_cronica}"]`).checked = true;
        document.getElementById('especificar_enfermedad').value = antecedentesMedicos.especificar_enfermedad;
        document.querySelector(`input[name="operado"][value="${antecedentesMedicos.operado}"]`).checked = true;
        document.getElementById('especificar_operacion').value = antecedentesMedicos.especificar_operacion;
        document.querySelector(`input[name="alergias"][value="${antecedentesMedicos.alergias}"]`).checked = true;
        document.getElementById('especificar_alergias').value = antecedentesMedicos.especificar_alergias;
        document.querySelector(`input[name="dispositivo_medico"][value="${antecedentesMedicos.dispositivo_medico}"]`).checked = true;
        document.getElementById('especificar_dispositivo').value = antecedentesMedicos.especificar_dispositivo;

        document.querySelector(`input[name="antecedentes_judiciales"][value="${antecedentesJudiciales.antecedentes_judiciales}"]`).checked = true;
        document.getElementById('explicar_antecedentes').value = antecedentesJudiciales.explicar_antecedentes;

        document.querySelector(`input[name="fuerza_armada"][value="${experienciaMilitar.fuerza_armada}"]`).checked = true;
        document.getElementById('institucion_fuerza_armada').value = experienciaMilitar.institucion_fuerza_armada;
        document.querySelector(`input[name="seguridad_maritima"][value="${experienciaMilitar.seguridad_maritima}"]`).checked = true;
        document.getElementById('especificar_cursos').value = experienciaMilitar.especificar_cursos;

        document.getElementById('motivacion').value = motivacion.motivacion;
    }
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById('formularioIngreso').reset();
}

// Función para cargar y mostrar la lista de aspirantes
function cargarListaAspirantes() {
    const tablaAspirantes = document.getElementById('tablaAspirantes').getElementsByTagName('tbody')[0];
    tablaAspirantes.innerHTML = ''; // Limpiar la tabla antes de llenarla

    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const datosFormulario = JSON.parse(localStorage.getItem(clave));

        if (datosFormulario && datosFormulario.datosPersonales) {
            const fila = tablaAspirantes.insertRow();
            fila.insertCell(0).innerText = datosFormulario.datosPersonales.nombre;
            fila.insertCell(1).innerText = datosFormulario.datosPersonales.fecha_nacimiento;
            fila.insertCell(2).innerText = datosFormulario.datosPersonales.lugar_nacimiento;
            fila.insertCell(3).innerText = datosFormulario.datosPersonales.nacionalidad;
            fila.insertCell(4).innerText = datosFormulario.datosPersonales.documento_identidad;
            fila.insertCell(5).innerText = datosFormulario.datosPersonales.correo;
        }
    }
}

document.getElementById('formularioIngreso').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const form = document.getElementById('formularioIngreso');
    if ($(form).parsley().isValid()) {
        try {
            const datosPersonales = {
                nombre: document.getElementById('nombre').value,
                fecha_nacimiento: document.getElementById('fecha_nacimiento').value,
                lugar_nacimiento: document.getElementById('lugar_nacimiento').value,
                nacionalidad: document.getElementById('nacionalidad').value,
                documento_identidad: document.getElementById('documento_identidad').value,
                estado_civil: document.querySelector('input[name="estado_civil"]:checked').value,
                direccion: document.getElementById('direccion').value,
                telefono: document.getElementById('telefono').value,
                correo: document.getElementById('correo').value
            };

            const informacionAcademica = {
                nivel_estudios: document.querySelector('input[name="nivel_estudios"]:checked').value,
                institucion_educativa: document.getElementById('institucion_educativa').value,
                titulo_obtenido: document.getElementById('titulo_obtenido').value,
                ano_graduacion: document.getElementById('ano_graduacion').value
            };

            const datosFamiliares = {
                nombre_padre: document.getElementById('nombre_padre').value,
                nombre_madre: document.getElementById('nombre_madre').value,
                nombre_conyuge: document.getElementById('nombre_conyuge').value,
                numero_hijos: document.getElementById('numero_hijos').value
            };

            const antecedentesMedicos = {
                enfermedad_cronica: document.querySelector('input[name="enfermedad_cronica"]:checked').value,
                especificar_enfermedad: document.getElementById('especificar_enfermedad').value,
                operado: document.querySelector('input[name="operado"]:checked').value,
                especificar_operacion: document.getElementById('especificar_operacion').value,
                alergias: document.querySelector('input[name="alergias"]:checked').value,
                especificar_alergias: document.getElementById('especificar_alergias').value,
                dispositivo_medico: document.querySelector('input[name="dispositivo_medico"]:checked').value,
                especificar_dispositivo: document.getElementById('especificar_dispositivo').value
            };

            const antecedentesJudiciales = {
                antecedentes_judiciales: document.querySelector('input[name="antecedentes_judiciales"]:checked').value,
                explicar_antecedentes: document.getElementById('explicar_antecedentes').value
            };

            const experienciaMilitar = {
                fuerza_armada: document.querySelector('input[name="fuerza_armada"]:checked').value,
                institucion_fuerza_armada: document.getElementById('institucion_fuerza_armada').value,
                seguridad_maritima: document.querySelector('input[name="seguridad_maritima"]:checked').value,
                especificar_cursos: document.getElementById('especificar_cursos').value
            };

            const motivacion = {
                motivacion: document.getElementById('motivacion').value
            };

            const datosFormulario = {
                datosPersonales,
                informacionAcademica,
                datosFamiliares,
                antecedentesMedicos,
                antecedentesJudiciales,
                experienciaMilitar,
                motivacion
            };

            const clave = datosPersonales.documento_identidad;
            localStorage.setItem(clave, JSON.stringify(datosFormulario));

            toastr.success('Datos guardados en localStorage');
            cargarListaAspirantes(); // Actualizar la lista de aspirantes
        } catch (error) {
            toastr.error('Ocurrió un error al guardar los datos. Por favor, inténtelo de nuevo.');
        }
    } else {
        toastr.warning('Por favor, complete todos los campos obligatorios.');
    }
});
