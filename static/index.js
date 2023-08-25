document.querySelector("#current").oninput = function() {
    document.head.querySelector("#css").setAttribute("href", "./"+document.querySelector("#current").value+".css");
};