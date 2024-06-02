function validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
  
    if (values.name === "") {
      error.name = "Please enter your name"
    }
  
    if (values.email === "") {
      error.email = "Please enter your email"
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email is incorrect"
    }
  
    if (values.password === "") {
      error.password = "Please enter password"
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number"
    }
    console.log(error);
    return error;
  }
  
  export default validation;