const movertxt = document.querySelectorAll(".mover>span");
const movertxt2 = document.querySelectorAll(".mover2>span");
let flag = 0;
let flag2 = 0;
window.addEventListener("scroll", (e) => {
    if (flag <= 0) {
        flag -= 5;
    }

    if(flag==-1000){
        flag=0
    }


    movertxt.forEach((val) => {
        txt(val);
    });

    // *****************************************
    if(flag<0){
        flag2 += 5;
    }
    if(flag2==1000){
        flag2=0
    }
    movertxt2.forEach((val)=>{
        txt2(val);
    })

});


const txt = (v) => {
    v.style.transform = `translateX(${flag}px)`;
};

// *************************************************************

const txt2 = (v) => {
    v.style.transform = `translateX(${flag2}px)`;
};