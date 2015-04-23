#Welcome to your task

We are going to set you some tasks that will really help us when it comes to assessing your fit for the role available.  

This is a totally fictional project made just for this purpose - nothing you do will be used for anything other than as a talking point and assessment of your abilities

It focuses on HTML, JavaScript and CSS.  If you want to add AngularJS to anything, you are welcome to and this is fine, but our key aim is to understand your underlying skills.

#The tasks
We've started a single web page for the 'doodle:bug' game that is being built.

If you have a look in the issues page you will see 3 open issues. 

We would like you to spend about 2 hours trying to resolve these issues as best you can.

Please also note that we would like you to improve the quality and consistency of code as you go along.  We will have a look at the changes to see anything you do.

If you get stuck we suggest you move on.  We welcome any accompanying notes with what you send back.  We know this is an artificial situation and you might want to explain something.

#Steps to get the project set up

The project it using [git](http://git-scm.com/) for version control.

You will need to have [git installed locally on your machine](http://git-scm.com/downloads).

Once this is set up, Bitbucket acts as your repository.  You can run the following to set up a local folder, open that folder, initiate git on that folder and then clone the project.  Make sure you use the correct path in the git remote add origin command, rather than just copy and paste - you can find it in the clone menu option too.


$ mkdir /path/to/your/project

$ cd /path/to/your/project

$ git init

$ git remote add origin https://#####your username#####@bitbucket.org/ceb-front-end-admin/doodlebug_######your firstname lowercase#####.git

$ git pull origin master


Once you have made a change you can commit it and push it back to the repo using the following:

$ git add .

$ git commit -m "Explanation of your changes"

$ git pull --rebase origin master

$ git push ‐u origin master


You only need to use the -u the first time.

#Other info

The project is based on [HTML5 Boilerplate](https://html5boilerplate.com).

You will probably need to run via a local web server such either via dev tools that have their own (Brackets, WebStorm, IntelliJ etc.) or a local one (Xampp etc.).

We only require support of the latest version of Chrome.

Please commit regularly with clear and concise messages about what you have done.

Once you have finished please let your consultant know and they will inform us.

At that point we will remove your rights, assess the code and hopefully then see you face to face to discuss what you did and get your working with the team to do some more coding together.
