
window.onload = function () {
  main();
};

function main()
{
    var lookup = document.getElementById("lookup");
    lookup.addEventListener("click",function(){getcountry('world.php?')});
}

function getcountry(url)
{
    var httpRequest = new XMLHttpRequest();
    var country = document.getElementById("country").value; 
    var newurl = "";
    
    if (document.getElementById('Allcountries').checked){
        newurl = url + "all=true";
    } else {
        newurl = url + "country=" + country;
    }

    
    httpRequest.onreadystatechange = function()
    {
        if (httpRequest.readyState == XMLHttpRequest.DONE) 
        {
            if(httpRequest.status == 200)
            { 
                document.getElementById("result").innerHTML= httpRequest.responseText;
                alert(httpRequest.responseText);
            }
            else
            {
                alert("There is an error");
            }
        }
    };
    
    httpRequest.open('GET',newurl,true);
    httpRequest.send();
}