
  // Define the valid email and password
  let validEmail = "magumbahassan53@gmai.com";
  let validPassword = "22/u/4484";
  
  function validateCredentials(email, password) {
      
      // Check if the provided email and password are valid
      if (email === validEmail && password === validPassword) {
  
      // correct input message
       console.log(`User email is ${email}, login successfully🤝🤝✔✔`);
  
      } else {
   // wrong input error message
   console.log("❌❌❗❗Incorrect user inputs❗❗❌❌");
      }
  }
  validateCredentials('magumbahassan53@gmai.com', '22/u/4484');