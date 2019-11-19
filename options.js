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
        var img_src = "/images/students/" + element + ".JPG";
        console.log(ImageExist(img_src));
        if(ImageExist(img_src)){
            html += 
            `<div class="card pm-3" style="width: 18rem">`+
                `<img src="`+ img_src +`" alt="" class="card-img-top" style="max-width:100%;">`+
                `<div class="card-body">` +
                `<h5 class="card-title">` + element +`</h5>`+
                `</div>`+
            `</div>`;
        }else{
            html += 
            `<div class="card" style="width: 18rem">`+
                `<img src="/images/students/none.jpg" alt="" class="card-img-top mb-3" style="max-width:100%;">`+
                `<div class="card-body">` +
                `<h5 class="card-title">` + element +`</h5>`+
                `</div>`+
            `</div>`;
        }
        
        
        console.log(element);
    });
    studentDiv.innerHTML = html ;
});

function ImageExist(url) 
{
   var img = new Image();
   img.src = url;
   return img.height != 0;
}
