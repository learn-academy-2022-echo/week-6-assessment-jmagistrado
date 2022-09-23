# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I understand that this may happen from time to time when you might forget to add a foreign key. I know that the foreign key would be on the Student model as Student model is associated to the parent model of Cohort. However, I am not too sure how we would be able to this mistake. I would definitely take a look at my previous lectures about associations and lean on my resources to help resolve this issue. 

Researched answer: As we are making an association between the Student model and Cohort model and are stating that Cohort has_many students, it confirms that Cohort model is the parent model and the Student model is being associated to the parent. In case that we forgot to add the foreign key to the Student model, we can simply create an active record migration which will allow us to modify the shape of an existing database and add a columm for the foreign key within the Student model. To add a new column, we use the following commands within the terminal: 
 // In terminal: 
 $ rails generate migration add_column_student_id
 
 After we run this command, a new file is created and added to the migrate directory. We can open this file up to see that there is a def change method that has already been created for us - this is where we can edit and make changes to add a new colum. To add a column, we add a new line into our method like this: 

// In db/migrate
  def change
  add_column :cohorts, :student_id, :integer 
  end
end 

To save the file, we run the next command
 // In terminal: 

 $rails db:migrate


2. Which RESTful routes must always be passed params? Why?

Your answer: I believe the routes that must always be passed params are show, edit, update, and destory. This is because all four routes need a param passed to find the primary key value of the instance that needs to be either shown, edited/updated, or destroyed. Without passing params, you would not be able to call for a specific instance. 

Researched answer: The routes that must be passed params are show, edit, update and destroy. This is because all four routes need a param passed to find the primary key value of the instance that needs to be either shown, edited/updated, or destroyed. Without passing params, you would not be able to call for a specific instance which would result in not being able to see, edit or delete an individual instance. It is important that these RESTful routes pass params because it makes the page more dynamic and allows the developer to add more information into the route rather then having to do it directly to the URL.

I have used params before while creating a RESTful routes. By using params, it makes my route more dynamic vs creating a static route that has a hard coded primary id key within it. This lessens the amount of routes you may need and in turn, creates an easier to read and easier to follow route. 

3. Name three rails generator commands. What is created by each?

Your answer: 

$rails g migration - this creates a migrate file within the database folder which allows you to change the shape of the data base by adding columns.

$rails g resource - creates the RESTful routes and all files you may need for your database

$rails g model - creates the model file and you are able to create new instances from the class

Researched answer:

$rails g model - creates the model file and you are able to create new instances from the class. Along with using this command, you must also include the name of the model, the name of each of the columns and what data type the column will has as arguments. When you go into your application, you will see that a model file was created and named after the name you've assigned it, as well as the columns that will be included and what data type it will take in. 

I have used this command in the past when I wanted to create a model file. For example, if I was making a model to track cookie sales, I might name my model Cookie and it would have a column to track the amount of cookies in stock (takes in an integer), cookie name (takes in a string), cost to make 1 cookie (integer), and ingredients (string). It is a helpful command to be able to create your model with all your columns that you might need. However, in case you forget to generate one column, you still have the ability to generate another column that will be attached to the model. To do this, you will simply use another command $rails g migration. 

$rails g migration - this creates a migrate file within the database folder which allows you to change the shape of the data base by adding columns, creating a table, and changing tables just to name a few. It essentially allows for modifications in case something needs to be changed within your already created database. Going off of the previous example of forgetting to create a certain column - For example, if I was creating a model to track cookie sales and I forgot to have a column that would be used to track the amount of cookies are sold weekly, I can use this command to add a column after I had already generated the model. 

$rails g resource - May be considered one of the more useful commands because it generates a model with the columns you need along with its associated data types, it generates a controller, view folder, migrations and the RESTful routes. This is one of the newest generate commands that I have learned about. This is a super useful command because it cuts out several steps from creating an application. As this command generates mulitple files, the developer does not to need to remember to run multiple commands to generate all the files they need or need to create the RESTful routes themselves. This saves the developer in set up time and makes them more efficient. 


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
    Destroy - This controller is used to delete an  instance. In this example, the instance with the primary index of 2 would be deleted from the database 

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User Stories: 

As a developer, I can create a full stack Rails application for a to do list 
As a developer, my to do list can have a task, description, due date, and status 
As a developer, I can add new tasks directly to my database 
As a user, I can see all tasks listed on the home page 
As a user, I can click on a task to route to a new page that displays all information for that one task 
As a user, I can see a button on the home page that will take me to a new page where I can create a new task
As a user, I can see a form to create a new task 
As a user, when I create a new task, there is a button that will submit the task to the database
As a user, I can edit a task's status from not complete to complete 
As a user, I can delete a task 
As a user, I can navigate from the form back to the home page to see all tasks 
