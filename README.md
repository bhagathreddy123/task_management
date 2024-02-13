 rails new task_management -j=esbuild -T -d=postgresql
 rails db:create
 rails db:migrate
 rails css:install:bootstrap
 rails g controller home index

 install react node modules to the application using below command
 npm install react react-dom
 gem install foreman
 ./bin/dev

 checking in Postman

 method GET: 
 URL: http://localhost:3000/api/v1/tasks?status=To Do

 checking to create a Post in POSTMAN.

method POST
 URL: http://localhost:3000/api/v1/tasks


 {
    "title": "please create the task"
    "status": "In Progress"
}


display error message when empty title submission
method POST
 URL: http://localhost:3000/api/v1/tasks

{
    "title": "",
    "status": ""
}