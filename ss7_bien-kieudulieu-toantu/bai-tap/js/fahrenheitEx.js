//code js bài 2 chuyển độ C sang độ F
function exercise2() {
    let celsius = parseFloat(prompt("NHâp độ C"));
    let fahrenheit = (9 * celsius) / 5 + 32;

    document.getElementById("myEx2").innerHTML = "F = " + fahrenheit + "&degF";
}