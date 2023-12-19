let accordionitem = document.querySelectorAll(".accordionItem");

accordionitem.forEach(function(e){
    e.addEventListener("click",function(){
        const isitactive = e.classList.contains("active");
        accordionitem.forEach(function(e){
            e.classList.remove("active");
        })
        if(!isitactive){
        e.classList.toggle("active");
        }
    })
    });