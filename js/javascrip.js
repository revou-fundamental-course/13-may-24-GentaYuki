//luas segitiga//
function hitungluas() {
    let a    = document.getElementById("alas").value;
    let t    = document.getElementById("tinggi").value;
    let L    = 0.5 * a * t;

    if (a === "" || t === ""){
        alert('masukan nilai dengan benar')}
    else { document.getElementById("hasilLuas").innerHTML = L;
    }
    
}
//keliling segitiga//
function hitungkel() {
    let sisiA   = document.getElementById("sisiA").value;
    let sisiB   = document.getElementById("sisiB").value;
    let sisiC   = document.getElementById("sisiC").value;
    let kell    = parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC);

    if (sisiA === "" || sisiB === "" || sisiC === ""){
        alert('masukan nilai dengan benar')
    } else {
    document.getElementById("hasilKell").innerHTML = kell;
}}
 
//reset//
function clearall() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("hasilLuas").innerHTML = "";
    document.getElementById("hasilKell").innerHTML = "";
    
}