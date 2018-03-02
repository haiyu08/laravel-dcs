<?php

namespace App\Http\Controllers;
use App;
use Input;
use Auth;
use Session;
 
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Article;

class ArticleController extends  Controller 
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

    public function get_article(Request $request,Response $response)
    {
        $result = Article::infoArticle($request->get('id'));
        $res = array('data' => $result,'description' => '','reasonCode' => '00000','result'=>'success');
        return json_encode($res, JSON_UNESCAPED_UNICODE);
    }

}

