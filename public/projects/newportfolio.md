---
title: "Portfolio Website"
description: "my latest portfolio April"
tags: ["React", "Tailwind CSS","GFM","Web"]
image: "/projects/images/portfoliocard.webp"
date: "2025-02-10"
---


I needed a great website to show my skills and all my projects. But I knew I would be adding new projects all the time. The problem with many websites is that you have to rebuild and redeploy the whole site every time you add something new. This takes too much time and is not efficient. I wanted to find a smarter way.

![](/projects/images/portfolio/cover.webp)

---

## My Goal

My goal was to create a beautiful and user-friendly portfolio that was also very easy for me to update. I wanted a system where I could add a new project just by adding a new file, without needing to go through a full rebuild process every single time. The website had to look good and work smart.

---

## My Solution & How I Built It

First, I planned the website's structure and design to make sure it was clean and easy to navigate. Then I started building.

![](/projects/images/portfolio/wireframe.webp)

* **Fast and Modern Tools:** I built the website using **React** with **Vite**, which makes the development process and the website itself very fast. For the design, I used **Tailwind CSS**. This was a great choice because it let me build a modern and responsive layout quickly without writing a lot of custom CSS.

![](/projects/images/portfolio/vs.webp)

* **A Smart Way to Add Projects:** This is the core solution to my problem. All my project information is stored in simple **Markdown (MD)** files. These files are kept in the `public` directory. I also use one **JSON** file that acts as a list of all my projects. When I finish a new project, I just create a new Markdown file for it and add its name to the JSON list. The website then shows the new project automatically. This method is perfect for hosting on **GitHub Pages** and means I never have to rebuild the site just to add new content.

![](/projects/images/portfolio/github.webp)

* **Features:** To make the site more engaging, I added few visual effects.I also created a "Gallery" section to show my fun experiments and more designs. Finally, I included a contact form using **EmailJS** so people can easily get in touch with me.

* **Optimization:** To optimize performance, I converted all images and videos in the project into modern WebP format. This significantly reduced file sizes without losing visual quality, which improved overall loading speed and created a smoother user experience across devices.


---

## The Final Result

The final result is a personal portfolio that I am very proud of. It not only showcases my projects in a clean and appealing way but also solves the big problem of content management. Now, I can keep my portfolio updated with my latest work with very little effort, allowing me to focus more on creating.

![](/projects/images/portfolio/full.webp)