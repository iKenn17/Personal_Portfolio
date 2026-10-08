const links = document.querySelectorAll(".nav-link");

const activeClasses = ["border-teal-500", "text-teal-500"];
const inactiveClasses = ["border-transparent", "text-white"];

function setActive(activeLink) {
  links.forEach((link) => {
    link.classList.remove(...activeClasses);
    link.classList.add(...inactiveClasses);
  });
  activeLink.classList.remove(...inactiveClasses);
  activeLink.classList.add(...activeClasses);
}

links.forEach((link) => {
  link.addEventListener("click", () => setActive(link));
});