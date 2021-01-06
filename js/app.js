const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navBar = document.querySelector(".sidebar-nav");
  burger.addEventListener("click", evt => {
    navBar.classList.toggle("sidebar-active");
    burger.classList.toggle("burger-active");
  });
};

navSlide();

//image gallery
const imageGallery = () => {
  const mainImg = document.querySelector(".current-img");
  const subImg = document.querySelectorAll(".sub-img");
  const currentSub = document.querySelector(".current-sub-img");
  subImg.forEach(x => {
    x.addEventListener("click", evt => {
      if (!evt.target.classList.contains("current-sub-img")) {
        mainImg.src = evt.target.src;
        subImg.forEach(preview => {
          preview.classList.remove("current-sub-img");
          console.log(preview.classList);
        });
        evt.target.parentElement.classList.add("current-sub-img");
      } else {
        return;
      }
    });
  });
};

imageGallery();
