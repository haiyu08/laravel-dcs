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
Route::get('/list_rankarticle','ArticleController@list_rankarticle');//资讯排行列表
Route::get('/list_typearticle','ArticleController@list_typearticle');//资讯类型列表


Route::get('/register','UsersController@register');//用户注册
Route::get('/resetpassword','UsersController@resetpassword');//用户重置密码
Route::get('/login','UsersController@login');//用户登录
Route::post('/logout','UsersController@logout');//用户退出
Route::get('/get_session','UsersController@get_session');//用户的session


Route::get('/show_ueditor','BackendController@show_ueditor');//用户上传页面
Route::post('/edit_ueditor','BackendController@edit_ueditor');//接收用户的文章上传
Route::get('/message_register','BackendController@message_register');//发送手机注册验证码
