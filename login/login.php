<html>
<head>
<link rel="stylesheet" type="text/css" href="style1.css"/>
</head>
<body>
<?php
require_once('../connection/index.php');
$displayForm=True;
if(isset($_POST['login']))
{
$uname=$_POST['uname'];
$pass=$_POST['pass'];
if(!empty($uname)&&!empty($pass))
{	
	//get password from database and convert the user's input to encrypted one.
	$passEn=sha1($pass);
	$query1="select *from login where uname='$uname'";
	$result1=mysqli_query($mConnect,$query1) or die("cannot retrieve");
	$row1=mysqli_fetch_array($result1);
	$dbEnPass=$row1['password'];
	$dbUname=$row1['uname'];
	if($passEn==$dbEnPass&&$dbUname==$uname)//user's encrypted == database's encrypted password
	{
		$displayForm=False;		
		//start a session 
		session_start();
		$_SESSION['username']=$uname;
		//redirect to game
		header('Location:../pages/');
	}
	else
	{		
	echo "<script>alert('email id or the password you have entered is wrong');</script>";		
	}
}
else
{		
	echo "<script>alert('fill both email id and password');</script>";		
}
}//isset($_POST) ENDS
if($displayForm)
{
	?>
	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">		
		<table>
		<tr><td><p><strong>email:</strong></p></td><td><input type="text" name="uname" value=<?php echo $uname; ?>></input></td></tr>
		<tr><td><p><strong>password:</strong></p></td><td><input type="password" name="pass"/></td></tr>
		<!--<tr><td><p><strong>password again:</strong></p></td><td><input type="password" name="pass2"/></td></tr>-->
		<tr><td><input type="submit" name="login" value="submit"/></td></tr>
		</table>
	</form>
	<?php
}//if displayForm is true 
?>
</body>
</html>