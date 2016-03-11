<?php
	
	$question = htmlspecialchars($_POST["Вопрос"]);
	$email = htmlspecialchars($_POST["Почта"]);
	$mobile = htmlspecialchars($_POST["Телефон"]);

	$to = "gornoesolnce@inbox.ru";
	$subject = "Новая заявка";

	$message = "Горное солнцею.\n
		Вопрос: $name
		E-mail: $email
		Телефон: $mobile";

	$form = "From: $name <$email> \r\n Reply-To: $email \r\n";
	mail($to, $subject, $message, $form); 

?>