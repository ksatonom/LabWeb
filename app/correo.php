<?php


	$to      = 'ksamadrid_ch@hotmail.com';
	$name = $_POST["Nombre"];
	$tel = $_POST["Telefono"];
	$mail = $_POST["Email"];
	$subject = $_POST["Asunto"];
	$message = $_POST["Mensaje"];

	$headers = 'From: contacto@tupcb.com' . "\r\n" .
	  'Reply-To: '. $mail . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	 $a="Nombre: ".$name . "\n"."Asunto: " . $subject . "\n"."Telefono: " . $tel . "\n"."Email: " . $mail . "\n"."Mensaje: " . $message;
	if( mail($to, "Mensaje de tupcb",$a, $headers) ){

header("Location: index.html");
}else
{ 
die("Error: Su información no pudo ser enviada");
} 
exit(); 

?>

