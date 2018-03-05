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



}
