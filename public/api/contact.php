<?php

function isEmail($email){

    return filter_var($email, FILTER_VALIDATE_EMAIL);

}

if ($_POST) {
    
    // Enter the email where you want to receive the message
    $emailTo = 'lcruztaveras@gmail.com';
    
    $name        = addslashes(trim($_POST['name']));
    $clientEmail = addslashes(trim($_POST['email']));
    $message     = addslashes(trim($_POST['message']));
    
    $array = array(
        'nameMessage' => '',
        'emailMessage' => '',
        'messageMessage' => ''
    );
    
    
    
    if ($name == '') {
        $array['nameMessage'] = 'Empty name!';
    }
    if (!isEmail($clientEmail)) {
        $array['emailMessage'] = 'Invalid email!';
    }
    if ($message == '') {
        $array['messageMessage'] = 'Empty message!';
    }
    if ($name != '' && isEmail($clientEmail) && $message != '') {
        
        $email_message = "Info sent from contact form lisbelcruz.com:\n\n";

        function clean_string($string) {
            $bad = array("content-type","bcc:","to:","cc:","href");
            return str_replace($bad,"",$string);
        }

        $email_message .= "Name: ".clean_string($name)."\n";
        $email_message .= "Email: ".clean_string($clientEmail)."\n";
        $email_message .= "Message: ".clean_string($message)."\n";

        $headers .= "Reply-To: " . $clientEmail . "\r\n"; 
        $headers .= "Return-Path: Return To <". $clientEmail . ">" . "\r\n"; 
        $headers .= "From: " . $clientEmail . " <" . $clientEmail . ">" . "\r\n" ; 
        $headers .= "Organization: Lisbelcruz.com\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
        $headers .= "X-Priority: 3\r\n";
        $headers .= "X-Mailer: PHP". phpversion() . "\r\n";

        mail($emailTo, "Lisbelcruz.com: Contact Form", $email_message, $headers, "-f lcruztaveras@gmail.com");

    }
    
    echo json_encode($array); 
    
}

?>