<?php

$filename = $_SERVER['DOCUMENT_ROOT'] . "php/uploads/info.png";
$message = "The file $filename";
if (file_exists($filename)) {
    $message .= " --- exists";
} else {
    $message .= " --- not exists";
}

if (is_writable($filename)) {
    $message .= " --- is writeable";
} else {
    $message .= " --- is not writeable";
}

if (is_writable(dirname($filename)))
{
    $message .= " --- dir is writeable";
}
else
{
    $message .= " --- dir is not writeable";
}

echo $message;

?>