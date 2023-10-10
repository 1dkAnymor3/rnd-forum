var navShowCount = 0;
var delayInProgress = false;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function showNav()
{
    if (!delayInProgress)
    {
        var nav = document.getElementById("list-of-nav");
        if (navShowCount % 2 == 0)
        {
            let navLeftPos = nav.offsetLeft;
            nav.style.left = (navLeftPos + 300) + 'px';
        }
        else
        {
            let navLeftPos = nav.offsetLeft;
            nav.style.left = (navLeftPos - 300) + 'px';
        }
        navShowCount++;
        delayInProgress = true;
        await delay(500);
        delayInProgress = false
    }
}

var page = document.getElementById("page");