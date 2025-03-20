---
layout: post
title:  "Why to use decorators in Typescript?"
author: sid
categories: [ Tech ]
image: assets/images/typescript.jpeg
---
## What are Decorators in Typescript
Just like we have [@annotations](https://www.baeldung.com/spring-core-annotations) in Java Universe (Spring), we have [@decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) in Node.js (TypeScript) universe. These 2 enable us to abstract out redundant and non business related code like caching, logging, validity of parameters and a lot more.

From [TypeScriptLang](https://www.typescriptlang.org/docs/handbook/decorators.html)

> A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

### Why to use Decorators
* Abstract out redundant code
* Keep business logic clean
* Boost developer productivity
* Keep Non-functional things like caching/logging/validations standardise across services

**Look at this basic example**

```
const getUsernameById(String userId) {
  const userName = CACHE.get("bucket", userId);
  if(!_.isNil(userName)) {
    return userName;
  }
  
  const user = UserModel.getById(userId);
  CACHE.set("bucket", userId, user.name);
  Log.info(
    method: "getUsernameById"
    key_1: "userId",
    key_1_value: userId,
    key_2: "userName",
    key_2_value: userName
  )
  return user.name;
}
```

**Using decorators, it can be reduced to**

```
@Cacheable
@Loggable
const getUsernameById(String userId){
  const user = UserModel.getById(userId);
  return user.name;
}
```

_PS: These implementations/naming can be different for others, but gist is same_

### What all entity Decorators can support
Just like Java, typescript support class method/function and property level decorators and many more:

* Class decorators: Can be used for creating components or singleton objects.
* Method decorators: Can be used for logging request response of a method, caching params and returned value, etc
* Property decorators: Can be used for validating a property value on assignment or initialisation

A detailed description can be found [here](https://www.typescriptlang.org/docs/handbook/decorators.html).

### How can I start with Decorators for my project
Trust me when I say this, it's very easy to implement. It'll be one of those projects which will give you the highest ROI on engineering investments.

It took me few hours to implement @Cache and @Log for a test project. The working project can be found [here](https://github.com/thekosmix/node-decorators). 

### What's next
To create an npm library which out of the box will support these annotations just like spring-boot. Do give a [pull request](https://github.com/thekosmix/node-decorators) if you have any suggestions.