document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('trustbuilders@gmail.com').value;
    const password = document.getElementById('trustbuilders').value;
  
    if (email && password) {
      alert('Login successful!');
    } else {
      alert('Please enter both email and password.');
    }
  });
  