<?php

require "vendor/autoload.php";
$router = new AltoRouter();


/* __________________________ GLOBAL ROUTES _________________________________ */
$router->map('GET|POST', '/', 'public/banner');


$match = $router->match();
if (is_array($match)) {
    if (is_callable($match['target'])) {
        call_user_func_array($match['target'], $match['params']);
    } else {
        require "{$match['target']}.php";
    }
} else {
    require 'public/404/notfound.php';
}
