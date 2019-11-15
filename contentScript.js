
var tbody = document.getElementsByTagName("tbody")[1];
for (let index = 2; index < tbody.childElementCount-1; index++) {
  
  console.log(tbody.children[index].children[1].textContent);  
}
