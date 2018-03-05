<?php

namespace App\Models;
use Eloquent;
use DB;

class Article extends Eloquent
{
	 
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $primaryKey = 'id';
	protected $table = 'article';

	protected $fillable = array('title','content','read');
	protected $guarded = array('id');
	public $timestamps = true;

	
	//查询文章信息
	public static function infoArticle($id)
	{ 
		$where = array('id'=>$id);
		$result = self::where($where)->first();
		if(!empty($result['create_at'])){ 
			$result['create_at'] = date('Y-m-d H:i:s',$result['create_at']);
		}
		if(!empty($result['update_at'])){ 
			$result['update_at'] = date('Y-m-d H:i:s',$result['update_at']);
		}
		DB::update('update article set readnumber = readnumber+3 where id = ?',[$id]);
		return $result;
	}

	//热点推荐列表
	public static function listHotArticle()
	{ 
		$result = self::where(['hot'=>1])->select('title')->limit(10)->orderby('id','desc')->get();
		return $result;
	}

	//正确返回：00000
    public static function return_success($data,$description='')
    {
        $res = array('data' => $data,'description' => $description,'reasonCode' => '00000','result'=>'success');
        return json_encode($res, JSON_UNESCAPED_UNICODE);
    }

}
