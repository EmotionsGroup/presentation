<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'redcresc_wordpress_9');

/** MySQL database username */
define('DB_USER', 'redcr_wordpres_6');

/** MySQL database password */
define('DB_PASSWORD', 'f75rmNP9$S');

/** MySQL hostname */
define('DB_HOST', 'localhost:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'epk3tRSGNvO%XTO0Ln%*WZmrCopXkzSPPb!s1#7PAeL3C^FALUbROQ7*^XlR@tHw');
define('SECURE_AUTH_KEY',  'U7D8uopPkgg7tU70UdU%0DEvC#X9#nHB!C^uPuEjEa7m)1GO!d6(RWt2S#ru3RH#');
define('LOGGED_IN_KEY',    'tyuh*1kS)rQtr!*6E)g^2qB%lgloGhMwesJu&dorR!^)98R*^p0(p#(#LaF4AWK6');
define('NONCE_KEY',        'n#aJj33kzSs^x)%8@M(YBo#NZHcJc!h&pv6jM)lZ@Nb!Io3de1f1NAnbN0)vm1Oi');
define('AUTH_SALT',        'fRxuV#5D)kMU@yuH6%I1Pq83e(CHv4j(zVURN@rox)lERTdSPg*5!@MIYG15u9xV');
define('SECURE_AUTH_SALT', 'Ok*Dngz5Iz)TW*AE7Y^waOowK&S2z^(taM1D)*ffiSxMDzHQ20(JS)XvT^#xCR%o');
define('LOGGED_IN_SALT',   'rsMgu!6oemZlc1(iD1dZ^tki(FYU1zMgpgVwq)^IaY59Ij#9VOo)aGVwCeq6bUd8');
define('NONCE_SALT',       '9N4BKy%)^&9NxosXx6jZ6kkwzs(t57s^4vUwxUUch2HrbmY@k^^J%9)#JftsKQjo');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = '771Ja_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');

//--- disable auto upgrade
define( 'AUTOMATIC_UPDATER_DISABLED', true );
?>
