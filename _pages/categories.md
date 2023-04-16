---
layout: page
title: Travel Categories
permalink: /category.html
---

<div class="row listrecent">
{% for category in site.categories %}
<div class="section-title col-md-12 mt-4">
<h2 id="{{ category[0] | replace: " ","-" }}"> <span class="text-capitalize"><a class="smoothscroll" href="{{site.baseurl}}/category/{{ category[0] | downcase | replace: " ","-" }}/">{{ category[0] }}</a></span></h2>
</div>


{% comment %}
    {% assign pages_list = category[1] %}
    {% for post in pages_list %}
    {% if post.title != null %}
    {% if group == null or group == post.group %}
    {% include postbox.html %}
    {% endif %}
    {% endif %}
    {% endfor %}
    {% assign pages_list = nil %}
{% endcomment %}


{% assign group = nil %}
{% endfor %}
</div>