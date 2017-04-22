<?PHP
	$adresat = '9789672@gmail.com'; 	// pod ten adres zostanie wysłana 							// wiadomosc
	@$email = $_POST['email'];
	@$content = $_POST['content'];
	$header = 	"From: $email \nContent-Type:".
			' text/plain;charset="iso-8859-2"'.
			"\nContent-Transfer-Encoding: 8bit";
	if (mail($adresat, 'List ze strony', $content, $header))
		header("Location: dziala.html"); 
	else 
		header("Location: nieDziala.html"); 
?>