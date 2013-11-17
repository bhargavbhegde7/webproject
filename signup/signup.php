<?php
require_once('../connection/index.php');
$displayForm=True;
if(isset($_POST['add']))
{
$uname=$_POST['uname'];
$pass1=$_POST['pass1'];
$pass2=$_POST['pass2'];

if(!empty($uname)&&!empty($pass1)&&!empty($pass2))
{
	if($pass1==$pass2)
	{
		$displayForm=False;
		$passEn=sha1($pass1);
		$query1="insert into login values('$uname','$passEn')";
		$result1=mysqli_query($mConnect,$query1) or die("cannot insert");
		header('Location:../');
	}
	else
	{
		
	echo "<script>alert('passwords dont match');</script>";
		
	}

}
else //one of the fiels is empty
{
		
	echo "<script>alert('fill all details');</script>";
		
}
}//isset($_POST) ENDS
if($displayForm)
{
	?>
	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
		
		<table>
		<tr><td><p><strong>email:</strong></p></td><td><input type="text" name="uname" value=<?php if(!empty($uname)){echo $uname;} ?>></input></td></tr>
		<tr><td><p><strong>password:</strong></p></td><td><input type="password" name="pass1"/></td></tr>
		<tr><td><p><strong>password again:</strong></p></td><td><input type="password" name="pass2"/></td></tr>
		<tr><td><input type="submit" name="add" value="submit"/></td></tr>
		</table>

	</form>
	<?php
}//if displayForm is true 
?>
