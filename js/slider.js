let currentSlide = 1;
let autoRotateInterval;

function startAutoRotate() {
  autoRotateInterval = setInterval(() => {
    changeSlide("next");
  }, 15000); // ყოველ 15 წამში როტაცია
}

function stopAutoRotate() {
  clearInterval(autoRotateInterval);
}

function changeSlide(direction) {
  const partnersContainer = document.getElementById("partnersContainer");
  const paginationContainer = document.getElementById("pagination");

  // როტაციის გაჩერება როცა მომხმარებელი დააჭერს ისრებს
  stopAutoRotate();

  let targetSlide;
  if (direction === "next") {
    targetSlide = currentSlide + 1;
  } else if (direction === "prev") {
    targetSlide = currentSlide - 1;
  } else {
    targetSlide = direction;
  }

  if (targetSlide > totalSlides) {
    targetSlide = 1; // პირველ სლაიდზე დაბრუნება
  } else if (targetSlide < 1) {
    targetSlide = totalSlides; // ბოლო სლაიდზე გადასვლა
  }

  // კონტეინერის გაუჩინარება
  fadeOut(partnersContainer);

  // ახალი პარტნიორების გამოჩენა
  setTimeout(() => {
    updateContent(targetSlide, partnersContainer);
    fadeIn(partnersContainer);
  }, 500);

  updatePagination(targetSlide, paginationContainer);

  // სლაიდის შეცვლა
  currentSlide = targetSlide;

  // აუტო როტაციის განახლება
  startAutoRotate();
}

function updateContent(index, targetElement) {
  targetElement.innerHTML = "";

  // პარტნიორების დამატება სლაიდისთვის
  slides[index - 1].forEach((partner) => {
    const partnerElement = document.createElement("div");
    partnerElement.classList.add("partner");

    partnerElement.innerHTML = `
      <img src="${partner.image}" alt="${partner.name}" />
    `;
    targetElement.appendChild(partnerElement);
  });
}

function fadeIn(element) {
  element.classList.remove("fade-out");
  element.classList.add("fade-in");
}

function fadeOut(element) {
  element.classList.remove("fade-in");
  element.classList.add("fade-out");
}

function updatePagination(currentIndex, targetElement) {
  targetElement.innerHTML = "";

  for (let i = 1; i <= totalSlides; i++) {
    const paginationDot = document.createElement("span");
    paginationDot.classList.add("pagination-dot");

    if (i === currentIndex) {
      paginationDot.classList.add("active");
    }

    paginationDot.onclick = () => {
      changeSlide(i);
      updatePagination(i, document.getElementById("pagination"));
    };

    targetElement.appendChild(paginationDot);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateContent(currentSlide, document.getElementById("partnersContainer"));
  updatePagination(currentSlide, document.getElementById("pagination"));

  setTimeout(() => {
    startAutoRotate();
  }, 5000); //
});
