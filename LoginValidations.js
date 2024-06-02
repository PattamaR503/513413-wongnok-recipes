function validation(values){
   let error = {}
   const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

   if(values.email===""){
    error.email = "Please enter your email"
   }
   else if(!email_pattern.test(values.email)){
    error.email="Email is incorect"
   }else{
    error.mail=""
   }

   if(values.password===""){
    error.password="Please enter password"
   }
   else if(password_pattern.test(values.password)){
    error.password="Password is incorect"
   }else {
    error.password=""
   }
   return error;
}
export default validation;