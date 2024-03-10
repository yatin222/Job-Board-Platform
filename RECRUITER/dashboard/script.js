let btn=document.getElementById("btn");
let btn2=document.getElementById("btn2");
// btn.addEventListener('click',function(){
//     let faltu=document.getElementById("faltu");
//     faltu.setAttribute("style","display:none;"); 
//     let papa=document.getElementById("papa");
//     let dandi=document.createElement("hr");
//     let listbox=document.createElement("div");
//     listbox.setAttribute("style","width:100%; height:50px; display:flex; justify-content:space-between;")
//     papa.appendChild(listbox);
//     papa.appendChild(dandi);
// })

// btn2.addEventListener('click',function(){
//     let faltu=document.getElementById("faltu");
//     // faltu.setAttribute("style","display:none;"); 
//     let papa=document.getElementById("papa");
//     let dandi=document.createElement("hr");
//     let listbox=document.createElement("div");
//     listbox.setAttribute("style","width:100%; height:50px; display:flex; justify-content:space-between;")
//     papa.appendChild(listbox);
//     papa.appendChild(dandi);
// })


btn.addEventListener('click',function(){
    let form =document.getElementById("form");
    form.setAttribute("style","display:flex;")
})
btn2.addEventListener('click',function(){
    let form =document.getElementById("form");
    form.setAttribute("style","display:flex;")
})


let submit=document.getElementById("submit");
submit.addEventListener('click',function(){
    let faltu=document.getElementById("faltu");
    faltu.setAttribute("style","display:none;");



    let date=document.getElementById("date").value;
    let designation=document.getElementById("designation").value;
    let experience=document.getElementById("experience").value;
    let company=document.getElementById("company").value;
    let location=document.getElementById("location").value;
    let status=document.getElementById("status").value;

        let papa=document.getElementById("papa");
        let dandi=document.createElement("hr");
        let listbox=document.createElement("div");





        let datediv=document.createElement("div");
        datediv.innerHTML=date;
        let designationdiv=document.createElement("div");
        designationdiv.innerHTML=designation;
        let experiencediv=document.createElement("div");
        experiencediv.innerHTML=experience;
        let companydiv=document.createElement("div");
        companydiv.innerHTML=company;
        let locationdiv=document.createElement("div");
        locationdiv.innerHTML=location;
        let statusdiv=document.createElement("div");
        statusdiv.innerHTML=status;




        let views=document.createElement("div");
        views.innerHTML=20;
        let applied=document.createElement("div");
        applied.innerHTML=5;
        let pencil=document.createElement("div");
        pencil.innerHTML="edit";




        listbox.appendChild(datediv);
        listbox.appendChild(designationdiv);
        listbox.appendChild(experiencediv)
        listbox.appendChild(companydiv);
        listbox.appendChild(locationdiv);
        listbox.appendChild(views);
        listbox.appendChild(applied);
        listbox.appendChild(statusdiv);
        listbox.appendChild(pencil);

        listbox.setAttribute("style","width:100%; height:50px; display:grid; justify-content:space-evenly; align-items:center; font-size:15px; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; padding-left:8em; padding-right:1em; box-sizing:border-box")
        papa.appendChild(listbox);
        papa.appendChild(dandi);

        let koikaamne=document.getElementById("form");
        koikaamne.setAttribute("style","display:none");


})

let flag=1;
function dropdownmenu(){
    let ele=document.getElementById("hide");
    if(flag==1){
        ele.setAttribute("style","display:flex");
        flag=0
    }
    else{
        ele.setAttribute("style","display:none");
        flag=1;
    }



    
}