---
layout: post
title:  "Tired of RESTing? Let's do GraphQL"
author: sid
categories: [ Tech ]
image: assets/images/graphql.jpeg
---
## Why "tired of RESTing"?
The way REST works is just great. Different endpoints for different resources, looks neat. But when we have to give out a composition of these resources, we face these three problems:

### Multiple http calls to the API servers:
Eg: Consider a micro-blogging platform for example. When you have to display a user's detail on left pane, his/her posts in middle and below them the comments, you have to hit the server thrice (at least):

```
To get user's details:    /api/user/{user_id}
To get his/her posts:     /api/user/{user_id}/post 
To get comments on posts: /api/user/{user_id}/post/{post_id}/comment
```

![placeholder](/assets/images/graphql-api.jpeg){:style="display:block; margin-left:auto; margin-right:auto"}

Although, if we have to get these details in a single call from DB, we might use join on these three resources and get them in one, but it won't be RESTful.

### Way more data transfer than required:
In example above, we just had to display user's name, handle and profile pic, but the user API gives way more data (email, phone-number, date-of-birth, etc) out of which we use only the required ones. More data transfer over network means:

* More latency
* More processing on server side in serializing the data
* More processing on client side in deserializing the data

### API versioning and maintenance:
In the user API, if we have to give out some new field and deprecate few old ones, we'll have to do API versioning (keep the old version to support old clients and create a new version for new clients). In long run maintaining different versions for same resource becomes a nightmare. You have to announce when will you be deprecating old versions or force your users to update to the latest version, etc.

## What is GraphQL and how will it help if you're tired of RESTing
As the name suggests, it's a query language developed by facebook (who else), but for client-side. Just the way an API server queries a database-server, clients can now query an API server with it. Doesn't this sound amazing!! Let's see how GraphQL saves us from the nightmare of "RESTing".

## Multiple http calls to the API servers:
With graphQL you can get all the resources in one single http call, just the way you do in server side by using joins and getting all the data in one SQL.

```
{
  user(id: 10) {
    id
    name
    handle
    profilePicUrl
    post(last: 5) {
      heading
      postUrl
      comment(last: 2) {
        description
        commentBy
      }                     
    }
  }                
}
```

Above is an example of a GQL for displaying last 5 posts with recent 2 comments of a user with id 10. As you can see we got all the 3 resources in a single http call.

### Way more data transfer than required:
In the example above, we can add/remove the fields we want. Thus the data transfer over network is controlled by client and not by server, saving both processing and network time.

### API versioning and maintenance:
The query part is done by client, so client can add and remove the data it wants as long as it is present on server side without changing API version.

## Let's do GraphQL (with Java)
After reading a lot about it, I started [experimenting with it in java](https://github.com/thekosmix/GraphQL-SpringBoot) using spring-boot and I found it to be super awesome for following reasons (apart from the ones mentioned above):

* The way Spring's CrudRepository has removed the need of writing SQL, [GraphQL-spring-boot](https://github.com/graphql-java-kickstart/graphql-spring-boot) has removed the need of writing API layer (Controller). ie. You just have to write the ORM layer and the entities will be exposed. You can always override it to create your custom API layer.
* Integration with existing projects is quite easy. ie Your REST apis and GraphQL endpoints can go together. No need to write from scratch.
* [GraphiQL](https://graphql.org/swapi-graphql/): A browser based GraphQL IDE where you check all your resources and their fields and debug queries that are going to be sent to server.
* No need to write different controllers (apis) for same resource based on what fields do you want to use and where do you want to use.

[GraphQL-SpringBoot](https://github.com/thekosmix/GraphQL-SpringBoot) is the implementation of the micro-blogging example mentioned above. It has both REST apis and GraphQL endpoints for comparison. Built with Spring-boot, gradle, spring-jpa, jetty, etc, it's a ready to run GraphQL implementation in java.