const imgPrincipal = document.getElementById("imgPrincipal");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // destaque
    thumbs.forEach(t => t.classList.remove("ativo"));
    thumb.classList.add("ativo");

    // fade suave
    imgPrincipal.style.opacity = "0";

    setTimeout(() => {
      imgPrincipal.src = thumb.src;
      imgPrincipal.style.opacity = "1";
    }, 150);
  });
});