let navList=document.querySelector(".navigation"),navToggle=document.querySelector(".navigation__toggle");navList.classList.remove("navigation--nojs"),navToggle.addEventListener("click",(function(){navList.classList.contains("navigation--closed")?(navList.classList.remove("navigation--closed"),navList.classList.add("navigation--opened")):(navList.classList.add("navigation--closed"),navList.classList.remove("navigation--opened"))}));