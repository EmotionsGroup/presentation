<?php
	
	$mobile = htmlspecialchars($_POST["Телефон"]);

	$to = "gornoesolnce@inbox.ru";
	$subject = "Заказ звонка";

	$message = "Горное солнцею.\n
		Телефон: $mobile";

	$form = "From: $name <$email> \r\n Reply-To: $email \r\n";
	mail($to, $subject, $message, $form); 

?>