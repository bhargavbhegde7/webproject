<?php
//require_once(connection/index.php);
$mConnect=mysqli_connect("localhost","root","","myjsgame1") or die("cannot connect");
//if data are received via POST, with index of 'test'
if (isset($_POST['data'])) {
    $str = $_POST['data'];             // get data
    $query="insert into gamedata values('$str')";
	$result=mysqli_query($mConnect,$query);
}
?>
