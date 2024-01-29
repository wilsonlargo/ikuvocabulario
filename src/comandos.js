var OrderAZ;
var idioma;
function VernacularAZ(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.lx.toUpperCase();
    const bandB = b.lx.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison * OrderAZ;
}

function orderVerAZ() {
    idioma=="loc"
    OrderAZ = 1;
    vervocabulario();
}

function orderVerZA() {
    idioma=="loc"
    OrderAZ = -1;
    vervocabulario();
}

function vervocabulario() {
    idioma="loc"
    let PalabrasSort = palabras.sort(VernacularAZ);
    const elemento = document.getElementById("contenedorPalabras");
    elemento.innerHTML = "";

    PalabrasSort.forEach(palabra => {
        //Creamos uncontenedor por palabra
        const nuevaPalabra = document.createElement('div');
        nuevaPalabra.innerHTML = `
            <div class="mb-1">
            <div class="row">
                <div class="col-auto me-aut fw-bold">${palabra.lx.toLowerCase()}</div>
                <div class="col-auto me-aut text-success">${palabra.ps.toLowerCase()}</div>
                <div class="col-auto me-aut fst-italic ms-3">${palabra.dn.toLowerCase()}</div>
            </div>
            </div>      `
        elemento.appendChild(nuevaPalabra)
    })
}


function NationalAZ(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.dn.toUpperCase();
    const bandB = b.dn.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
        comparison = 1;
    } else if (bandA < bandB) {
        comparison = -1;
    }
    return comparison * 1;
}


function orderNatAZ() {
    idioma="es"
    OrderAZ = 1;
    vervocabularioNat();
}

function orderNatZA() {
    idioma=="es"
    OrderAZ = -1;
    vervocabularioNat();
}

function vervocabularioNat() {
    idioma="es"
    let PalabrasSort = palabras.sort(NationalAZ);
    const elemento = document.getElementById("contenedorPalabras");
    elemento.innerHTML = "";

    PalabrasSort.forEach(palabra => {
        //Creamos uncontenedor por palabra
        const nuevaPalabra = document.createElement('div');
        nuevaPalabra.innerHTML = `
            <div class="mb-1">
            <div class="row">
                <div class="col-auto me-aut fw-bold">${palabra.dn.toLowerCase()}</div>
                <div class="col-auto me-aut fst-italic ms-3">${palabra.lx.toLowerCase()}</div>
            </div>
            </div>      `
        elemento.appendChild(nuevaPalabra)
    })
}

async function filtrar(Leter) {
    const elemento = document.getElementById("contenedorPalabras");
    elemento.innerHTML = "";
    let filtrado;
    if (idioma=="es") {
        filtrado = palabras.filter(
            (palabra) => palabra.dn.startsWith(Leter)
        );
        filtrado.forEach(palabra => {
            //Creamos uncontenedor por palabra
            const nuevaPalabra = document.createElement('div');
            nuevaPalabra.innerHTML = `
                <div class="mb-1">
                <div class="row">                   
                    <div class="col-auto me-aut fst-italic">${palabra.dn}</div>
                    <div class="col-auto me-aut fw-bold ms-3">${palabra.lx}</div>
                </div>
                </div>      `
            elemento.appendChild(nuevaPalabra)
        })
    } else if (idioma="loc") {
        filtrado = palabras.filter(
            (palabra) => palabra.lx.startsWith(Leter)
        );
        filtrado.forEach(palabra => {
            //Creamos uncontenedor por palabra
            const nuevaPalabra = document.createElement('div');
            nuevaPalabra.innerHTML = `
                <div class="mb-1">
                <div class="row">
                    <div class="col-auto me-aut fw-bold">${palabra.lx}</div>
                    <div class="col-auto me-aut text-success">${palabra.ps}</div>
                    <div class="col-auto me-aut fst-italic ms-3">${palabra.dn}</div>
                </div>
                </div>      `
            elemento.appendChild(nuevaPalabra)
        })
    }


}