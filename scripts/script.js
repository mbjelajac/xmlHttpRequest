// ECMAScript 5
"use strict";

function loadData() {
    var xhr = new XMLHttpRequest;
    var url = "https://dog.ceo/api/breeds/image/random";
    xhr.open("GET", url, true)
    xhr.onload = function () {
        if (this.status === 200) {
            handleData(JSON.parse(this.responseText));
        }
        else
            alert("Something Went Wrong! Error: " + this.status);
    }
    xhr.send();
}

function handleData(data) {
    var url = data.message;
    var regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+\-?\w+)\/.+/g;
    var breedName = regex.exec(url);
    var name = toTitleCase(breedName[1]).toUpperCase();
    document.querySelector(".img-container").innerHTML = "<img class='page-img' alt='" + name + "' src='" + url + "'/>";
    document.querySelector(".img-info").innerHTML = "<p>" + name + "</p>";
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toUpperCase();
    });
}