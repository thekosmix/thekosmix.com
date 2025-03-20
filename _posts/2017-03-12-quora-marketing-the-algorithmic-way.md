---
layout: post
title:  "Quora Marketing: the algorithmic way"
author: sid
categories: [ Tech ]
image: assets/images/quora.jpeg
---
What does it take to become [the most viewed writer](http://www.quora.com/profile/Siddharth-Kumar-5) on Quora? The answer is "A simple Math" and of course a little bit of creative writing. 

I've tried it with my previous startup: [StrollUp](https://www.strollup.in/) and here is my learning:

![placeholder](/assets/images/quora-top-viewer.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

### Why to answer/write on Quora:
* Quora has gained (and still gaining) a lot of popularity, recently. And that's one of the reasons to use it as a B2C marketing channel.

![placeholder](/assets/images/quora-views.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

* The questions/topics are followed by the people who you want to target through other marketing channels, so its the best way to reach out to your targeting customers.
* **Quora Digest:** Questions and their answers are sent to people in their mail box by Quora, it's called Quora digest. Getting a click from Quora digest has a very high chance compared to a mail sent by you.

![placeholder](/assets/images/quora-digest.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

* Once you become top writer in a category, people start asking questions directly to you, based on "return" (number of views/number of people following it) you can answer it and directly reach to and convert few customers.

![placeholder](/assets/images/quora-most-viewed.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

* There's a general perception that information shared on Quora is more legit compared to other knowledge sources. And once you become top viewed writer in your target category, your answer's gonna fetch customers everyday.

![placeholder](/assets/images/quora-most-viewed-rest.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

### What you need to get started:

* **Topics:** Make a list of topics you're proficient in or you want to write answers about. In my case, it was Delhi/Bangalore/Restaurant Recommendation (as you can see above).
* **Questions on these Topics:** Now, the problem is getting the questions. Easy, google it, but manually doing that will be a nightmare. I wrote a [crawler](http://github.com/thekosmix/Quora-Marketing) which did that for me.

![placeholder](/assets/images/quora-google.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

What it does is **programmatically crawl** Google with "Quora" and "Your_Topic" and gets the question links and their related question links and stats, which are required for selecting the most relevant questions, answering which will give you the maximum return.

![placeholder](/assets/images/quora-metrics.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

* **How to select the questions to answer:** After crawling the links, we will apply the [_Popularity-Calculation-Algorithm_](http://pastebin.com/tusNyLfm) to sort the links according to relevance. Here's an example, how we did it at [StrollUp](https://www.strollup.in/).

![placeholder](/assets/images/quora-ques.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

* How to write good answers: Always remember, images speaks thousand times louder than words. If you're writing about ambience of a place, do include it's image. Second, try to put numbers/stats if required. Putting numbers will fetch a lot of attraction compared to a simple descriptive answer. Third, share your personal story (or your friend's or your friend's friend's) related to the topic, it makes your article legit. Fourth, change your Bio according to the topic/question.

![placeholder](/assets/images/quora-post.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

* **Get them upvoted:** Here comes the time to take advantage of your friend circle. Get your friends to upvote your answers, everyone does it and this is what will give your answer the initial boost it requires to get to your target customers.
* **Track it with Google Analytics:** and you'll be surprised to see the results, as were we. Soon after this exercise, Quora became one of our main marketing channels.

![placeholder](/assets/images/quora-analytics.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

PS: Doing this exercise worked for me, it might work for others as well, may be with some extra effort. All your views/comments/suggestions will be welcomed.