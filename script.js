function calculateNumbers() {
    let output = "";

    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            output += `Square root of ${i} is ${Math.sqrt(i).toFixed(2)}<br>`;
        } else {
            output += `Square of ${i} is ${i * i}<br>`;
        }
    }

    document.getElementById("output").innerHTML = output;
}
