---
layout: post
title: "The Ultimate Guide to Running Local LLMs on Pixel Phones: Droidian, llama.cpp, and Aider"
description: "Explore my journey of turning a Pixel 3a and Pixel 7 Pro into local AI servers using Droidian, llama.cpp, Qwen, Llama, and Aider for desktop coding."
author: sid
categories: [ Tech, AI, Mobile ]
image: assets/images/local_llm_setup.png
---

Recently, I embarked on a fascinating experiment: bypassing expensive cloud providers to run capable language models directly on my old and current Android devices. From repurposing a Pixel 3a to leveraging the sheer power of a Pixel 7 Pro, here's a detailed walkthrough of my local-LLM setup journey.

## What is the best way to run local LLMs on an old Pixel phone?

**To run a local LLM on an older Android device like the Pixel 3a, you should install a Linux distribution like Droidian. This provides a robust environment to compile and execute Small Language Models (SLMs) without the overhead of Android OS.**

My first foray into this project involved my trusty Pixel 3a. Instead of letting it gather dust, I decided to turn it into a dedicated micro-server. The installation process involved unlocking the bootloader and flashing **[Droidian](https://droidian.org/)**, a Linux distribution tailored for mobile devices using the Halium layer. This offered a clean, Debian-based environment perfectly suited for server operations. 

### Reclaiming Resources
A major hurdle on older devices is limited RAM and processing power. To reclaim resources on the Pixel 3a, I stripped down the OS:
- **Disabling the GUI:** I disabled the Phosh desktop environment (`systemctl disable phosh`), forcing the device to boot strictly into headless mode.
- **Removing Bloatware:** I uninstalled unnecessary pre-packaged apps and background services that consume idle RAM.
- **Tuning Swap Space:** I configured a dedicated swap file to handle the memory overflow during model loading.

Once Droidian was optimized, I successfully compiled and tested a Small Language Model (SLM). The device subsequently became a dedicated headless host for my lighter personal projects.

## How do you access and manage a mobile-hosted Linux server?

**You can access and manage a mobile-hosted Linux server like Droidian using SSH over your local network. Once the device is connected to Wi-Fi, you can install an OpenSSH server and connect to it remotely from your primary desktop.**

Managing the Pixel 3a directly on its small screen without a GUI was impossible. I installed `openssh-server`, started the service, and generated SSH keys. From my desktop, I simply ran `ssh user@pixel-ip` to get full terminal access. This headless SSH workflow made configuring the device feel exactly like managing a traditional remote VPS.

## How do you host Qwen and Llama models on a Pixel 7 Pro?

**You can host powerful models like Qwen and Llama on a modern device like the Pixel 7 Pro by utilizing `llama.cpp`. This C++ port of the LLaMA architecture is highly optimized for ARM processors and allows seamless text generation using the phone's native compute power.**

Having tasted success with the Pixel 3a, I wanted to scale up. I shifted my focus to my daily driver, the **Pixel 7 Pro**. Equipped with Google's Tensor G2 chip, this phone packs significantly more computational punch. 

Instead of replacing the OS, I leveraged **[llama.cpp](https://github.com/ggerganov/llama.cpp)** through a terminal environment like [Termux](https://termux.dev/). By obtaining the quantized GGUF versions of models like **Qwen** and Meta's **Llama**, I could load them directly into memory and start generating text. The installation process involved:

1. **Setting up Termux:** Gaining a Linux-like terminal on the Pixel 7 Pro and installing build tools (`pkg install clang make`).
2. **Cloning and Building llama.cpp:** Using `make` to compile the engine natively for ARM64 architecture.
3. **Downloading the Models:** Opting for highly quantized models (like 4-bit or 5-bit GGUFs) to ensure they fit within the device's RAM limits.
4. **Running the Server:** Starting a local API server using the `server` binary included with `llama.cpp`.

The Tensor G2 chip managed these models with surprising fluidity, making it a viable localized backend for various applications.

## How can you expose a local mobile LLM securely?

**You can securely expose a local mobile LLM server using Ngrok. By installing the Ngrok agent on the mobile device, it creates a secure, encrypted tunnel from the local `llama.cpp` port to the public internet without modifying router settings.**

To make the models accessible outside my home Wi-Fi network, I turned to **[Ngrok](https://ngrok.com/)**. Configuring Ngrok on Termux was straightforward: I downloaded the ARM64 Linux binary, authenticated my token, and ran `ngrok http 8080`. 

This generated a public HTTPS URL that pointed directly to the `llama.cpp` server running on the Pixel 7 Pro. This configuration was crucial because it allowed me to query my mobile-hosted LLMs from any external application or server without wrestling with complex port-forwarding or dynamic DNS setups.

## Can you connect a phone-hosted LLM to desktop tools and MCP servers?

**Yes, you can connect a phone-hosted LLM to desktop tools like Aider and enhance it with [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) servers. This allows the local model to interact with your local codebase and even search the live web for answers.**

The culmination of this experiment was integrating the Pixel-hosted model with my desktop workflow. I use **[Aider](https://aider.chat/)**, an AI pair programming tool that usually relies on cloud-based APIs like OpenAI's.

By exposing the phone's `llama.cpp` server via its local network IP (or the Ngrok tunnel), I instructed Aider to route its API calls to the Pixel (`http://<pixel-ip>:<port>`). 

To bridge the gap between offline models and real-time knowledge, I integrated the **DuckDuckGo (DDG) MCP server**. Model Context Protocol (MCP) acts as a standardized translation layer between the local LLM and external tools. By wiring Aider and the local Llama/Qwen models to the DDG MCP server, the models gained the ability to autonomously perform web searches. If I asked a coding question involving a recently released library, the model would leverage the DDG tool to fetch live documentation, read it, and provide an accurate, grounded answer.

### The Desktop Integration Workflow:
- **Zero Cloud Dependency:** Source code remained local, parsed by the model on my phone.
- **Live Search Capabilities:** The DDG MCP server ensured the local offline models could still search and retrieve live information.
- **Cost Efficiency:** I essentially had an always-on, search-augmented AI coding assistant without incurring any API token costs.

## Key Takeaways from Mobile Local-LLM Hosting

- **Repurpose Old Hardware:** Devices like the Pixel 3a make excellent headless SSH servers when stripped of their GUI.
- **Secure Networking:** Ngrok effortlessly exposes local mobile inference endpoints to the world.
- **MCP is the Future:** Combining `llama.cpp` on mobile with an MCP search tool like DuckDuckGo transforms a static local model into a dynamic, real-time assistant.
- **True Privacy:** Running models locally via Aider means your proprietary code never leaves your network.

This setup has fundamentally changed how I view mobile hardware. They aren't just consumption devices, they are capable edge compute nodes ready to power the next generation of AI development.
PS: I had spare hardware and time to do these experimentations, these pose a lot of risks to your hardware while installing droidian or reclaiming resources, proceed with caution.