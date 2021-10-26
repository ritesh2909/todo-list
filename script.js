//  creating a close button and appending it on each and every list item
var myNodeList = document.getElementsByTagName("LI");
var i;
for(i = 0;i<myNodeList.length;i++)
{
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// click on the close button to hide the current items from the list

var close = document.getElementsByClassName("close");
var i;
for(i = 0;i<close.length;i++)
{
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
    
}

var list = document.querySelector("ul");
list.addEventListener('click',function(ev) {
    if(ev.target.tagName === "LI")
    {
        ev.target.classList.toggle("checked");
    }
},false
);

function newElement()
{
    var li = document.createElement("LI");
    var txt = document.getElementById("myInput").value;
    var t = document.createTextNode(txt);
    li.appendChild(t);
    if(txt === "")
    {
        alert("Please Enter your task");
    }
    else{
        document.getElementById('myUl').appendChild(li);
    }

    document.getElementById('myInput').value = "";
    var myNodeList = document.getElementsByTagName("LI");
var i;
for(i = 0;i<myNodeList.length;i++)
{
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}


    var close = document.getElementsByClassName("close");
var i;
for(i = 0;i<close.length;i++)
{
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
    
}

}