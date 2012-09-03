<?php

  session_start();

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet">
    <link href="assets/css/docs.css" rel="stylesheet">
    <link href="assets/js/google-code-prettify/prettify.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">

<style type="text/css">
      /* Override some defaults */
      html, body {
        background-color: #eee;
      }
      body {
        padding-top: 40px; 
      }
      .container {
        width: 300px;
      }

      /* The white background content wrapper */
      .container > .content {
        background-color: #fff;
        padding: 20px;
        margin: 0 -20px; 
        -webkit-border-radius: 10px 10px 10px 10px;
           -moz-border-radius: 10px 10px 10px 10px;
                border-radius: 10px 10px 10px 10px;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
           -moz-box-shadow: 0 1px 2px rgba(0,0,0,.15);
                box-shadow: 0 1px 2px rgba(0,0,0,.15);
      }

    .login-form {
      margin-left: 65px;
    }
  
    legend {
      margin-right: -50px;
      font-weight: bold;
      color: #404040;
    }

    .pbr {
      margin-top: 15px;

      font-size: 0.8em;
text-align: center;
color: white;
    }

    h1.rooble { background: url('assets/img/powered_rooble.png') center no-repeat; display: inline-block; width: 100px; height: 30px; opacity: 0.5; margin-left: 100px;}
h1.rooble:hover { opacity: 1;}

    </style>

  </head>

<body>

<div class="container">
      <div class="content">
          <div class="row">
              <div class="login-form">
                  <h2>Login</h2>
                  <form action="check.php" method="post">
                      <fieldset>
                          <div class="clearfix">
                              <input type="text" name="username" placeholder="Username">
                          </div>
                          <div class="clearfix">
                              <input type="password" name="password" placeholder="Password">
                          </div>
                          <button class="btn primary" type="submit">Sign in</button>

                          <br/>
                          <br/>

                          <?php 

                            if($_SESSION['error']) {

                              echo '<div class="alert">
  <strong>Warning!</strong>' . $_SESSION['error'] . ' </div>';

                            }

                          ?>

                      </fieldset>
                  </form>
              </div>
          </div>
      </div>

      <p class="pbr">Powered by</p><a href="#"><h1 class="rooble"></h1></a>

  </div> <!-- /container -->

  </body>
</html>
