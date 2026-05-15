<?php
function printArray($arr) {
    foreach ($arr as $value) {
        echo $value . "<br>";
    }
}

$numbers = array(10, 20, 30, 40);
printArray($numbers);
?>