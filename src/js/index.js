var navShowCount = 0;
var speed = 10;

function showNav()
{
    var nav = document.getElementById("list-of-nav");
    if (navShowCount % 2 == 0)
    {
        nav.style.left = "-300px";
        let navLeftPos = nav.offsetLeft;
        nav.style.left = (navLeftPos + 300) + 'px';
    }
    else
    {
        nav.style.left = "0px";
        let navLeftPos = nav.offsetLeft;
        nav.style.left = (navLeftPos - 300) + 'px';
    }
    navShowCount++;
}

var page = document.getElementById("page");