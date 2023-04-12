---
title: Emerald
description: A stylish fluent Minecraft launcher made using WinUI technologies in the fast C# language really pushes the boundary of the platform. A true compliment to any gamer's setup.
thumbnail: /screenshots/emerald.png
date: 2023-03-02
author: RiversideValley
wip: true
---

<script lang="ts">
    import { Button } from "fluent-svelte";
    import { externalLink } from "$lib";
</script>

## 🎁 Installation

### 🪟 Microsoft Store

<Button href="https://apps.microsoft.com/store/detail/9PPC02GP33FT" {...externalLink}>Download</Button>

### 😺 GitHub

<Button variant="hyperlink" href="https://github.com/RiversideValley/Emerald/releases/latest" {...externalLink}>Sideload</Button>

### 🔨 Building from source
###### ⭐Recommended⭐

This is our preferred method.
See [this section](#-building-the-code)

## 🦜 Contributing & Feedback

There are multiple ways to participate in the community:

- Upvote popular feature requests
- [Submit a new feature](https://github.com/RiversideValley/Emerald/pulls)
- [File bugs and feature requests](https://github.com/RiversideValley/Emerald/issues/new/choose).
- Review source [code changes](https://github.com/RiversideValley/Emerald/commits)

### 🏗️ Codebase Structure

```
.
├──Emerald.App                       // Emerald app code and packager
|  ├──Emerald.App                    // Emerald app code (such as code related to UI but not Minecraft)
|  └──Emerald.App.Package            // Package code for generating an uploadable MSIX bundle.
└──Emerald.Core                      // Emerald core code (such as code related to launching and modifying Minecraft
```

### 🗃️ Contributors

<a href="https://github.com/RiversideValley/Emerald/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=RiversideValley/Emerald" />
</a>

## 🔨 Building the Code

### 📋 Prerequisites

Ensure you have following components:

- [Git](https://git-scm.com/)
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) with following individual components:
  - Universal Windows Platform Software Development Kit
  - .NET 7
  - Windows App Software Development Kit
  - Windows 11 SDK
- [Windows 11 or Windows 10](https://www.microsoft.com/en-us/windows) (version 1809+)
- At least 4gb of RAM
- [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

### ⬇️ Git

Clone the repository:

```git
git clone https://github.com/RiversideValley/Emerald
```

### 📦 Build the project

- Open `Emerald.sln`.
- Set the Startup Project to `Emerald.Package`
- Build with `DEBUG|x64` (or `DEBUG|Any CPU`)

## ⚖️ License

Copyright (c) 2022-2023 Riverside Valley Corporation

Licensed under the Nightshade Vexillum license as stated in the [LICENSE](LICENSE.md).
