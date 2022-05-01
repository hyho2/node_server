"use strict";


const id = document.querySelector("#id"),
 psword = document.querySelector("#psword"),
 loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value
    };
    // console.log(req);
    // console.log(JSON.stringify(req));

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res)=> res.json()) //res.json()의 반환값은 promise다
      .then((res) => console.log(res));
}


