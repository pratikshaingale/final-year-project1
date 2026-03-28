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