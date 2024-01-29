var OrderAZ;
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


    OrderAZ = 1;
    vervocabulario();
}

function orderVerZA() {

    OrderAZ = -1;
    vervocabulario();
}

function vervocabulario() {

    let PalabrasSort = palabras.sort(VernacularAZ);
    const elemento = document.getElementById("contenedorPalabras");
    elemento.innerHTML = "";

    PalabrasSort.forEach(palabra => {
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

    OrderAZ = 1;
    vervocabularioNat();
}

function orderNatZA() {
    OrderAZ = -1;
    vervocabularioNat();
}

function vervocabularioNat() {

    let PalabrasSort = palabras.sort(NationalAZ);
    const elemento = document.getElementById("contenedorPalabras");
    elemento.innerHTML = "";

    PalabrasSort.forEach(palabra => {
        //Creamos uncontenedor por palabra
        const nuevaPalabra = document.createElement('div');
        nuevaPalabra.innerHTML = `
            <div class="mb-1">
            <div class="row">
                <div class="col-auto me-aut fw-bold ms-3">${palabra.dn}</div>
                <div class="col-auto me-aut fst-italic">${palabra.lx}</div>
            </div>
            </div>      `
        elemento.appendChild(nuevaPalabra)
    })
}

async function filtrar(Leter) {
    const elemento = document.getElementById("contenedorPalabras");
    elemento.innerHTML = "";

    const filtrado = palabras.filter(
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