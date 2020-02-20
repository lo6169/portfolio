<?php
    if(isset($_POST["submit"]))
    {
        // Checking For Blank Fields..
        if($_POST["vname"]==""||$_POST["vemail"]==""||$_POST["sub"]==""||$_POST["msg"]=="")
        {
            echo "Please fill out all fields";
        }
        else
        {
            // Check if the "Sender's Email" input field is filled out
            $email = $_POST['vemail'];

            // Sanitize E-mail Address
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);

            // Validate E-mail Address
            $email = filter_var($email, FILTER_VALIDATE_EMAIL);
            if (!$email)
            {
                echo "Please enter a valid email.";
            }
            else
            {
                $subject = $_POST['sub'];
                $message = $_POST['msg'];
                $headers = 'From:'. $email . "rn";
                $headers .= 'Cc:'. $email . "rn";

                $message = wordwrap($message, 70);

                mail("lolsonform@gmail.com", $subject, $message, $headers);
                echo "Your email was successfully sent, thank you!";
            }
        }
    }
?>