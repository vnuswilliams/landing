const cookieAccept = document.querySelector(".cookie-accept");
const card__cookie = document.querySelector(".card__cookie");

cookieAccept.addEventListener("click", () => {
  card__cookie.classList.add('d-none')
  document.cookie = `consent=consent; SameSite=Lax ;path=/; max-age=31622400`;
});
