<?php

$apps_folder = "apps_";

ob_start();
require("page_apps_apis_api_css_2.php"); 
require("page_apps_apis_api_html_2.php"); 
require("page_apps_apis_api_script_2.php");
$d = ob_get_clean();
if( 1==15 ){
	$d = preg_replace("/http\:\/\//", "httphttphttp", $d);
	$d = preg_replace("/https\:\/\//", "httpshttpshttps", $d);
	$d = preg_replace("/\/\/(.*?)[\r\n]/", "", $d);
	$d = preg_replace("/\/\*(.*?)\*\//", "", $d);
	$d = preg_replace("/[\r\n\t]{2,10}/", " ", $d);
	$d = preg_replace("/[\ ]{4,15}/", " ", $d);
	$d = preg_replace("/httpshttpshttps/", "https://", $d);
	$d = preg_replace("/httphttphttp/", "http://", $d);
	$d = preg_replace("/elseif/", "else if", $d);
}
echo $d;
