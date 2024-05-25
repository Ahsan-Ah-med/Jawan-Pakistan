{
const selectContainer = document.querySelector("#main_dropDown1");
const formDropBoxDropDown1 = document.querySelector(".formDropBoxDropDown1");
const custom_main_dropdown1 = document.querySelector(".custom_main_dropdown1");
const custom_popup_dropdown1 = document.querySelectorAll(".custom_popup_dropdown1 p");

custom_popup_dropdown1.forEach((e) => {
    selectContainer.innerHTML += `
    <option value="${e.innerText}">${e.innerText}</option>
    `
})

formDropBoxDropDown1.querySelectorAll("p").forEach((p) => {
    p.addEventListener('click', function () {
        custom_main_dropdown1.querySelector('h2 p').innerText = this.innerText
        selectContainer.value = this.innerText;
    })
})

const selectContainer2 = document.querySelector("#main_dropDown2");
const formDropBoxDropDown2 = document.querySelector(".formDropBoxDropDown2");
const custom_main_dropdown2 = document.querySelector(".custom_main_dropdown2");
const custom_popup_dropdown2 = document.querySelectorAll(".custom_popup_dropdown2 p");

custom_popup_dropdown2.forEach((e) => {
    selectContainer2.innerHTML += `
    <option value="${e.innerText}">${e.innerText}</option>
    `
})

formDropBoxDropDown2.querySelectorAll("p").forEach((p) => {
    p.addEventListener('click', function () {
        custom_main_dropdown2.querySelector('h2 p').innerText = this.innerText
        selectContainer2.value = this.innerText;
    })
})

}
// window.addEventListener('DOMContentLoaded', (event) => {
    if(window.location.href.includes('contact_posted=true')){
      window.location.href = "/pages/form-submitted-successfully"
    }
// });