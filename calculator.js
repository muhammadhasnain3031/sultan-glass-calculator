const display = document.getElementById('display');

function appendValue(value) {
    // Agar pehle se 0 hai aur naya digit aaye to 0 hata do
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearAll() {
    display.value = "";
}

function lastDelete() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval professional tareeke se
        if (display.value.trim() !== "") {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Error";
        setTimeout(clearAll, 1500); // 1.5 sec baad khud clear ho jaye
    }
}