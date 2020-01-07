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


function toggleFront()
{
    var front = document.getElementById("frontend");
    var design = document.getElementById("design");
    var back = document.getElementById("backend");

    var display = front.style.display;

    if (display == "block")
    {
        front.style.display = "none";
        design.style.display = "none";
        back.style.display = "none";
    }
    else
    {
        front.style.display = "block";
        design.style.display = "none";
        back.style.display = "none";
    }
}


function toggleDesign()
{
    var front = document.getElementById("frontend");
    var design = document.getElementById("design");
    var back = document.getElementById("backend");

    var display = design.style.display;

    if (display == "block")
    {
        front.style.display = "none";
        design.style.display = "none";
        back.style.display = "none";
    }
    else
    {
        front.style.display = "none";
        design.style.display = "block";
        back.style.display = "none";
    }
}

function toggleBack()
{
    var front = document.getElementById("frontend");
    var design = document.getElementById("design");
    var back = document.getElementById("backend");

    var display = back.style.display;

    if (display == "block")
    {
        front.style.display = "none";
        design.style.display = "none";
        back.style.display = "none";
    }
    else
    {
        front.style.display = "none";
        design.style.display = "none";
        back.style.display = "block";
    }
}