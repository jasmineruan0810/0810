document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-btn");
const viewButtons = document.querySelectorAll(".view-project-btn");

viewButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault(); 
    const imageSrc = this.getAttribute("data-image"); 
    modalImg.src = imageSrc; 
    modal.style.display = "flex"; 
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
