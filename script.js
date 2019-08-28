'use strict'

function init() {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true)
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(JSON.parse(this.responseText));
            handleData(JSON.parse(this.responseText));
        }
        else
            alert("Something Went Wrong! Error: " + this.status);
    }
    xhr.send();
}

function handleData(data) {
    let url = data.message;
    let regex = /https:\/\/images\.dog\.ceo\/breeds\/(\w+\-?\w+)\/.+/g;
    let breedName = regex.exec(url);
    let name = toTitleCase(breedName[1]).toUpperCase();
    document.querySelector('.img-container').innerHTML = "<img class='page-img' alt='" + name + "' src='" + url + "'/>";
    document.querySelector('.img-info').innerHTML = "<p>" + name + "</p>";
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toUpperCase();
    });
}