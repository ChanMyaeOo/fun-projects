document.querySelector(".recipe__love").addEventListener("click", e => {
  let iconString = "icon-heart";
  document
    .querySelector(".recipe__love use")
    .setAttribute("href", `img/icons.svg#${iconString}`);
});
