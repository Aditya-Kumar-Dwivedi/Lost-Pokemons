<?php
 session_start();
 if(!isset($_SESSION["username"]))
 {
    header("location:login.php");
 }
?>


<!DOCTYPE html>
<html>
<head>
  <title>Misplaced Pin</title>
  <link rel="stylesheet" type="text/css" href="beautify.css">
</head>
<body onload="generatePins()">
  <div class="wrapper">
    <span id="userdetail">
      <?php 
      echo $_SESSION["username"]
      ?>
    </span>
    <span class="game-title"> Welcome <?php 
      echo $_SESSION["username"]
      ?> to the Lost Pokemons</span>

    <p>There is a difference between the two boards. Something has been misplaced.</p>
    <p>Can you tell the difference? Click the <strong>left board</strong> to mark the difference</p>
    <p>Clicking anywhere other than the correct difference will result in game over.</p>


    <div id="timer">
    </div>

    <div id="score-board">
      <span id="level">Level</span>
    </div>
    <div id="board-container">
      <div id="leftSide"></div>
      <div id="rightSide"></div>
    </div>
  </div><!-- .wrapper -->

  <script src="lost_pokemon.js"></script>

  <button onclick="generate_hints()">Give a hint</button>


  <div id="hint">
  </div>

  <button onclick="i_surrender()">I surrender</button>
  <div id="answer">

  </div>
  <a href="logout.php">
  <button >Logout</button>
  </a>
  <br>
  <a  href="know_your_pokemons.html">
  <button>know your pokemons</button>
</a>
</body>
</html>












