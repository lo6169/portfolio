function menuFunction()
{
    var x = document.getElementById("menu");
    var y = document.getElementById("ham1");
    var z = document.getElementById("ham2");
    var a = document.getElementById("ham3");

    if (x.style.display === "block")
    {
        x.style.display = "none";
        y.style.backgroundColor = "black";
        z.style.backgroundColor = "black";
        a.style.backgroundColor = "black";
    }
    else
    {
        x.style.display = "block";
        y.style.backgroundColor = "gray";
        z.style.backgroundColor = "gray";
        a.style.backgroundColor = "gray";
    }
}


