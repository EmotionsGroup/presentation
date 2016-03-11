<?php
	
	$name = htmlspecialchars($_POST["Имя"]);
	$email = htmlspecialchars($_POST["E-mail"]);
	$mobile = htmlspecialchars($_POST["Телефон"]);

	$to = "gornoesolnce@inbox.ru";
	$subject = "Заказ машины";

	$message = "Горное солнцею.\n
		Имя: $name
		E-mail: $email
		Телефон: $mobile";

	$form = "From: $name <$email> \r\n Reply-To: $email \r\n";
	mail($to, $subject, $message, $form); 

?>