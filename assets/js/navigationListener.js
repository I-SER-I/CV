window.onload = function() {
    let links = document.getElementsByClassName("nav__link");
    for (let i = 0; i < links.length; i++)
    {
        if (links[i].href === window.location.href)
        {
            links[i].classList.add("nav___link__active");
        }
    }
}