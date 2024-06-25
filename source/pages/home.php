<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/public/logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <title>LAD</title>
    <link rel="stylesheet" href="/css/style.min.css">


</head>

<body>
    <div class="wrapper">
        <?php include 'source/php/_header.php'; ?>
        <?php include 'source/php/_main.php'; ?>
        <?php include 'source/php/_footer.php'; ?>
    </div>

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="../js/main.js"></script>
</body>

</html>