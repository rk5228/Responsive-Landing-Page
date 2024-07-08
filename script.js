// Add Event Listeners
document.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Add Hover Effect
const navItems = document.querySelectorAll(".nav li");
navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.querySelector("a").style.color = "#666";
  });
  item.addEventListener("mouseout", () => {
    item.querySelector("a").style.color = "#fff";
  });
});
