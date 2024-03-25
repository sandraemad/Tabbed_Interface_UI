
console.log("hello");
// const tabs=document.querySelectorAll('.tab_btn');
// const all_content=document.querySelectorAll('.content');
// tabs.forEach((tab,index)=>{
//     tab.addEventListener('click',(e)=>{
//        tabs.forEach(tab=>{tab.classList.remove('active')});
//         tab.classList.add('active');
//         var line =document.querySelector('.line');
//         line.style.width=e.target.offsetWidth+"px";
//         line.style.left=e.target.offsetWidth+"px";
//         all_content.forEach(content=>{
//             content.classList.remove('active');
//         })
//         all_content[index].classList.add('active');
//      });
    
   
// });

var tab_link=document.getElementsByClassName("tab_btn");
var tab_contant=document.getElementsByClassName("content");

function opentab(tabname){
    for(tab of tab_link){
        tab.classList.remove("active");
    }
    for(tabs of tab_contant){
        tabs.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}
