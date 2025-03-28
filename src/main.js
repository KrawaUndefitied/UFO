"use strict";

let DerParole = prompt("What is your name?");

if (DerParole===null||DerParole==='') {
    alert("Cancelled");
}

if (DerParole!="admin") {
    alert("I don't know you");
}

if (DerParole === "admin") {
    const admin = prompt("Enter password please");


    if (admin == "i'm the boss") {
        alert("Hello bug man");
    }

    if (admin !== "i'm the boss") {
        alert("Incorrect password");
    }

    if (admin === null || admin === "") {
        alert("Cancelled");
    }
}
