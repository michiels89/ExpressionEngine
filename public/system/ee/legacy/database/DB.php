<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

/**
 * Initialize the database
 */
function DB($params = NULL)
{
	$database = ee('Database');

	if ( ! empty($params))
	{
		// Manually set the things we need
		$database_config = $database->getConfig();
		$database_config->set('hostname', $params['hostname']);
		$database_config->set('database', $params['database']);
		$database_config->set('username', $params['username']);
		$database_config->set('password', $params['password']);
		$database_config->set('dbprefix', $params['dbprefix']);

		foreach (['char_set', 'dbcollat', 'port'] as $key)
		{
			if (isset($params[$key]))
			{
				$database_config->set($key, $params[$key]);
			}
		}

		$database->setConfig($database_config);
	}

	return $database->newQuery();
}

// EOF