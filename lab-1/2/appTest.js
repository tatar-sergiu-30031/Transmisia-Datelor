
function test() {
  console.log(sum(0) == 0 ? ' Passed ' : ' Failed ');
  console.log(sum(2) == 3 ? ' Passed ' : ' Failed ');
  console.log(sum(4) == 10 ? ' Passed ' : ' Failed ');
  console.log(sum() == 'n is undefined ' ? ' Passed ' : ' Failed ');
}
test();



index.html


<!DOCTYPE html>
<html lang="en">
<head>
  <link rel= 'stylesheet' href= 'style.css '>
  <meta charset="UTF-8">
  <title>Second js app</title>
</head>
<body>
<div id='counter'></div>
<button id='inc'>+</button>
<button id='dec'>-</button>
<script src='app.js'></script>
</body>
</html>
