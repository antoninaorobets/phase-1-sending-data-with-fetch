function submitData(userName, userEmail) {
    const data = {
        name: userName,
        email: userEmail,
    }


    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data)})
        .then((response) => response.json())
        .then((respObj) => addIdtoDom(respObj.id))
        .catch(function (error) {
            alert("Bad things! Ragnarők!");
            addErrorToDom(error.message);
          });
}


function addIdtoDom(id) {
    const p = document.createElement("p")
    p.textContent = id;
    document.querySelector("body").appendChild(p)
}


function addErrorToDom (message){
    const p = document.createElement("p")
    p.textContent = message;
    document.querySelector("body").appendChild(p)
}

// submitData("Ola", "ola@gmail.com")