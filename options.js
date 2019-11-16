// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let page = document.getElementById('buttonDiv');
let studentDiv = document.getElementById('studentDiv');
/*
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function () {
            chrome.storage.sync.set({
                color: item
            }, function () {
                console.log('color is ' + item);
            })
        });
        page.appendChild(button);
    }
}
constructOptions(kButtonColors);*/

chrome.storage.sync.get(function (data) {
    console.log(data.students.length);
    // console.log(data);
    let html = "";
    data.students.forEach(element => {
        html += `<div class="alert alert-info" role="alert">` + element + 
        ``
        `</div>`;
        
        console.log(element);
    });
    studentDiv.innerHTML = html ;
});