---
layout: post
title:  "How to build and use GEMINI.md with gemini-cli"
author: sid
categories: [ Tech ]
image: assets/images/gemini.png
---

[Gemini](https://gemini.google.com/) is not just a single chatbot; it's a family of powerful, multimodal AI models designed to understand and generate content across text, code, images, and more. 

While many people interact with Gemini through its web interface, there's a lesser-known but incredibly useful tool for developers: the [Gemini-CLI](https://github.com/google-gemini/gemini-cli). This is an open-source command-line interface that brings the power of Gemini directly into your terminal. 

> LLMs are good for prototyping from scratch, but not for working with existing codebase

Well, I wanted to try it for busting this myth/rumour. So I chose an existing project, [Interview-Street](https://github.com/thekosmix/interview-street), a very old php-mysql based platform for recruiting and assessing candidates. It's so old that it uses `mysqli` instead of `PDO` (`php` folks would understand and be shoccked while learning this). 

I wanted to get 2 things done
1. Get it working with `php 8`
2. Create interface to use `sqlite` as embeddded database in the application itself 
3. Port the seed sql file to sqlite file

### First few failed tries without GEMINI.md
I installed `gemini-cli` and gave it the context one of them is mentioned below
> The project, interview-street is an implementation of job portal and an online compiler. Currently it uses mysql for data storage. I want to provide an option/inteface for switching between mysql and sqlite with sqlite being default. It will require changing connection strings and creating interface for accessing databse. Please copy all the entries from oprp.sql to oprp.db as well to test it with sqlite. Once done, run this project with php server. 

Gemini did a lot of thinking, lot of changes, but after multiple tries, it was not able to do so. I was on free tier and ran out of quotas everytime.

### A success with GEMINI.md
I did some research and found GEMINI.md to be helpful in giving directions to gemini on how to think and execute prompts. Being a `lazy engineer`, I asked gemini-cli to create it for me, and also create a PRD by going through the project foolder structure and boy, did it do it! 

After it created the files, I modified them a little to accommodate more instructions. And gave the following prompt:

> The project, interview-street is an implementation of job portal and an online compiler. Read the content of the folder oprp (Online Platform for Recruitment and Preparation) and create 2 files: 1. PRD.md, a Product Requirement Doc which captures all the feature around the project, there are some features also mentioned in README.md. 2. GEMINI.md, a file which initiates the context for gemini-cli, so that it doesn't need to full scan the project on every revamp. It should contain folder level details and include an initial prompt "You're a php-mysql expert who understands database connections and embdded sqlite along with system calls through shell_exec"

> The project uses mysql for data storage. You can see oprp.sql in the root folder. I want to provide an option/inteface for switching between mysql and sqlite with sqlite being default. It will require changing connection strings and creating interface for accessing sqlite databse, oprp.sqlite. Once done, exit.

After this, I ran the project and voila! It ran, the login page was in front of me, powered by sqlite, but as soon as I logged-in, bam, errors! So I gave one last prompt. Nothing fancy, just the error:

> The update was success to sqlite, now the project is using sqlite file. But when I'm running the online compiler, it's giving following error, seems this also needs to be changed to use sqlite, "Fatal error: Uncaught TypeError: mysqli_real_escape_string(): Argument #1 ($mysql) must be of type mysqli, null given in /home/thekosmix/git/interview-street/oprp/online_compiler/_php/function.php:24 Stack trace: #0 /home/thekosmix/git/interview-street/oprp/online_compiler/_php/function.php(24): mysqli_real_escape_string() #1 /home/thekosmix/git/interview-street/oprp/online_compiler/comp_run.php(391): insertlink() #2 {main} thrown in /home/thekosmix/git/interview-street/oprp/online_compiler/_php/function.php on line 24"

And, gemini-cli understood that it has to go to every file and make the [changes](https://github.com/thekosmix/interview-street/commit/09d67ff97493c4e52cebf5842f2322b1664944f1) after creating interface and it did!! And the application was completely ported to use sqlite!!

And all this
1. Without even writing signle line of code
2. With free-tier
3. From command-line

### Last but not the least
* I used some other tool, [RebaseData](https://www.rebasedata.com/convert-sql-to-sqlite-online) for porting sql to sqlite to save on context/resources on Gemini free-tier.
* It was a very simple task, but my main aim was to test an LLM's capability with an existing project.
* Checkout the project, [Interview-street](https://github.com/thekosmix/interview-street) for yourself and do go through GEMINI.md
* Do suggest, if there's a better approach :)
