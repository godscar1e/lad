<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$request_uri = $_SERVER['REQUEST_URI'];
$path = trim(parse_url($request_uri, PHP_URL_PATH), '/');

$baseDir = dirname(__DIR__);

if (strpos($path, 'php/') === 0) {
    $path = substr($path, 4);
}

// Роутер
switch ($path) {
    case '':
    case 'home':
        require_once $baseDir . '/source/pages/home.php';
        break;
    case 'profile':
        require_once $baseDir . '/source/pages/profile.php';
        break;
    default:
        header("HTTP/1.0 404 Not Found");
        echo "404 Not Found";
        break;
}
?>