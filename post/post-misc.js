import allPost from './post.json' assert { type: 'json' };
import { Octokit, App } from "https://esm.sh/octokit";

function gup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}

async function post()
{
    const octokit = new Octokit({ });
    let id = "0";
    while (allPost[id] != null) id = Math.random(1,100000000000000).toString();
    const name = document.getElementById("name").value;
    const content = document.getElementById("content").value;
}

function loadPost()
{
    const id = gup("id");
    const titleElement = document.getElementById("postTitle");
    const contentElement = document.getElementById("postContent");
    const dateElement = document.getElementById("postDate");
    const postData = allPost[id.toString()];
    titleElement.innerHTML = postData["name"];
    contentElement.innerHTML = postData["content"];
    dateElement.innerHTML = postData["date"];
}