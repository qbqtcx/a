<?php
$dir = "./";
$files = scandir($dir);

foreach ($files as $file) {
    if ($file != "." && $file != "..") {
        echo $file . "<br>";
    }
}
?>
