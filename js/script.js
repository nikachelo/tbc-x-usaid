/*------Faq JS------*/

document.addEventListener("DOMContentLoaded", function () {
  //ყველა კითხვა

  const questions = document.querySelectorAll(".question");

  //კითხვებზე ივენთის დამატება
  questions.forEach((question) => {
    question.addEventListener("click", function () {
      questions.forEach((q) => {
        if (q !== question) {
          q.classList.remove("active");
          const answer = q.nextElementSibling;
          if (answer) {
            answer.classList.remove("active");
            answer.style.transition = "none";
            setTimeout(() => {
              answer.style.transition = "max-height 0.2s ease-in-out";
            }, 10);
          }

          // Arrow რესეტი
          const otherArrow = q.querySelector(".arrow-down svg");
          if (otherArrow) {
            otherArrow.classList.remove("arrow-rotate");
          }
        }
      });
      //აქტიური კითხვა
      this.classList.toggle("active");
      const answer = this.nextElementSibling;
      const arrow = this.querySelector(".arrow-down svg");
      if (answer) {
        answer.classList.toggle("active", this.classList.contains("active"));
        arrow.classList.toggle(
          "arrow-rotate",
          this.classList.contains("active")
        );
      }
    });
  });

  /*------Menu JS------*/

  const menuIcon = document.getElementById("menuIcon");
  const navList = document.getElementById("navList");
  const body = document.body;

  //მენიუს დახურვის ფუნქციონალი
  function closeMenu() {
    navList.classList.remove("show");
    body.classList.remove("no-scroll");
    menuIcon.classList.remove("open");
  }

  //კლიკის ივენთი
  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("open");
    navList.classList.toggle("show");
    body.classList.toggle("no-scroll");
  });

  document.addEventListener("click", function (event) {
    const isClickInsideMenu = navList.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuIcon) {
      closeMenu();
    }
  });
});
