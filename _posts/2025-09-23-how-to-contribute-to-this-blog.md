---
layout: post
title:  "How to contribute to this Blog"
author: sid
categories: [ Tech ]
image: assets/images/blog-contribution.png
---

I have been asked how to contribute to this blog and my other [travel blog](https://www.wanderindia.blog/). So I thought of writing a blog about it. 

## Blogs to contribute
You can contribute to either of the blogs:
1. [Tech Blog](https://github.com/thekosmix/thekosmix.com)
2. [Travel Blog](https://github.com/thekosmix/wanderindia.blog)

## Getting the existing blog to run locally
1. [Install jekyll](https://jekyllrb.com/docs/installation/) - A ruby based static website builder
2. Clone any of the above github blogs
3. run `bundle exec jekyll serve` from inside the folder to run it locally
4. Open [127.0.0.1:4000](http://127.0.0.1:4000/) on your browser to see the entire blog on your local server

## Adding a new blog
Since the entire blog is in Markdown, you can utlisie [markdown's awesome syntax](https://www.markdownguide.org/cheat-sheet/) to be creative with your blog
* Add a new md file with format `YYYY-MM-DD-your-awesome-blog-url.md` in `_posts` folder. 
    1. Ensure the date is not in future, else the blog won't be visible.
    2. The `your-awesome-blog-url` is the url you'll see for this blog, so ensure it's meaningful
    3. You can copy the last file in the `_posts` folder and rename it.
* Add all the images you want in the blog in `assets/images` folder
    1. There would be a header image at the top of every blog, Eg: `image: assets/images/blog-contribution.png`
    2. A webp image would be preferred and most important, try to use original non-edited photos taken by you.
    3. Ensure images arre lightweight, you [compressors](https://imagecompressor.11zon.com/en/image-compressor/) to compress them
    4. See [this example](https://www.thekosmix.com/are-super-apps-really-dead/) on how to add multiple images in the blog
* Add an album using Google Photos
    1. Choose the photos you want on the blog and create a public shareable album
    2. Use [PublicAlbum](https://www.publicalbum.org/blog/embed-photos-slideshow-carousel-widget) to create embed code.
    3. Set the Slide show delay at 3(s).
    4. Copy to clipboard and remove the `<script></script>` line as it's already added in a universal config.
    5. Now lets convert the media files to `webp`. Change the last parameter of the `<object></object>` tag from `w1920-h1080` to `w960-rw-h720`. Yup, this will convert the media to webp format which boosts the SEO as well.
    6. Change the `data-link` and `data-description`
    7. It will finally look like something below. Paste the entire div at the bottom of the blog.

```
<div class="pa-carousel-widget" style="width:100%; height:480px; display:none;"
  data-link="https://www.holidify.com/places/diu/sightseeing-and-things-to-do.html"
  data-title="Diu, Dadra and Nagar Haveli and Daman and Diu"
  data-description="Diu, a small island off the coast of Gujarat, India, is a captivating blend of Portuguese colonial charm and Indian vibrancy."
  data-delay="3">
  <object data="https://lh3.googleusercontent.com/pw/AP1GczMb3L65DkghtyFcOJnxdHC7JitbWM7nFpoFNma8DXxm2lnWcFZXq3ueRYhxhJEW7A_ebdtB6SVBY8mINVIhM4lgJ2WQMr--cfqZSarCgVmMOh9t5Kbr=w960-rw-h720"></object>
  <object data="https://lh3.googleusercontent.com/pw/AP1GczPBrLapjgbZvzt1u_kvTaQBJokhrhD0uIr_eCqFKckwXehlYgL0Pp82nUFd3x9Kn4jPfFuyd0NvfGO5ewvnMzm8U_uGWEsk1jgibjqyWwlkAEnQaCtk=w960-rw-h720"></object>
  ...
</div>
```    

* Add yourself as an Author
    1. Edit `_config.yml` to add yourself as an Author
    2. Add `author: <you>` in the above blog to see your contribution as an author

```
authors:
  sid:
    name: Siddharth
    display_name: Siddharth
    gravatar: 744cc0eec84c2f48966a7da5be45817c
    email: 
    web: https://thekosmix.github.io
```

* Run and test locally as mentioned in the above section

## Merge it with main blog
Now that you have created and tested a blog locally, it's time to get it live on main domain.
1. Create a PR/MR (Pull Request/Merge Request) on any of the blogs
2. I'll get a notification and will do CR (Code Review) and will either merge it or provide comments
3. Once it's merged in main, it will start appearing on the main domain within 5 days.

## Perks
1. Once merged on the main domain, you can start sharing it on different platform.
2. You'll get an email id with `you@domain`
3. You'll leran blogging with static site
4. You'll get to share your experience with the world
