document.querySelector("form").addEventListener("submit", function (event) {
    if(document.querySelector("input").value.trim() === ""){
        document.querySelector(".labelEmail").classList.add("empty");
        event.preventDefault();
        return false;
    }
    alert('Email cadastrado na base de dados com sucesso!');
})