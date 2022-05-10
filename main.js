var select = document.getElementById("select");
var arr = ["Latvian", "English", "Russian"];

for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("OPTION");
    var txt = document.createTextNode(arr[i]);

    option.appendChild(txt);
    option.setAttribute("value", i);
    select.insertBefore(option, select.lastChild);
}

select.addEventListener('change', changeHeading);

function changeHeading() {
    document.getElementById('heading').innerHTML = arr[select.value];
}
