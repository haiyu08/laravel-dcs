<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/','FrontpageController@homepage');//front page: home page
Route::get('/aa', function () { return view('index');});
Route::get('/welcome','FrontpageController@homepage');//front page: home page
Route::get('/welcome_vue','FrontpageController@homepage');//front page: home page


Route::get('/get_article','ArticleController@get_article');//单篇文章
Route::get('/list_hotarticle','ArticleController@list_hotarticle');//热点推荐列表

