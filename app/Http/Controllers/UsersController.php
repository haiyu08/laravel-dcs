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

class UsersController extends  Controller 
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

    //用户注册
    public function register(Request $request,Response $response)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        $yzm = $request->input('yzm');

        $yzm_ok = false;
        if(Redis::exists($username)){ 
            if(Redis::get($username) == $yzm){ 
                $yzm_ok = true;
            }
        }
        $result = Users::login($username,$password);
        if(empty($result) && $yzm_ok){
            Users::register($username,$password);
            $result = Users::login($username,$password);
            Session::put('username',$result->username);
            $res = array('data' => '','description' => '','reasonCode' => '00000','result'=>'success');
        }else{
            $res = array('data' => '','description' => '','reasonCode' => '10000','result'=>'false');
        }
        return json_encode($res, JSON_UNESCAPED_UNICODE);
    }


    //用户重置密码
    public function resetpassword(Request $request,Response $response)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        $yzm = $request->input('yzm');

        $yzm_ok = false;
        if(Redis::exists($username)){
            if(Redis::get($username) == $yzm){ 
                $yzm_ok = true;
            }
        }
        $id = Users::check_userexit($username,$password);
        if(!empty($id) && $yzm_ok){
            Users::resetpassword($username,$password);
            $result = Users::login($username,$password);
            Session::put('username',$result->username);
            $res = array('data' => '','description' => '','reasonCode' => '00000','result'=>'success');
        }else{
            $res = array('data' => '','description' => '','reasonCode' => '10000','result'=>'false');
        }
        return json_encode($res, JSON_UNESCAPED_UNICODE);
    }





    //用户登录
    public function login(Request $request,Response $response)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        $result = Users::login($username,$password);
        if(!empty($result)){
            Session::put('username',$result->username);
            $res = array('data' => '','description' => '','reasonCode' => '00000','result'=>'success');
        }else{
            $res = array('data' => '','description' => '','reasonCode' => '10000','result'=>'false');
        }
        return json_encode($res, JSON_UNESCAPED_UNICODE);
    }


    //获取用户session
    public function get_session(Request $request,Response $response)
    {
    	$username = Session::get('username','');
        if(!empty($username)){
        	$res = array('data' => ['username'=>$username,'user_session'=>true],'description' => '','reasonCode' => '00000','result'=>'success');
    	}else{
        	$res = array('data' => ['username'=>$username,'user_session'=>false],'description' => '','reasonCode' => '10000','result'=>'false');
    	}
        return json_encode($res, JSON_UNESCAPED_UNICODE);
    }


    //用户退出
    public function logout(Request $request,Response $response)
    {
    	$username = Session::put('username','');
        if(!empty($username)){
        	$res = array('data' => ['username'=>$username,'user_session'=>true],'description' => '','reasonCode' => '00000','result'=>'success');
    	}else{
        	$res = array('data' => ['username'=>$username,'user_session'=>false],'description' => '','reasonCode' => '10000','result'=>'false');
    	}
        return json_encode($res, JSON_UNESCAPED_UNICODE);
    }


}

