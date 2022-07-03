
let myHeading = document.querySelector('h1');
myHeading.onclick = setUserName;

setTitle()

function setUserName() {
    let myName = prompt('请输入你的名字。');
    console.log("myName:" + myName)
    if (!myName) {
        console.log("myName is not null")
    } else {
        console.log("myName is null")
    }
    localStorage.setItem('name', myName);
    setTitle()
}

function setTitle() {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}