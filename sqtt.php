<?php
#!/usr/bin/php
# http://p3.ua3ds.com/sqtt.php
# http://localhost/sqtt.php
# http://localhost/sqtt.php?users=regs&un=ok&em=site@s.com

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
    $_POST = json_decode(file_get_contents('php://input'), true);

$parsingF=Array();
$parsingF["the_lang"] = 'ua';

class MyDB extends SQLite3 {
 function __construct() {
  $this->open('beuss.db');
 }
}
$db = new MyDB();
$test = true;
if(!$db) {
 $test = false;
 echo 'no info';
}
$n = 0;
if ($test) {
 $sql = <<<EOF
 SELECT count(*) FROM sqlite_master
  WHERE type='table' AND name='user';
EOF;
 $ret = $db->query($sql);
 $sa=$ret->fetchArray(); 		   
 $db->close(); 	
 if (!$ret) {
  $st=$st.'1';
  $test = false;
    echo 'no info';
 } else if ($ret && $sa[0]== 0) {
  createDb();
 }
}

ParseForms ();
$db = new MyDB();

if (array_key_exists('name', $parsingF) && 
   array_key_exists('psw', $parsingF))
{
 $sql ="SELECT who,email"
." FROM user INDEXED BY uspawh_index WHERE username='"
.$parsingF["name"]."' AND password='".$parsingF["psw"]."'"; 
 $ret = $db->query($sql);
 if(!$ret) {
  echo 'no info';
 } else {
  $sa=$ret->fetchArray(); 		   
  $we = '';
  if ($sa!==false) {
    echo $sa['who'].'##'.$sa['email'];
  } else {
   echo 'no info';
  }
 }
 $db->close(); 	
} else if (array_key_exists('name', $parsingF) && array_key_exists('loggs', $parsingF) && $parsingF["name"]=='setemailss')
{
 $sql ="UPDATE user set email='".$parsingF["sname"].
 "' WHERE username LIKE '".$parsingF["loggs"]."'";
 $ret = $db->query($sql);
 #sendlett ('hallo@site.com','password <noreplay@ua3w.com>','not= '.$sql,'not upload= '.$sql);
 if(!$ret) {
  echo 'no update email';
 } else {
  echo 'update email ok';
 }
 $db->close(); 	
} else if (array_key_exists('name', $parsingF) && array_key_exists('loggs', $parsingF) && $parsingF["name"]=='getonemail')
{
  $sql ="SELECT password FROM user WHERE email LIKE '".$parsingF["loggs"]."'"; 
  $ret = $db->query($sql);
  if(!$ret) {
    echo 'no send';
  } else {
    $sa=$ret->fetchArray(); 
    echo 'send ok= '.$sa[0];
    if ($sa!==false) {
      $subj='Password ua3ds.com is: '.$sa[0];
      $mess="Hello from ua3ds.com"."\r\nPassword: ".$sa[0]."\r\nThanks for registration.";
      sendlett ($parsingF["loggs"],'Password <noreplay@p1.ua3ds.com>',$subj,$mess);
    }
  }
  $db->close(); 	
} else if (array_key_exists('users', $parsingF) && array_key_exists('un', $parsingF) && array_key_exists('em', $parsingF) && $parsingF["users"]=='regs')
{
 # $sql ="SELECT whon FROM user WHERE email LIKE '".$parsingF["em"]."'"; 
 $sql ="SELECT who FROM user WHERE username LIKE '".$parsingF["un"]."'"; 
 $ret = $db->query($sql);
 if(!$ret) {
  echo 'username problem';
 } else {
  $sa=$ret->fetchArray(); 
  if ($sa!==false) {
   echo 'user exists';
  } else {
   $sql ="SELECT who FROM user WHERE email LIKE '".$parsingF["em"]."'"; 
   $ret = $db->query($sql);
   if(!$ret) {
    echo 'email problem';
   } else {
    $se=$ret->fetchArray(); 
    if ($se!==false) {
     echo 'email exists';
    } else {
     $newp = 'p'.substr(md5(rand()), 0, 4);
     $em = $parsingF["em"];
     $un = $parsingF["un"];
     $sql =<<<EOF
      INSERT INTO user (password,username,email,who,date_reg)
      VALUES ('$newp','$un','$em',2,time());
EOF;
     $ret = $db->exec($sql);
     if($ret){
      $subj='Password ua3ds.com is: '.$newp;
      $mess="Hello from ua3ds.com\r\nUsername(Login): ".$parsingF["un"].
      "\r\nEmail: ".$parsingF["em"]."\r\nPassword: ".$newp.
      "\r\nThanks for registration.";
      sendlett ($parsingF["em"],'Password <noreplay@p1.ua3ds.com>',$subj,$mess);
      echo 'reg ok';
     } else {
     	echo 'add new user problem';
     }
     $db->close();
    }
   }
  }
 }
} else if (array_key_exists('texture', $parsingF))
{
	$dir    = '/dist/images';
	$fdir = $parsingF["texture"];
	# if($parsingF["texture"] === 'floo') {$fdir = 'floo';}
	$files = scandir(".$dir");
	$s = "";
	foreach($files as $value)
	{
		if($value === '.' || $value === '..') {continue;}
	  if(is_dir(".$dir/$value")) {
			$ffile = "$dir/$value/inside/$fdir";
			$fl = [];
			$fl = scandir(".$ffile");
			foreach($fl as $v)
			{
				if($v === '.' || $v === '..') {continue;}
				if(is_file(".$ffile/$v")) {
					if ($s !== '') $s.=',';
					$size = getimagesize (".$ffile/$v");
					$s.="$ffile;$v;".$size[3].";".(filesize( ".$ffile/$v" )/1000);
				}
			}
		}
	}
	echo $s;
} else if (array_key_exists('projfl', $parsingF))
{
	$dir    = './dist/xml';
	$files = scandir($dir);
	$s = "";
	foreach($files as $value)
	{
		if($value === '.' || $value === '..') {continue;}
		if(is_file("$dir/$value")) {
			if ($s !== '') $s.=',';
			$s.="$value";
		}
	}
	echo $s;
} else if (array_key_exists('feexi', $parsingF))
{
	$dir='./dist/xml/'.$parsingF["feexi"];
	if(is_file("$dir")) {
		echo 'y';
	} else {
		echo 'n';
	}
} else if (array_key_exists('fexml', $parsingF))
{
	$dir='./dist/xml/'.$parsingF["fexml"];	
	$fp = fopen($dir, 'w');
	fwrite($fp, $parsingF["ixmlw"]);
	fclose($fp);	
	echo 'ok';
} else {
 echo 'no info= '.time();
}
  
