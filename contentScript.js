var tbody = document.getElementsByTagName("tbody")[1];
var student_array = [];
var student_obj = {};
for (let index = 2; index < tbody.childElementCount - 1; index++) {
    console.log(tbody.children[index].children[1].textContent);
    student_array.push(tbody.children[index].children[1].textContent);
}
student_obj["students"] = student_array// 記錄學生姓名
chrome.storage.sync.set(student_obj, function () {
    console.log("setting is finish");
});

console.log('storage already to execute');

chrome.runtime.sendMessage("openOptionPage");
