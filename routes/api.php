<?php

$router->namespace('Auth')->middleware('api')->prefix('auth')->group(function ($router) {
    $router->post('register', 'RegisterController@register');
});
