var navShowCount = 0;
var speed = 10;

function showNav()
{
    var nav = document.getElementById("list-of-nav");
    if (navShowCount % 2 == 0)
    {
        nav.style.left = "-300px";
        nav.style.display = "inline";
        let navLeftPos = nav.offsetLeft;
        nav.style.left = (navLeftPos + 300) + 'px';
    }
    else
    {
        nav.style.left = "0px"; //problem here?
        let navLeftPos = nav.offsetLeft;
        nav.style.left = (navLeftPos - 150) + 'px';
        nav.style.display = "none";
    }
    navShowCount++;
}