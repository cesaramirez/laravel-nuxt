<?php

$router->namespace('Auth')->middleware('api')->prefix('auth')->group(function ($router) {
    $router->post('register', 'RegisterController@register');
    $router->post('login', 'LoginController@login');
    $router->post('logout', 'LogoutController@logout');
    $router->get('me', 'MeController@me');
});
