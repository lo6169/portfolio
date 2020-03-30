<?php
    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $ata = htmlspecialchars($data);

        return $data;
    }

    $vname  = $_POST['vname'];
    $vemail = $_POST['vemail'];
    $sub = $_POST['sub'];
    $comment = $_POST['comment'];

    $vname2 = test_input($vname);
    $vemail2 = test_input($vemail);
    $sub2 = test_input($sub);
    $comment2 = test_input($comment);

    $destination_email = "lolsonform@gmail.com";

    $email_body = "$vemail2  -> $comment2";

    mail($destination_email, $sub2, $email_body);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-158851759-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-158851759-1');
    </script>

    <meta charset="UTF-8">
    <title>Contact Me</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <nav id="page-nav">
        <label for="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger"/>

        <ul>
            <li><a href="index.html">Home</a></li>
        </ul>
    </nav>


    <div class="head">
        Thank you for your submission!
    </div>

    <div class="footer">
        © Lindsey Olson - 2020 <br/> <br/>
        Connect with me: <br/>
        <a href="https://www.github.com/lo6169" target="_blank">
            <img src="assets/media/githublogo.png" class="contactme" alt="GitHub logo">
        </a>
        <a href= "https://www.linkedin.com/in/l-olson" target="_blank">
            <img src="assets/media/linkedinlogo.png" class="contactme" alt="LinkedIn logo">
        </a>
    </div>
</body>
</html>