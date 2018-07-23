<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

$config['save_tmpl_files'] = 'y';
// ExpressionEngine Config Items
// Find more configs and overrides at
// https://docs.expressionengine.com/latest/general/system_configuration_overrides.html

$config['app_version'] = '4.3.2';
$config['encryption_key'] = '82cb1faf1fdfc8d52928993fe2e12397e6fe07e6';
$config['session_crypt_key'] = '12effcdb83cbb48234bc31da73528ca6652b186e';
$config['database'] = array(
	'expressionengine' => array(
		'hostname' => '127.0.0.1',
		'database' => 'expr',
		'username' => 'root',
		'password' => 'root',
		'dbprefix' => 'exp_',
		'char_set' => 'utf8mb4',
		'dbcollat' => 'utf8mb4_unicode_ci',
		'port'     => ''
	),
);

// EOF