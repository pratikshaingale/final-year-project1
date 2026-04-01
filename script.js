let  swiper = new Swiper(".home-slider",{
      autoplay:{
        delay:3000,
        disableOnInteraction: false,
      },
      pagination:{
        el:".swiper-pagination",
        clickable:true,
      },
      loop:true,
});

const insVideo = document.querySelector(".ins_flex");
Array.from(insVideo.children).forEach((item) =>{
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden",true);
  insVideo.appendChild(duplicateNode);
});