# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer:

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer:

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
    Index - The controller would show all instances that were created of students 

action: "POST" location: /students
    Create - This controller is used to add a new instance in the database
    
action: "GET" location: /students/new
    New - This controller returns a HTML form that will allow you to create a new instance. It is good to remember that New doesn't interact with the database, but instead it is the in between between C and R in CRUD

action: "GET" location: /students/2
    Show - This controller would only show/display  the student instance that has the primary number of 2 

action: "GET" location: /students/2/edit
    Edit - This controller returns a HTML form for updating the instance in a database. It is good to remember that Edit doesn't interact with the database itself, it just allows to have the ability to make an adjustment to an already made instance

action: "PATCH" location: /students/2
    Update - This controller allows to overwrite a value of an instance using the edit form. 

action: "DELETE" location: /students/2
    Destroy - This controller is used to delete an  instance. In this example, the instance with the     primary index of 2 would be deleted from the    database 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
