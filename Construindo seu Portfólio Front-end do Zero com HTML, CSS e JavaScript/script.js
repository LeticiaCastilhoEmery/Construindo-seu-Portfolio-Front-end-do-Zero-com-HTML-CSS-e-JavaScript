const theme = document.getElementById("theme");
const rootHtml = document.documentElement

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme === "light") rootHtml.setAttribute("data-theme", "dark")
   else rootHtml.setAttribute("data-theme", "light")

    theme.classList.toggle("bi-moon-stars")
    theme.classList.toggle("bi-sun")
}

theme.addEventListener("click", changeTheme);