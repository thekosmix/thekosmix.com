---
layout: page
title: Trips Yearbook
permalink: /trips-yearbook/
---

<div class="row listrecent">
{% assign sorted_dates = site.posts | where:"hidden",nill | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for sorted_date in sorted_dates %}
<div class="section-title col-md-12 mt-4">
<h2 id="{{ sorted_date.name }}"> <a class="smoothscroll" href="{{site.baseurl}}/trips-yearbook/{{ sorted_date.name }}/">{{ sorted_date.size }} places visited in {{ sorted_date.name }}</a></h2>
</div>

{% endfor %}
</div>