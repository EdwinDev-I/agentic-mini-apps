
    document.getElementById('email').addEventListener('input', function() {
      const email = this.value;
      const message = document.getElementById('emailMessage');
      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
      if (!pattern.test(email)) {
        message.textContent = 'Invalid email format';
        message.style.color = 'red';
      } else {
        message.textContent = 'Valid email';
        message.style.color = 'green';
      }
    
    });
    
    document.getElementById('password').addEventListener('input', function() {
      const password = this.value;
      const strengthBar = document.getElementById('strengthBar');
      let strength = 0;
    
      if (password.length >= 8) strength += 20;
      if (/[A-Z]/. test(password)) strength += 20;
      if (/[a-z]/.test(password)) strength += 20;
      if (/[0-9]/.test(password)) strength += 20;
      if (/[\W]/.test(password)) strength += 20;
    
      strengthBar.value = strength;
    });
    
    document.getElementById('togglePassword').addEventListener('click', function () {
      const password = document.getElementById('password');
      password.type = password.type === 'password' ? 'text' : 'password';
    });

  

      document.querySelectorAll('.js-sign-up')
       .forEach((link) => {
        link.addEventListener('click', () => {
         let get = document.getElementById('f-Name').value
        });
       }); 
      
