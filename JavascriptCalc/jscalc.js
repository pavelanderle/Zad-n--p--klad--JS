function displayKey(key) {
    if(document.getElementById("display").value == 0)
        document.getElementById("display").value = key.innerHTML;
    else
        document.getElementById("display").value += key.innerHTML;
}