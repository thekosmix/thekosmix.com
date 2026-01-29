---
layout: post
title:  "How to build and host your blog free forever"
author: sid
categories: [ Tech ]
image: assets/images/blog.webp
---

Blogging is a soothing way to share you experiences and opinions with the world. 

Many people want to do it with a lot of features like comments, chat, albums etc, but their cost can mount up for individual services. I'll share how I run multiple blogs that too for free with the features mentiond above and some more. I only pay for domain names and nothing else.

## Get (Buy) a domain name
I use [GoDaddy](https://godaddy.com) to get the domains as their UX is simple comapred to others I've used in past. This is the only money you'll have to spend. Also, GoDaddy provides free website creator tool as well which you can explore to create your own blog.

## Create a blog
While there are multiple online tools like wordpress, I prefer static site generators like [jekyll](https://jekyllrb.com/). I found it simple to work offline, easy to setup, update themes and adding plugins for a lot of things. The [installation](https://jekyllrb.com/docs/) is also pretty simple.

## Add features

#### Comments by readers
Use [Disqus plugin](https://disqus.com/) to add comment functionality. Disqus is widely used and it doesn't reuire you to have a loging feature on your blog for your readers to comment on them. Your users can use their own email and social profile to login and comment on your blogs. It also provides moderation so that you can protect your blog from showing spam and scam content. 
```
disqus: 
  name: 'thekosmix'
  comment: 'enabled'
```

#### Photo album with carousel
This is interesting as you can use a public album created on your google photos to add as an album on your blog. No need o upload/download photos anywhere. I use [publicalbum](https://publicalbum.org/blog/embed-photos-slideshow-carousel-widget) for that, it provides a good carousel widget out of your public albums. All it takes is a public album URL and gives out the code for album within few seconds. You can change the album cover, remove the photos, change dimension and much more.

#### Chat for your readers to reach you
I use [Zendesk Sunshine Conversations](https://app.smooch.io/login) (formerly Smooch) to integrate a chat interface on my blog. With just few lines of code additions and some configuration, you'll get an end-to-end chat support to be integrated on every page of your blog and backend to reply to your customer with slack.

#### Social share and like buttons
Everyone wants to enable their blog to be shared and liked and with [Soopr](https://www.soopr.co/) you can get that with just one line of integration. It provides one click sharing and also keeps a like count without you having worried about maintaining a database for the same.

#### RSS feed and Search
Again, it's super easy with jut 2 plugins, your rss feed automatically gets generated and the web search s powered by lunr.js which is incredible at indexing static blogs.
```
plugins:
  - jekyll-feed
```

#### Adding multiple author
You can host your blog code on github as public or private code reporsitory and the authors can give you a pull request for the blogs they would want to add. Mine is hosted on github public. In fact the author's profile pics are taken from gravatar, so no need to maintain them as well. 
```
authors:
  sid:
    name: Siddharth
    display_name: Siddharth
    gravatar: 744cc0eec84c2f48966a7da5be45817c
```

#### Google: SEO, Analytics and Ad-Sense
Well, there's no harm in monitoring your content, but first it has to be SEO freindly, then you cando analytics on it and then monetise it. For SEO, it needs to have good content, sitemap and multiple other thigs like og link, tags, etc. jekyll provides it all with few plugins.
```
plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-seo-tag
```
![placeholder](/assets/images/seo-1.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}
![placeholder](/assets/images/seo-2.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

Now the blog is ready with all the features, let's host it.

## Host and point your domain to it.
Again there are multiple online resources like github-pages, netlifly etc, but I prefer Firebase Hosting. Few things that stood out for me were 1. Good integration with Google Ecosystem - Analytics, Ad-Sense, Tag-Manager
2. Local testing with `firebase-cli` and test environment hosting are just one command away.
3. Domain and project management is super easy, you can host multiple blogs and site with one single account.
4. Free SSL certificate for all your domains
5. Reverting to an older version in case you made any mistakes is again just one-click.
6. ... and many more.

## Free live samples to make your life easy
I have 2 blogs and 1 website hosted, feel free to copy the code and give it a try for yourself.
1. [Personal Blog](https://www.thekosmix.com/) - [Code @ GitHub](https://github.com/thekosmix/thekosmix.com)
2. [Travel Blog](https://www.wanderindia.blog/) - [Code @ GitHub](https://github.com/thekosmix/wanderindia.blog)
3. [Past venture](https://www.strollup.in/) - [Code @ GitHub](https://github.com/thekosmix/strollup.in)

PS: This blog was created, tested and hosted completely from an [Android tablet running termux](/linux-terminal-on-android-phones-a-dream-come-true/)