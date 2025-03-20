---
layout: post
title:  "Cost saving hacks and tools for early stage startups"
author: sid
categories: [ Tech ]
image: assets/images/cost.jpeg
---
Most early stage startups (bootstrapped, pre-seed or seed) spend money on different aspects. Often times the biggest 2 are:

1. AWS Infra cost and maintenance **[Tech]**
2. Third party services for email/marketing/user-engagement **[Business]**

Many times while setting up services people tend to use tools they either come across online portals or they have already used in their previous organisations.  These tools are generally costly in terms of the resources they use or time they cost to maintain/manage. 

I also went through a similar journey, but during that time, I decided to build a lot of tools for similar use cases.

# Tech use-cases

### Problem: CI-CD Tools
Jenkins is a great CI-CD tool which does the following  
1. Take backup of prev build for easy revert
2. Checkout code from repo
3. Build/compile the code
4. Deploy on stg/dev
5. Run regression (or manual tests on stg/dev)
6. Deploy on production (elastic-beanstalk)

and more. But it requires a huge infra (as it runs on tomcat and can't run it on micro or nano instance). 

##### Solution: Jenkins-cli
I created a few bash scripts and deployed them (added through AMI) on my dev server, which were doing exactly the same. I collectively call them [Jenkins-cli](https://github.com/thekosmix/AWS-Deploy) as they were doing the exact same thing.

### Problem: Alerting on Errors or Exceptions
Techies tend to setup ELK (elastic search, logstash, kibana) to collect logs and setup a query on it to parse errors/exceptions and send alerts on slack/email. This again requires ELK setup which again costs a lot of money and resources.

##### Solution: ExceptionTracker
I created another solution again using bash-script called [ExceptionTracker](https://github.com/thekosmix/AWS-ElastickBeanStalk/blob/master/exceptionTracker.sh). This script is invoked every few seconds using `cron`, `greps` the mentioned errors from application log files and mails them to desired group. `mail` function runs out of the box on EC2 instances so no need to setup a mail server or use SES for this.

### Problem: Serving different size images
Today, devices have varying resolutions and for different devices we would want to serve different size images, manually resizing images and uploading them on `S3` backed by `cloudfront` takes a lot of time. What if there was some tool which dynamically does this?

##### Solution: php-image-resizer
If you already have a `php` infra (for your blog), you can utilise that or can setup an `aws lambda` for this trigger. I created [php-image-resizer](https://github.com/thekosmix/php-image-resizer) backed with `php` with `virtual hosting` on existing infra, which dynamically resizes the image, uploads them on S3 and caches them on cloudfront.

### Problem: SSH to dynamic IP servers
Elastic beanstalk instances when they are behind load-balancer, their IPs are dynamic, to ssh into them is a nightmare as you'll have to login to AWS console to get their public IP first and add inbound policy and then SSH to them.

##### Solution: Bash scripting with AWS cli
AWS cli is a very powerful tool, it exposes almost every functionality (and more) you get through AWS console. I created [another script](https://github.com/thekosmix/AWS-Deploy/blob/master/sshprod.sh) which gets the dynamic public IPs of the instances attached to a load balancer of elastic-beanstalk, adds inbound policy for SSH and logs into them.


# Business use-cases

### Problem: Customer support through chat
Customer support through chat on your product has 3 main components:
1. Customer Front end
2. Backend to handle messages
3. Agent dashboard

Setting it up again required either paid 3rd party solutions or building it would have consumed time. 

##### Solution: Smooch.io with Slack
1. [smooch.io - acquired by Zendesk](https://www.zendesk.com/platform/conversations/) for Customer front-end
2. Webhook integration with slack to handle messages
3. Slack creates different channels for different customers as agent dashboards

The chat is still live on my [travel blog](https://www.thekosmix.com/), if you want to give it a try.

### Problem: Blog for SEO
In the early days, for a good footprint, you try to create a blog. You choose Wordpress as it provides a panel for the content creators you hire. But again setting up `php` server can cost money and resources.

##### Solution: Jekyll
Jekyll is a static site generator written in Ruby and supported by simple markdown which is far easier to learn/work with. It provides lots of plugin for themes, SEO, redirections, blog-search through [lunr.js](https://lunrjs.com/), social-share, and a lot more. [dev.to](https://dev.to/) is also based on [jekyll](https://jekyllrb.com/). You can host jekyll blog on github pages, S3, Google hosting for free as jekyll generates static html pages.

My [travel blog](https://www.wanderindia.blog/) is created in jekyll and hosted on [Firebase hosting](https://firebase.google.com/docs/hosting) (for free).

### Problem: User engagement on Social media
Early stage startups generally hire social media managers to post content on their social media pages from time to time to keep their users engaged. While this strategy works, but there are lot of overhead and the entire process is manual.

##### Solution: Zoho social
[Zoho social](https://www.zoho.com/social/) is perhaps the cheapest solution (or free based on your usage), using which you can automate posting on multiple social media channels and websites.

### Problem: Email hosting (and workspace in general)
Microsoft and Google workspace solutions can be costly for early stage startups. And generally complete suite is also not required.

#### Solution 1: Zoho mail
[Zoho mail](https://www.zoho.com/mail/zohomail-pricing.html) is free forever for 5 users (earlier it was 25, I still have that account). You get complete email solution along with admin capabilities and mobile apps. And even if you exhaust this free limit quota, their per seat cost is way cheaper than that of Google/MS's. 

#### Solution 2: Google Workspace Essentials
[Google Workspace Essentials](https://workspace.google.com/intl/en_in/essentials/) provides you a way to use Google's productivity/collaboration suit (Drive/Docs/Sheet/Slides/Chat/Meet) for free forever for an unlimited number of users(but with only 15 GBs of space). You can use these tools with your existing work email which you might have gotten from your domain provider or from some other mail provider. 

I love to automate a lot of processes and do things frugally. Reach out to me at [Linkedin](https://www.linkedin.com/in/kumarsiddharth/) if you have any use-case for which you want a cost effective solution.