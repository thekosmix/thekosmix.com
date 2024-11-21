# thekosmix.com
Jekyll code for website [thekosmix.com](https://www.thekosmix.com/)
Jekyll creates a static blog with many features like
 - [Pagination](https://jekyllrb.com/docs/pagination/)
 - [Comments](https://disqus.com/)
 - [Chat](https://www.zendesk.com/platform/conversations/)
 - [Photo Album](https://www.publicalbum.org/blog/embed-photos-slideshow-carousel-widget)

## installation and running locally
 - [Install ruby](https://www.ruby-lang.org/en/documentation/installation/) 
 - [Install jekyll](https://jekyllrb.com/)
 - Go inside the folder thekosmix.com and
   - First install dependancies by running ```bundle install```
   - Then run command ```bundle exec jekyll serve``` to run the local server to serve the blog pages
 - Open your browser and go to [http://localhost:4000/](http://localhost:4000/) to view the pages

## deployment on firebase
 - checkout the [thekosmix/firebase](https://github.com/thekosmix/firebase) repo and setup firebase-cli
 - ensure that thekosmix.com and above repo are in the same folder and at the same level
 - Go inside the folder thekosmix.com and run command ```bundle exec jekyll clean && bundle exec jekyll build```
 - Go inside the folder firebase and run command ```firebase deploy --only hosting```
