
function string_Buit(string) {
    if (string == "") {
        return "El string és buit";
    }
    else {
        return "El string no és buit";
    }
}

function invertir_String (string) {
    if (string == "") {
        return "El string és buit";
    } else {
        return reverse(string.substr(1)) + string.charAt(0);
    }
}

function quantes_A(string){

for(var i = 0; i < string.length; i++) {
	if (string[i].toLowerCase() === "a") indices.push(i);
}
}