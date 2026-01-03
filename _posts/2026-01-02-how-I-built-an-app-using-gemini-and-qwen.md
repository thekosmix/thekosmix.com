---
layout: post
title:  "How I built an app using Gemini and Qwen"
author: sid
categories: [ Tech ]
image: assets/images/gemini-qwen.png
---

In my [previous post](/how-to-build-and-use-gemini.md-with-gemini-cli), I explored how to use `gemini-cli` with a `GEMINI.md` context file to refactor an existing [PHP project](https://github.com/thekosmix/interview-street). It was a fun experiment that proved LLMs could handle legacy codebases when given the right context. But porting code is one thing; building a full-fledged application from scratch is a different beast.

So, I decided to up the ante. I wanted to build [Activity Logger](https://github.com/thekosmix/activity-logger), a new mobile application, from the ground up. And I wanted to do it using AI assistance, specifically starting with Gemini.

## The Project: Activity Logger

The goal was to build a React Native (Expo) application for any entity (Govt, Private) to track activities in their administrative regions and organizations. Think of it as a transparent work log where employees simply post updates.

Here is a quick rundown of the features (as defined in the [PRD](https://github.com/thekosmix/activity-logger/blob/main/PRD.md)):
*   **Role-based Access**: Separate flows for Employees and Admins.
*   **Activity Feed**: A scrolling feed of employee updates with images/videos.
*   **Location Tracking**: Background location capture using OpenStreetMap to visualize movement during work hours.
*   **WorkLog**: A simple clock-in/clock-out mechanism.

The tech stack was modern but standard: **React Native (Expo)** for the app, **Node.js** for the backend, and **SQLite** for the database.

## The Process: Starting with Gemini

I started with the same approach that worked before: `gemini-cli`. I fed it the context and asked to create PRD, [TRD](https://github.com/thekosmix/activity-logger/blob/main/TRD.md) and GEMINI.md files, it then scaffolded the project structure.

> "Create a React Native app with Expo and a Node.js backend based on the PRD and TRD..."

Gemini started strong. It understood the requirements, suggested a folder structure, and helped me set up the initial boilerplate. It generated the `package.json`, the basic Express server, and the initial Expo screens.

However, as the project grew, I hit a wall.

### The Problem: Hitting the Limit

The "free tier" of Gemini is generous, but it has its limits.
1.  **Rate Limits**: As the context window grew (with more files and code), I started hitting rate limits more frequently. Development slowed to a crawl as I waited for quotas to reset.
2.  **Context Fog**: After a long session with many back-and-forth prompts, some responses became "lazy"—omitting code or hallucinanting imports.

I was stuck. I had a half-baked app and a "Quota Exceeded" error.

## The Rescue: Enter Qwen

This is where open models came to the rescue. I switched to **Qwen** (specifically Qwen 2.5), running it to pick up where Gemini left off.

Why Qwen?
*   **No "Free Tier" Limits**: Running locally or via an affordable API meant I wasn't artificially throttled.
*   **Coding Proficiency**: Qwen is surprisingly good at coding tasks. It followed the complex instructions for the OpenStreetMap integration and the background location service without skipping a beat.

I used Qwen to:
1.  **Implement the Location Logic**: The complex background tracking that requires permissions and state management.
2.  **Fix Bugs**: When Gemini left some "TODOs" or minor syntax errors, Qwen quickly identified and fixed them.
3.  **Complete the Admin Dashboard**: The admin side required mapping employee locations on OpenStreetMap. Qwen generated the complete component for rendering the map and markers.

## The Result

The app works! Employees can log in via OTP (simulated via Firebase), post updates with photos, and their location is tracked in the background. Admins can view these tracks on a map.

### Key Takeaways

1.  **Proprietary Models for Setup**: Gemini (and similar models like GPT-4) are excellent for high-level architecture and initial scaffolding. They "understand" the big picture very well.
2.  **Open Models for Execution**: When you hit limits or need to grind through specific implementation details without worrying about token costs, models like Qwen are invaluable. They have closed the gap significantly.
3.  **Context is King**: Just like with `GEMINI.md`, keeping your context clear is crucial, regardless of the model you use.

If you are hitting limits with your main AI assistant, don't be afraid to tag in an open model like Qwen. It might just save your project.
