document.querySelector("textarea#code").oninput = function() {
    document.head.querySelector("#css").innerHTML = document.querySelector("textarea#code").value;
};