  let changeColor = document.getElementById('changeColor');
  let checkList = document.getElementById('checkList');
  let clearStorge = document.getElementById('clearStorge');

  chrome.storage.sync.get('color', function (data) {
      changeColor.style.backgroundColor = data.color;
      changeColor.setAttribute('value', data.color);
  });

  changeColor.onclick = function (element) {

      let color = element.target.value;
      chrome.tabs.query({
          active: true,
          currentWindow: true
      }, function (tabs) {
          chrome.tabs.executeScript(
              tabs[0].id, {
                  code: 'document.body.style.backgroundColor = "' + color + '";'
              });
      });
  };

  checkList.onclick = function () {

      chrome.tabs.query({
          active: true,
          currentWindow: true
      }, function (tabs) {
          chrome.tabs.executeScript({
              file: 'contentScript.js'
          });
      });
  };

  clearStorge.onclick = function () {

      chrome.tabs.query({
          active: true,
          currentWindow: true
      }, function (tabs) {
          chrome.tabs.executeScript(
              chrome.storage.sync.clear()
          );
      });
  };