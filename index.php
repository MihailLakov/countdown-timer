<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Countdown Timer</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="timer">
    <div class="timer-controls">
      <button data-time="20" class="timer-button">20 seconds break</button>
      <button data-time="300" class="timer-button">5 minutes break</button>
      <button data-time="900" class="timer-button">Quick 15 mins</button>
      <button data-time="1200" class="timer-button">Snack 20 mins</button>
      <button data-time="3600" class="timer-button">1 hour break</button>
      <form name="customForm" id="custom">
        <input type="text" name="minutes" placeholder="Enter Minutes">
      </form>
    </div>
    <div class="display">
      <h1 class="display-time-left"></h1>
      <p class="display-end-time"></p>
    </div>
  </div>
  <script src="countdown-timer.js"></script>
</body>
</html>
