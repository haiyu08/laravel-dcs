<?php

namespace App\Http\Controllers;
use App;
use Input;
use Auth;
use Session;
 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\ModelsUser;
use App\ModelsCategory;
use App\ModelsZone;
use App\ModelsCity;
use App\ModelsAdvert;
use App\ModelsAdvertMedia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Response;

class FrontpageController extends  Controller 
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

    public function homepage()
    {
        //return view('frontend.homepage',array('locale' => $this->locale));
        return view('index',array('locale' => $this->locale));
    }

    public function index2()
    {

        return view('frontend.index2',array('locale' => $this->locale));
    }
 
    
	public function login(Request $request,Response $response) 
	{
		 return view('frontend.login',array('pageTitle' => Lang::get('mowork.login'),'locale' => $this->locale));
	}
 
	 
	public function signup(Request $request,Response $response){
		 
	 
		if($request->input('submit')){
			//inject( 'response', 'Illuminate\Http\Response' );
			    //$request->input('signupMethod')
			    
				$json = ApiFront::signup(2, $request->input('email'), $request->input('password'), $request->input('validatingNumber'),$response) ;
				//list($nickname,$domain) = explode('@',$request->input('email'));
 				 
				//die(var_dump(json_decode($result)));
				$result = json_decode($json);
				 
				if($result->status == 200 && $result->data->result == 'success'){
					return Redirect::to("/signup-success")->with(array( 'result' => $json));
				}
				else {
					 
					return  Redirect::back()->with(array( 'result' => $json));
				}
			 
		}
		 
		return view('frontend.signup',array('result' => array('status' => 200,'res' => 'success' ),'pageTitle' => Lang::get('mowork.signup'),'locale' => $this->locale));

	}

	public function signupSuccess(){
		if(!Session::has('result')) return Redirect::to("/");
		  
		return view('frontend.signup-success',array('result' => Session::get('result'),'locale' => $this->locale));
	}

	public  function lostPassword(Request $request){//TODO
		if($request->input('submit')){
			$existed = Customer::where('email',$request->input('email'))->first();
			if($existed) die('ok, will send you an email ');
			else die('not existed email address');
		}
		 
		return view('frontend.lost-password',array('locale' => $this->locale));
	}

	public function admLogin(Request $request){
		if($request->input('submit')){
			$username = trim($request->input('email'));
			$password = trim($request->input('password'));
			$identfier = 'adm_name'; //judg if user input email or accounht number
			if(strpos($request->input('email'),'@')) $identfier = 'email';
		 
			if(Auth::guard('admins')->attempt([$identfier => $username, 'password' => $password])){

				Session::put('email',$username);
				$_SESSION['adm_uid'] = Auth::guard('admins')->user()->id;
				$adm_name = Auth::guard('admins')->user()->adm_name;
				Session::put('admuser',$adm_name? $adm_name:$username);
				$_SESSION['admuser'] = Session::get('admuser');//for avoiding browser back after logout
				 

				return  Redirect::to("/yp2100adm/home");
			}
			else{
				return Redirect::to("/yp2100adm/login")->with('login_failed',Lang::get('mowork.login_failed'));
			}
		}

		return view('sysadm.login',array('locale' => $this->locale));
	}

	public function logout(Request $request){
		if(Session('admuser')){
			unset($_SESSION);
			session_destroy();
			 
			Session::flush();
			Auth::logout();
			return Redirect::to("/yp2100adm/login");
		}
		else if(Session('username')){
			unset($_SESSION);
			session_destroy();
			 
			 
			Session::flush();
			Auth::logout();
			 
			return Redirect::to("/");
		}
		return Redirect::to("/");
	}
  
	public function locationZone(Request $request,$zone){
		 
		$zone = str_replace('-',' ',$zone);
		$this->location = $zone;
		
	 
		Session::put('location',$zone);
	
		setcookie('location', $zone, time() + (86400 * 90),'/','10van.com');
		//setcookie('locale', $locale, time() + (86400 * 90),'/','ifomowork.ca',0,true);
	
		//$url = URL::previous();
		  
		 
		$zn = Zone::where('zone_native',$zone)->first();
        
		if($zn){
			$selectedZone = $zn->zone_native.' ' .$zn->zone_name;
		}
		else{//deafult
			$selectedZone = 'Vancouver'. ' ' . Lang::get('mowork.vancouver');
		}
		
		Session::put('ZoneId',$zn->zone_id);
		$selectedZoneId = $zn->zone_id;
		 
		$this->selectedZone = $selectedZone;
		
		return Redirect::back();
		 
	}
	
	public function adForm(Request $request){
		 
		 
		if($request->has('submit')){
			
			$success = '';
			$access_code = '';
			$need_pay = '';
			$adId = '';
			
			if($request->input('cat1') == 1) {//hot-info category
				$billed = Advert::where('phone',$request->input('phone'))->where('billed',1)->first();
				//var_dump($billed);
				if(!isset($billed)|| $billed->billed == 0) return Redirect::back()->with('refill',Lang::get('mowork.post_constrain'));
		 	}	
			
			try{
			
				$access_code = $this->generateRandomString(6);
				//$access_code = hash('md5',$access_code);
				$avatar = '';
			
				$city_name = '';
				$city_id = 0;
				if($request->has('city')){
					$city_name = City::where('city_id',$request->input('city'))->pluck('name')[0];
					$city_id = $request->input('city');
				}
				 
				$cat2 = 0;
				if(is_numeric($request->input('cat2'))){
					$cat2 = $request->input('cat2');
				}
			  
				 
				//check if it is a paid category
				$need_pay = 0;
				if($cat2 > 0){
					$cat = Category::where('cat_id',$cat2)->first();
					$need_pay = $cat->billing;
					$cat_name = $cat->cat_name;
				}
				else{
					$cat = Category::where('cat_id', $request->input('cat1'))->first();
					$need_pay = $cat->billing;
					$cat_name = $cat->cat_name;
				}
				 
				$approved = 1;
				if($need_pay) $approved = 0;
				 
				$adId = Advert::create(array ('title' =>  $request->input('title'),'price' => $request->input('price'), 'avatar' => '/img/square.png','contact' => $request->input('contact'),'phone' => $request->input('phone'),'city_name' => $city_name,'city_id' => $city_id,'address' => $request->input('address'),
					'content' => $request->input('content'), 'zone_id' => Session::get('ZoneId'),'is_active' => 1,'cat1' => $request->input('cat1'),'cat2' => $cat2,
					'email' => $request->input('email'),'postcode' => $request->input('postcode'),'wechat_id'=>$request->input('wechat_id'),'qq' => $request->input('qq'),'is_approved' => $approved,'access_code' => $access_code ))->ad_id;

			 	 
				if(isset($_SESSION['FileNames'])){
					//to solve the same file uploaded more than 1 times;
					$_SESSION['FileNames']= array_unique($_SESSION['FileNames']);
					
					$size = count($_SESSION['FileNames']);
					for($jj =0 ; $jj < $size; $jj++){
						$file = $_SESSION['FileNames'][$jj];
						$posdash = strpos($file,'-');
						$newfile = substr($file,0,$posdash).'-'.uniqid().substr($file,$posdash+1);//make file be unique
						copy('uploads/tmp/'.$file,'uploads/'.$newfile);
			
						if($jj == 0){
							Advert::where('ad_id',$adId)->update(array('avatar' => '/uploads/'.$newfile));
						}
						AdvertMedia::create(array('ad_id' => $adId, 'media_url' => '/uploads/'.$newfile));
			
					}
			 		 
					//now to delete the files in ../tmp
					foreach($_SESSION['FileNames'] as $file){
						if(File::exists(public_path().'/uploads/tmp/'.$file))
						File::delete(public_path().'/uploads/tmp/'.$file);
					}
					unset($_SESSION['FileNames']);
					unset($_SESSION['NumOfFiles']);
					$success = Lang::get('mowork.operation_success');
					 
				}
			 
			}
			 
			catch(\Exception $e){
				$success = Lang::get('mowork.operation_failure');
				if(isset($_SESSION['FileNames'])){
					foreach($_SESSION['FileNames'] as $file){
						if(File::exists(public_path().'/uploads/tmp/'.$file))
							File::delete(public_path().'/uploads/tmp/'.$file);
					}
					unset($_SESSION['FileNames']);
					unset($_SESSION['NumOfFiles']);
				}
				
				$adId = 0;//failed to add advert
			}
			 
			Session::put('success',$success);
	 		$token = sha1($this->salt0.$adId);
			return Redirect::to("/ad-form-final/$token/$adId");
		}
	 	
		$cityList = DropdownController::city('zone_id',$this->location);
		$cat1 = DropdownController::topCategory();
		$cat2 = DropdownController::subCategory($parnet_id = -1);//-1: make be empty
		
		$ZoneId = Session::has('ZoneId')?Session::get('ZoneId'):1;
		$cities = DropdownController::city($ZoneId);//only zone_id=1,2 has cities 
		
				 
		return view('frontend.ad-form',array('location' => $this->location,'cityList' => $cityList, 'cat1' => $cat1, 'cat2'=> $cat2, 'zones' => $this->zones, 'ZoneId' => $ZoneId, 'cities' => $cities, 'selectedZone' => $this->selectedZone,'pageTitle' => Lang::get('mowork.post_ad'),'locale' => $this->locale));
	}
	
 
	public function adFormFinal(Request $request,$token,$adId) {
		if(!Session::has('success')) return Redirect::to('/');
		 
		$cmp_token = sha1($this->salt0.$adId);
		if($cmp_token != $token) return Redirect::to('/');
		
		$row = Advert::where('ad_id',$adId)->first();
		$need_pay = 0;
		
		if(isset($row->cat2) && $row->cat2 > 0){
			$cat = Category::where('cat_id',$row->cat2)->first();
		}
		else{
			$cat = Category::where('cat_id', $row->cat1)->first();
		}
		
		$need_pay = $cat->billing;
		
		$bill = false;
		
		if($need_pay != $row->billed){
			$bill = true;
			Session::put('billing',true);
		}
		
		return view('frontend.ad-form-final',array('zones' => $this->zones,'bill' => $bill,'token' => $token,'row' => $row,'pageTitle' => Lang::get('mowork.post_ad'),'locale' => $this->locale));
	 
	}
	
	public function aboutUs(){
		return view('frontend.about-us',array('zones' => $this->zones,'pageTitle' => Lang::get('mowork.about_us'),'locale' => $this->locale));
	}
	
	public function contact(){
		return view('frontend.contact',array('zones' => $this->zones,'pageTitle' => Lang::get('mowork.contact'),'locale' => $this->locale));
	}
	
	public function privacy(){
		return view('frontend.privacy',array('zones' => $this->zones,'pageTitle' => Lang::get('mowork.privacy'),'locale' => $this->locale));
	}
}

