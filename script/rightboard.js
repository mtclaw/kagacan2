var isCollapseCatelog = false;
var isCollapseLinkOut = false;
var isCollapseLinkIn = false;

function togglecatalog()
{
    var target = document.getElementById("ctlghead");
    var content = document.getElementById("categorywrapper");
    isCollapseCatelog = !isCollapseCatelog;
    if(isCollapseCatelog)
    {
        target.innerHTML ="▶ 目录 ◀";
        content.style.display="none";
    }else{
        target.innerHTML ="▼ 目录 ▼";
        content.style.display="block";
    }
}

function togglelnout()
{
    var target = document.getElementById("lnouth");
    var content = document.getElementById("lnoutwrapper");
    var liCount = content.querySelectorAll('li').length;
    isCollapseLinkOut = !isCollapseLinkOut;
    if(isCollapseLinkOut)
    {
        target.innerHTML ="▶ 出链 (" + liCount + ")◀";
        content.style.display="none";
    }else{
        target.innerHTML ="▼ 出链 (" + liCount + ")▼";
        content.style.display="block";
    }
}

function togglelnin()
{
    var target = document.getElementById("lninh");
    var content = document.getElementById("lninwrapper");
    var liCount = content.querySelectorAll('li').length;
    isCollapseLinkIn = !isCollapseLinkIn;
    if(isCollapseLinkIn)
    {
        target.innerHTML ="▶ 入链 (" + liCount + ")◀";
        content.style.display="none";
    }else{
        target.innerHTML ="▼ 入链 (" + liCount + ")▼";
        content.style.display="block";
    }
}