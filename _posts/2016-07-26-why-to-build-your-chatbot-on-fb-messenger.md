---
layout: post
title:  "Why to build your chat bot on facebook messenger?"
author: sid
categories: [ Tech ]
image: assets/images/fb-messenger.jpeg
---
Many have asked this question and many have answered it on this topic. 

Some people think they will gain access to a wider user base, for free, some think they will gain access to user's information, without getting the user to login and some think chat bots are going to replace mobile apps, same as mobile apps did with websites. Well for now, all of them are not entirely true, but it might be in future.

### "Why" according to fb:

<u>The people you want to reach are already here.</u> Yes (almost) all of the people or your target audience will have an fb account. But this doesn't mean that you'll reach them for free on messenger. You still have to create fb/google ads to reach to your target audience. So, messenger is like just another user acquisition channel like a blog.

<u>Now people won't need to download an app to interact with you.</u> To interact (FAQs, help, keyword based answers, etc) with you, yes they might not. But for full functionality, they still have to because the level of customization you can do in your app is currently not possible in messenger platform.

<u>What you've been sending through SMS is now sent through Messenger.</u> Now you can send transactional messages to fb messenger, but the most basic problem is Internet connectivity. When you use SMS, you are sure that your user will get the SMS. But same can't be said for the messenger.

Then **why** indeed? I'll try to answer it from a developer's perspective as I have built a messenger bot.

![placeholder](/assets/images/strollup-chatbot.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

* User Information: It's true that you are not gonna get all the information about the user who starts a conversation with you on messenger bot. But you'll get some basic information like Name, profile picture, Gender, Time zone, etc. And these information are enough to start a personalized conversation. Example: Consider a user who just started a conversation (Name: Natasha, Age: 22, Time zone: IST, Gender: Female), you can easily respond, "Good morning Natasha, that's a pretty name just like Natasha from Avengers. How can I help you today?". Compare this with "Good morning, how can I help you today?". If she is looking for suggestions for date, you can easily reply, "So you want to take him on a date, I'm so excited. Let me get the best results for you". So you see, how easy it is to personalize the messages without the hassle of logging in.
* User retention: Once a user has started a conversation with you, you'll have his/her fb id using which you can send him/her a relevant content at a later time, same as mobile app push. This comes in handy when you just have a web product where it's difficult to get the user to subscribe to browser push notification.
* User history: When a user interacts with/use an app, he/she might not remember what they did last time and they start doing the repetitive things again and again for same requirement. But with messenger bot, all the history is stored right there in conversation form. Every time a user opens it, he/she will know what were they looking for last time. Consider a scenario where you have planned a date on Sunday and you have started looking for places from Wednesday on an app which just provide listing of places with filters, you might end up checking same filters and applying same tags on Thursday/Friday/Saturday (hope you have finalized it by Saturday otherwise you are going to be dumped).
* No front-end required: I'm a back-end developer and most of the time I rely on someone else to give an interface (UI) to whatever I develop. But with messenger bot all I had to do was make payloads and hit an API and it was there. And also people are already familiar with messenger's UI. So they need not to go through understanding a new UI.
* Minimal back-end: With all the systems of post-backs, payloads, attachments, etc, you just need to populate these and hit one single API and rest is taken care by messenger platform. I have built a basic chat bot in Java which can be integrated with your existing product and it took around 4 hours, which is quite less time.
* Strong Community Support: A lot of people around the globe are working on the same platform, so it's very easy to get help from them, if you are stuck with something. And Most of the time you'll find a solution to your problem as it might have already occurred with someone else. Here's the developer's community which has been very helpful in my case.
* Wit.ai integration: If you are making pure conversational bot, it's essential to understand the intent of a sentence entered by user. This can be easily achieved with wit.ai and integration is quite easy with messenger platform. "The new wit.ai Bot Engine (early beta) can predict the next actions your bot should execute".

All the above points are my views and came from what I experienced during working on messenger bot. With messenger platform being improved consistently, some of the points might not true at a later time. For now, go ahead, explore and build a messenger bot.