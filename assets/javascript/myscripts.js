function toggleFront()
{
    let front = document.getElementById("frontend");
    let design = document.getElementById("design");
    let back = document.getElementById("backend");

    let display = front.style.display;

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
    let front = document.getElementById("frontend");
    let design = document.getElementById("design");
    let back = document.getElementById("backend");

    let display = design.style.display;

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
    let front = document.getElementById("frontend");
    let design = document.getElementById("design");
    let back = document.getElementById("backend");

    let display = back.style.display;

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