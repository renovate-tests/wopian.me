<?php

$type = filter_var($_POST['command'], FILTER_SANITIZE_STRING);
$username = ucfirst(filter_var($_POST['user_name'], FILTER_SANITIZE_STRING));
  if ($type == '/wop') {
  	#if ($username != 'Wopian') {
  		function array_delete($array, $element) {
    		return array_diff($array, [$element]);
		}
		$users = array("Wopian", "Doramu", "Kusoneko", "Lewd", "Neelon", "Naru", "Cronhound");
		if(($key = array_search($username, $users)) !== false) {
    		unset($users[$key]);
		}
		shuffle($users);
  		$users_rnd = $users[rand(0,5)];

  		$choice = array("as they were imploded by $users_rnd",
  						"while they were imploded by $users_rnd",
  						"before they were imploded by $users_rnd",
  						"as they fell into a bottomless chasm",
  						"before they fell into a bottomless chasm",
  						"while they fell into a bottomless chasm",
  						"while their mind was consumed by flames",
  						"while bleeding to death from an alien plant",
  						"after being bitten by giant rats",
  						"after being entombed within molten glass",
  						"while drowning in the deep blue sea",
  						"to escape this bizarre nightmare",
  						"before being eaten alive by $users_rnd",
  						"before being thrown into grinding gears and machinery",
  						"after being thrown into grinding gears and machinery",
  						"while being thrown into grinding gears and machinery",
  						"while having their brain removed"
  		);
  		$payload = "$username attempted to do the wop ".$choice[rand(0,16)].".";
  	#} else {
    #	$payload = "$username did the wop.";
	#}
	$curl = curl_init();
	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'https://hooks.slack.com/services/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',
	  CURLOPT_RETURNTRANSFER => 1,
	  CURLOPT_POST => 1,
	  CURLOPT_POSTFIELDS => array('payload' => '{"text": "'.$payload.'"}')
	));
	curl_exec($curl);
	curl_close($curl);
  }
?>
