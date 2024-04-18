
# Wongnok_513413
I can not 100% accomplish this task. I stucked about database issue. (I can connect to database and try to log some errors but nothing seems to be errors but, when I try to test the web app by submit data to database, there are nothing sent to database.) Therfore, I had done only frontend section (sign-in,sign-up,home page) and backend for register and login system. (but it failed when I test this precess) 
By the way, I've write the way to run my project as following.


## Running Tests

To run tests, run both backend and frontend

For backend,

Open terminal and type,
```bash
  cd backend
  npm start
```
the terminal console will show,
 
```bash
> backend@1.0.0 start
> nodemon server.js
[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`  
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server listening on port 8081
Connected to the database
```
That's means backend is ready.

For frontend,
```bash
  cd frontend
  npm start
```
the terminal console will show,
```bash
  Compiled successfully!

You can now view frontend in the browser.        

  Local:            http://localhost:3000        
  On Your Network:  http://192.168.43.163:3000   

Note that the development build is not optimized.
To create a production build, use npm run build.
```
And the log-in page will pop up.
