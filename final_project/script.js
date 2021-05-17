function FindPosition(oElement)
{
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
}

function ShowAllLabels()
{
    const urlParams = new URLSearchParams(window.location.search);
    var xmlhttp = new XMLHttpRequest();
    var url = "labels_db.php";
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            showLabels(myArr);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function showLabels(arr) {
      for (const label of arr) {
        console.log(label);
        
        var element = document.createElement("div");
        var paragraph = document.createElement("p");
        
        paragraph.innerHTML = label["text"];
        
        element.appendChild(paragraph);
        element.className = "text-block";
        
        document.getElementById("container").appendChild(element);
        var ImgPos = FindPosition(myImg);

        element.style.left = parseInt(label["x"]) + parseInt(ImgPos[0]);
        element.style.top = parseInt(label["y"])  + parseInt(ImgPos[1]);
      }
    }
}

function GetCoordinates(e)
{
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(myImg);
  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
    document.getElementById("text").style.left = PosX;
    document.getElementById("text").style.top = PosY;
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  document.getElementById("X").value = PosX;
  document.getElementById("Y").value = PosY;
  document.querySelector("#text p").innerHTML = document.getElementById("label").value;

}
