let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("boxi");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function automaticslide() {
    slideIndex++;
    showSlides();
    setTimeout(automaticslide, 2000);
}

showSlides();
automaticslide();




//night mode
let day=document.getElementById("day");
let night=document.getElementById("night");
let fl=false;
function mode(){
    let moon=document.getElementById("moon")
    let sun=document.getElementById("sun");
    if(fl==false){
        moon.setAttribute("style","z-index:-1; display:none;");
        sun.setAttribute("style","z-index:1; display:inline;");
        fl=true;
    }
    else{
        sun.setAttribute("style","z-index:-1; display:none;");
        moon.setAttribute("style","z-index:1; display:inline;");
        fl=false;
    }
    div=document.getElementById("lapy");
    div3=document.getElementById("reviews");
    div2=document.getElementById("india");
    foot=document.getElementById("foot");
    // div.setAttribute("style","background-color:rgb(44, 42, 42);color:white;");
    // div3.setAttribute("style","background-color:rgb(44, 42, 42);color:white;");
    // div2.setAttribute("style","background-color:black;color:white;");
    div.classList.toggle("darkmode-1")
    div3.classList.toggle("darkmode-1")
    div2.classList.toggle("darkmode-3")
    // foot.classList.toggle("darkmode-3");
    day.setAttribute("style","z-index:-2;");
    night.setAttribute("style","z-index:0;");
    let temp=day;
    day=night
    night=temp;



    let start=document.getElementById("getstarted");
    // start.setAttribute("style","background-color:#2755ed8e; color:white;")
    start.classList.toggle("darkmode-2");
    let circles=document.getElementsByClassName("circle");
    for(index=0;index<circles.length;index++){
        // circles[index].setAttribute("style","background-color:#2755ed8e; color:white;")
        circles[index].classList.toggle("darkmode-2");
    }
}

















let temp=30;
        let inner="SIGN UP";
        let button=document.getElementById("btn");
        let ele=document.getElementById("box");
        button.addEventListener('click',function(){
            console.log("hi");
            ele.style.transform = "translateX(" + temp + "vw)";
            button.style.transform="translateX(" + temp/20 + "vw)";
            button.innerHTML=inner;
            if(temp==30){
                temp=0;
                inner="LOG IN";
            }
            else{
                temp=30;
                inner="SIGN UP";
            }
        });
        button.addEventListener('click',function(){
            let parent=document.getElementById("box-parent");
            parent.parentElement.setAttribute("style","filter:blur(2px);");
            let elements=document.getElementsByTagName("input");
            let index=0;
            for(index=0;index<elements.length;index++){
                elements[index].setAttribute("disabled","disabled");
                elements[index].value='';
            }
            setTimeout( function(){
                for(index=0;index<elements.length;index++){
                    elements[index].removeAttribute("disabled","disabled");
                    console.log("wooohooo")
                }
                parent.parentElement.setAttribute("style","filter:blur(0px);");
            },800)
            
        })

        let eyeicon=document.getElementById("eye-icon");
        let pass=document.getElementById("passwords");
        eyeicon.onclick=function(){
            if(pass.type=="password"){
                pass.type="text";
                eyeicon.src="../main/eye-icons/eye.png";
            }
            else{
                pass.type="password";
                eyeicon.src="../main/eye-icons/hidden.png";
            }
        }



        let eyeicon2=document.getElementById("eye-icon2");
        let pass2=document.getElementById("passwords2");
        eyeicon2.onclick=function(){
            if(pass2.type=="password"){
                pass2.type="text";
                eyeicon2.src="../main/eye-icons/eye.png";
            }
            else{
                pass2.type="password";
                eyeicon2.src="../main/eye-icons/hidden.png";
            }
        }


        let eyeicon3=document.getElementById("eye-icon3");
        let pass3=document.getElementById("passwords3");
        eyeicon3.onclick=function(){
            if(pass3.type=="password"){
                pass3.type="text";
                eyeicon3.src="../main/eye-icons/eye.png";
            }
            else{
                pass3.type="password";
                eyeicon3.src="../main/eye-icons/hidden.png";
            }
        }


        let tempu=document.getElementById("transformer");
        let tempi=document.getElementById("box-parent");
        let check=1;
        let body=document.body;
        let click=document.getElementById('btn');
        tempu.addEventListener('click',function(){
            if(check==1){
                tempi.style.transform="translateX(-3vw) translateY(0vh)";
                let papa=document.getElementById("kyabodyhai");
                papa.parentElement.setAttribute("style","overflow:hidden")
                // document.querySelector('.above').setAttribute("style","filter:blur(5px)");
                // tempi.setAttribute("style","filter:blur(0.2px)")
                btn.setAttribute("style","display:block");
                check=0;
            }
            else{
                tempi.style.transform="translateX(40vw) translateY(-45vh) scale(0.01)";
                // btn.setAttribute("style","display:none");
                let papa=document.getElementById("kyabodyhai");
                papa.parentElement.setAttribute("style","overflow-y:scroll")
                check=1;
            }
        })
