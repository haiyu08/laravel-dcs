<?php

namespace App\Models;
use Eloquent;
use DB;

class Users extends Eloquent
{
	 
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $primaryKey = 'id';
	protected $table = 'users';

	protected $fillable = array('username','password','phone');
	protected $guarded = array('id');
	public $timestamps = true;

	
	//查询用户登录信息是否正确
	public static function login($username,$password)
	{ 
		$where = array('username'=>$username,'password'=>$password);
		$result = self::where($where)->first();
		return $result;
	}

	//判断用户是否已经注册
	public static function check_userexit($username)
	{ 
		$id = self::select('id')->where(['username'=>$username])->first();
		return $id;
	}

	//用户注册进数据库
	public static function register($username,$password)
	{ 
		$result = self::create(['username'=>$username,'password'=>$password,'phone'=>$username]);
		return $result;
	}

	//重置用户密码
	public static function resetpassword($username,$password)
	{ 
		$result = self::where(['username'=>$username])->update(['password'=>$password]);
		return $result;
	}


}