function ParseForms ()
{
 global $parsingF;
 if (count ($_POST)>0) {
  foreach($_POST as $index => $val) {
   $parsingF[$index]=$val;
  }
 } else if (count ($_GET)>0) {
  foreach($_GET as $index => $val) {
   $parsingF[$index]=$val;
  }
 }
}

function sendlett ($to,$from,$subj,$mess)
{

 $headers  = "MIME-Version: 1.0\r\n";
 $headers .= "Content-type: text/html; charset=utf-8\r\n";
 $headers .= "Content-Transfer-Encoding: 8bit\r\n";
 $headers .= "From: ".$from."\r\n";
 mail($to, $subj, $mess, $headers);
/*
date_default_timezone_set('Etc/UTC');
require './PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();


$mail->Host = 'smtp.gmail.com'; // Which SMTP server to use.
$mail->Port = 587; // Which port to use, 587 is the default port for TLS security.
$mail->SMTPSecure = 'tls'; // Which security method to use. TLS is most secure.
$mail->SMTPAuth = true; // Whether you need to login. This is almost always required.
$mail->Username = "admincomuart@gmail.com"; // Your Gmail address.
$mail->Password = "etet45"; // Your Gmail login password or App Specific Password.


$mail->setFrom('noreplay@gmail.com', 'Registration Password'); // Set the sender of the message.
$mail->addAddress($to, ' '); // Set the recipient of the message.
$mail->Subject = $subj; // The subject of the message.

//  Message Content - Choose simple text or HTML email

// Choose to send either a simple text email...
$mail->Body = $mess; // Set a plain text body.

// ... or send an email with HTML.
//$mail->msgHTML(file_get_contents('contents.html'));
// Optional when using HTML: Set an alternative plain text message for email clients who prefer that.
//$mail->AltBody = 'This is a plain-text message body'; 

// Optional: attach a file
// $mail->addAttachment('images/phpmailer_mini.png');

      #echo 'reg ok';
if ($mail->send()) {
    echo "reg ok";
} else {
    echo "add new user problem: " . $mail->ErrorInfo;
}
 */
}

function createDb ()
{
 $db = new MyDB();
 $test = true;
 $t = time();
 global $parsingF;
 $sql =<<<EOF
  CREATE TABLE IF NOT EXISTS user
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
	a_session	CHAR(32) default '',
	password CHAR(16) default '',
	username CHAR(200) default '',
	who INT default 0,
	email CHAR(100) default '',
	date_reg INT default 0);
EOF;
 $ret = $db->exec($sql);
 if(!$ret){
  $test = false;
  echo 'no info';
 }
 if ($test) {
  $sql =<<<EOF
   CREATE INDEX IF NOT EXISTS uspawh_index ON user(username,password);
EOF;
  $ret = $db->exec($sql);
  if(!$ret){
   echo 'no info';
  }
  $sql =<<<EOF
   CREATE INDEX IF NOT EXISTS useml_index ON user(email);
EOF;
  $ret = $db->exec($sql);
  if(!$ret){
   echo 'no info';
  }
  $sql =<<<EOF
   INSERT INTO user (password,username,email,who,date_reg)
    VALUES
    ('adm1','admin','slavi1@gmail.com',1,time() );
EOF;
  $ret = $db->exec($sql);
  if(!$ret){
   echo 'no info';
  }
  $sql =<<<EOF
   INSERT INTO user (password,username,email,who,date_reg)
    VALUES
    ('test','test','test1@gmail.com',5,time() );
EOF;
  $ret = $db->exec($sql);
  if(!$ret){
   echo 'no info';
  }
 }
 $db->close(); 	
}
?>