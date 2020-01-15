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

window.onscroll = function()
{
    scrollFunction()
};

function scrollFunction()
{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        document.getElementById("page-nav").style.fontSize = "20px";
    }
    else
    {
        document.getElementById("page-nav").style.fontSize = "30px";
    }
}

function showletter(letter)
{
    let L = document.getElementById("L");
    let I = document.getElementById("I");
    let N = document.getElementById("N");
    let D = document.getElementById("D");
    let S = document.getElementById("S");
    let E = document.getElementById("E");
    let Y = document.getElementById("Y");
    let blank = document.getElementById("blank");

    L.style.display = "none";
    I.style.display = "none";
    N.style.display = "none";
    D.style.display = "none";
    S.style.display = "none";
    E.style.display = "none";
    Y.style.display = "none";
    blank.style.display = "none";

    if(letter == "L")
    {
        L.style.display = "block";
    }
    else if (letter == "I")
    {
        I.style.display = "block";
    }
    else if (letter == "N")
    {
        N.style.display = "block";
    }
    else if (letter == "D")
    {
        D.style.display = "block";
    }
    else if (letter == "S")
    {
        S.style.display = "block";
    }
    else if (letter == "E")
    {
        E.style.display = "block";
    }
    else if (letter == "Y")
    {
        Y.style.display = "block";
    }
    else
    {
        blank.style.display = "block";
    }
}

