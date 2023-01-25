<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $name = $params->name;
        $email = $params->email;
        $phone = $params->phone;
        $message = $params->message;;

        $to = "master@thurmontpaving.com";
        $subject = "New Paving Message - $name";

        // compose headers
        $headers = "From: master@thurmontpaving.com\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/".phpversion();

        // compose message
        $body = "Name: $name \n";
        $body .= "Email: $email \n";
        $body .= "Phone: $phone \n\n";
        $body .= "$message";
        $body = wordwrap($body, 70);

        // send email
        $success = mail($to, $subject, $body, $headers);
        if (!$success) {
          $errorMessage = error_get_last()['message'];
        }

        break;
    default: //Reject any non POST or OPTIONS requests.
        print "Rejected";
        header("Allow: POST", true, 405);
        exit;
}

?>
