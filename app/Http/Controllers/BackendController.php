<?php

namespace App\Http\Controllers;
use App;
use Input;
use Auth;
use Session;
use Redis;
 
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Users;
use App\Models\Article;

class BackendController extends  Controller 
{
	protected $locale;
	protected $location;
	protected $zones;
	protected $zone;
	protected  $selectedZone;
	
	public function __construct()
	{
		session_start();
		if(Session::has('locale')){
			$this->locale = Session::get('locale');
		}
		else if(isset($_COOKIE['locale'])){
			$this->locale = $_COOKIE['locale'];
		}
		else{
			$this->locale = config('app.locale');
		}		
	}

    //录入文章
    public function show_ueditor(Request $request,Response $response)
    {
    	return view('backend.ueditor');
    }

    //接收用户的文章上传
    public function edit_ueditor(Request $request,Response $response)
    {
    	$title = $request->get('title');
    	$content = $request->get('content');
    	$result = Article::edit_ueditor($title,$content);        
    	if(!empty($result)){
        	$res = array('data' => $result,'description' => '','reasonCode' => '00000','result'=>'success');
    	}
        return json_encode($res, JSON_UNESCAPED_UNICODE);
    }


    //发送手机注册验证码
    public function message_register(Request $request,Response $response)
    {
    	$mobile = $request->get('mobile');
    	$type = $request->get('type'); //1:注册  2：找回密码
    	$code = rand(100000,999999);
    	$return = Users::check_userexit($mobile);
    	if($type == 1 && empty($return)){
    		//注册
        	Redis::setex($mobile,180,$code);
    		return view('backend.message_register',array('mobile'=>$mobile,'type'=>$type,'code'=>$code));
    	}else if($type == 2 && !empty($return)){ 
    		//找回密码
        	Redis::setex($mobile,180,$code);
    		return view('backend.message_register',array('mobile'=>$mobile,'type'=>$type,'code'=>$code));
    	}

    }

}

