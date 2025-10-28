const body = document.body;
const nav = document.querySelector(".main-nav");

if (nav) {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    const a = e.target.closest("a");
    const theme = a.dataset.theme;

    switch (theme) {
      case "dark":
        body.classList.remove("light");
        body.classList.add("dark");
        break;
      case "light":
        body.classList.remove("dark");
        body.classList.add("light");
        break;
      default:
        body.classList.remove("dark", "light");
        break;
    }
  });
}
