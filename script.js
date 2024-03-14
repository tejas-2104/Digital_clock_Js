function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    document.getElementById('ampm').textContent = ampm;
  
    const hour = now.getHours();
    let greeting;
    if (hour < 12) {
      greeting = "Good morning!";
    } else if (hour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
    document.getElementById('greeting').textContent = greeting;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Call the function immediately to avoid initial delay
  updateClock();
  