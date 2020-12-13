function dino() {
    let kotak = document.getElementById('gambar');
    let dinosaurus = document.getElementById('dinosaurus');

    if (!dinosaurus.value == ' ') {
        kotak.innerHTML = `<img src="${dinosaurus.value}.png"></img>`
        alert(`Ini Dinosaurus ${dinosaurus.value}`)
    }

    return false;
}