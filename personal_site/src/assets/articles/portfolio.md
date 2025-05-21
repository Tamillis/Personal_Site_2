## Professional Work

Professsionally, I've worked as a developer since just before returning to the UK in 2022. If you want to know more about my professional career and personal travels, please see [my about page](/about).

I am the sole developer for Downey Designs Ltd. here in the Jewellery Quarter in Birmingham, ensuring both steady progress and modernisation of the site, new features, bug fixes and system maintenance. A large part of the latter is administration of the remote Windows Server we run through HostingUK, and all other IT tasks here in the office. As such I spend just as much of my time in Visual Studio coding C# for ASP.NET MVC as a I do writing SQLServer queries on the database or updating the front end in my custom Javascript framework. I'm also responsible for managing accounts and access in Microsoft 365 Admin; installing, uninstalling and setting up software and hardware in the office (phones, computers, scanners etc...); and much more.

The main thrust of my role is in creating new and replacement pages for the website (which doubles as our store-front presence as well as internal administraiton platform) from older versions at various stages of .NET history, in order to one-day transition to modern .NET (that would be, at time of writing, .NET9), as well as providing new functionality for the office, our parent company and the stores on the highstreet.

Before this, I worked as a C# trainer at Sparta Global, where I taught others the techniques of development (and automated testing). Working at Sparta Global, as a trainee and primarily as a trainer, I was involved in many demonstration projects for the various cohorts who were producing them to demonstrate their skills practically.

Unfortunately all of the above is not something that can be shown. My SpartaGlobal account has since become inaccessible to me and for security reasons the pricate repo for my current work is not something I will share. As such, I've decided to put together a few publically available demo projects, providing a link to my public github repositories.

## Github Projects

### This Site ("Personal Site 2") - Vue3 Demo and General Website Building Expertise

The immediate and most illuminating project is the repo for this site itself! It is of course supposed to be a demonstration of my skills, as the landing page's terminal described. It began life as a demonstration of my free-lance learning, and therefore my ability with my chosen stack: VueJS, PHP and MySQL. 

It has been steadily worked on ever since (mostly as a vehicle for my own personal projects in my personal life). Two of these projects are hosted here and doubles as demonstrations. My own version of the "World's Greatest Roleplaying Game" D&D is called [PEDD](/PEDD) and is a detailed demonstration of my command of using VueJS. My worldbuilding project is called the "Materium Existentiae", and the custom-built Wiki for it can be found here: [mewiki](/mewiki). It, and other articles on this site (including this portfolio) make use of markdown files and a python script that is my own simple CMS. This exposes server-hosted markdown files to a vue component able to load the marked down using `Marked.js`.

I also use this site to display my graphics programming, as can be seen by the home page's faux terminal, the snowflakes gently falling behind me, and the spinning globe on my [About](/about) page: using JS libraries (the Canvas API, ThreeJS, P5.js etc.).

Check out the source code for this site [here](https://github.com/Tamillis/Personal_Site_2).

### Restful API - the /api endpoints of this site
Written in PHP as the backend to my [PEDD](/PEDD) project.

See the code here: (TODO GITHUB LINK)

This includes an admin page that is locked behind a login system, but see a screenshot of it here:

<img alt="PEDD admin page" src="/src/assets/peddadminpage.jpg" />

### MyTools - Vanilla JS Expertise

This repository hosts my own custom JavaScript framework, as well as a number of smaller projects I've used professionally. It primarily demonstrates my fluency in vanilla javascript, but also my ability to tackle and produce complex tools that I actually use on a daily basis.

`Tablemaker.js` is the most important of these tools (the above mentioned framework), which is designed to easily produce DOM elements to represent and manipulate tabular JSON data.

Find it [Here](https://github.com/Tamillis/MyTools) and the Tablemaker README specifically [Here](https://github.com/Tamillis/MyTools/blob/main/TableMaker/README.md).

### Salvage Union Character Sheet - URL Storage Demo

Hosted on the [/SalvageUnion](/SalvageUnion) endpoint, is a simple page that demonstrates my at a serverless technique storing data dynamically in the URL. This also gives the ability to easily save and share your character sheet with friends. It is a self-contained Vue3 app as well, as a short demo of that and also the simple fact I found it the easiest to do.

### PostIt - C# .NET 8 ASP.NET MVC & Razor Pages Demo

PostIts is a demonstration of the core capabilities that I would teach others to have (combining both the C# Developer and C# Automation Tester streams). Using C# ASP.NET, Entity Framework, SQL Server, NUnit, SpecFlow, Razor pages and SOLID programming practices. It also demonstrations techniques like the creation of a service layer (to allow for better testing) as well as integration testing through Selenium, a web scraper that'll test the site itself, and Postman to test the API calls.

The site itself is supposed to be a simple clone of twitter, allowing users to register, log in, make posts that will be seen by others, comment on others' posts and like / unlike posts. The main posts are also ordered based on an *algorithm* (it's very simple, a weighting of recency and number of likes only ^^).

Greater detail, and an in-depth walkthrough of the process of creation by following a particular User Story from inception to implementation, can be read in the README of the project.

Find it [Here](https://github.com/Tamillis/PostIt)

### PEDD Powers Editor - PHP Demo
A tool to help me continue to build my game PEDD, this editor was built in 1 work day (about 8 hours) out of simple HTML/Tailwind CSS/Vanilla JS and a PHP backend. It demos (and allowed me to polish the rust off of) my PHP skill's in producing both clean code, but also demo'ing class-based usage and the controller pattern to handle CRUD operations. It also does session based log in.

I'm currently working on better features, more refactoring and integration into my main website (i.e. this one). But this demo is purposefully left as is to show what I can do in a day.

Find it Find it [Here](https://github.com/Tamillis/PEDD_Powers_Editor)

### Github Link
If you're interested in Laravel, React (via Gatsby) and my other public projects please find them all [here](https://github.com/Tamillis?tab=repositories&q=&type=public).