// =======================
// THEME SYSTEM
// =======================


const themeBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");



if(savedTheme === "light"){

    document.body.classList.add("light");

}




if(themeBtn){


themeBtn.onclick = ()=>{


document.body.classList.toggle("light");



if(document.body.classList.contains("light")){


    localStorage.setItem("theme","light");

    themeBtn.innerHTML="🌙";


}else{


    localStorage.setItem("theme","dark");

    themeBtn.innerHTML="☀️";


}



};


}









// =======================
// LANGUAGE SYSTEM
// =======================


const langBtn = document.getElementById("language-toggle");





function setLanguage(){



let lang = localStorage.getItem("lang") || "en";





// تغيير النصوص

document.querySelectorAll("[data-en]").forEach(item=>{


    if(lang === "ar"){


        item.innerHTML = item.getAttribute("data-ar");


    }else{


        item.innerHTML = item.getAttribute("data-en");


    }



});








// تغيير أماكن الكتابة داخل الحقول

document.querySelectorAll("[data-en-placeholder]").forEach(item=>{


    if(lang === "ar"){


        item.placeholder = item.getAttribute("data-ar-placeholder");


    }else{


        item.placeholder = item.getAttribute("data-en-placeholder");


    }


});









// تغيير اتجاه الصفحة

if(lang === "ar"){


    document.body.dir = "rtl";

    document.documentElement.lang = "ar";



}else{


    document.body.dir = "ltr";

    document.documentElement.lang = "en";


}








// تغيير اسم زر اللغة

if(langBtn){


    if(lang === "ar"){

        langBtn.innerHTML="EN";

    }else{

        langBtn.innerHTML="AR";

    }


}




}









// تشغيل اللغة عند فتح الموقع

setLanguage();









// زر تغيير اللغة


if(langBtn){



langBtn.onclick = ()=>{


let currentLang = localStorage.getItem("lang") || "en";



if(currentLang === "en"){


    localStorage.setItem("lang","ar");


}else{


    localStorage.setItem("lang","en");


}



setLanguage();



};



}