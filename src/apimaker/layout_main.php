<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title><?=$meta_title?$meta_title:"API Maker" ?></title>
	<link rel="stylesheet" href="<?=$config_global_apimaker_path ?>bootstrap/bootstrap.min.css" >
	<style>
		:root{ --bs-border-color: #ccc; }
	</style>
	<script src="<?=$config_global_apimaker_path ?>bootstrap/bootstrap.bundle.min.js"></script>
	<script src="<?=$config_global_apimaker_path ?>bootstrap/popper.min.js"></script>
	<script src="<?=$config_global_apimaker_path ?>js/vue3.min.prod.js"></script>
	<script src="<?=$config_global_apimaker_path ?>js/vue-router.global.js"></script>
	<script src="<?=$config_global_apimaker_path ?>js/axios.min.js"></script>
	<link rel="stylesheet" href="<?=$config_global_apimaker_path ?>common.css" />
	<link rel="stylesheet" href="<?=$config_global_apimaker_path ?>fontawesome/css/all.min.css" />
	<link rel="stylesheet" href="<?=$config_global_apimaker_path ?>RemixIcon/fonts/remixicon.css" />
</head>
<body><?php	require("block_header.php"); ?>
<div class="container-fluid" >
<?php	
	if( $config_page != "" ){
		$pagefile = "page_" . $config_page . ".php";
		if( file_exists( $pagefile ) ){
			include_once( $pagefile );
		}else{
			echo "<p>Page not found!</p>";
		}
	}
?>
</div>
</body>
</html>