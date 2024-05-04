function rc4(key, text) {
    var S = [];
    var K = [];

    for (var i = 0; i < 256; i++) {
        S[i] = i;
        K[i] = key.charCodeAt(i % key.length);
    }

    var j = 0;
    for (var i = 0; i < 256; i++) {
        j = (j + S[i] + K[i]) % 256;
        var temp = S[i];
        S[i] = S[j];
        S[j] = temp;
    }

    var i = 0;
    var j = 0;
    var cipher = '';
    for (var n = 0; n < text.length; n++) {
        i = (i + 1) % 256;
        j = (j + S[i]) % 256;
        var temp = S[i];
        S[i] = S[j];
        S[j] = temp;
        var k = S[(S[i] + S[j]) % 256];
        cipher += String.fromCharCode(text.charCodeAt(n) ^ k);
    }
    return cipher;
}

function encryptdecrypt() {
    var text = document.getElementById('text').value;
    var key = document.getElementById('key').value;
    var result = rc4(key, text);
    document.getElementById('result').value = result;
}

function clearFields() {
    document.getElementById("text").value = "";
    document.getElementById("key").value = "";
    document.getElementById("result").value = "";
}