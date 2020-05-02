---
title: Homepage
---
# Project Wiki Page 


Here I will record what we still need to do, which I will describe with as  much detail as possible and again assure you this shall be A-OK as the worst parts have already been completed while I was outdoors in the cold bay breeze at the crest of Hayward's beautiful hills.

## How You Can Help

There arre several areas we need to focus our efforts on, which I am not of strong opinion whom should do what, but please let me know by cloning this repo, either signing your name into a category which will be listed below and submitting a pull request (more on this later) OR completing the task at hand in that cloned repo and submitting the pull request which means I will be taking your changes and merging them into this repo which at present is in a state of production as it is the source from which the hosting service pulls the site's source code. 

## Hosting Service 

We are using [Netlify](https://netlify.com) to host the site because I am familiar with them and because they are **free** for our purposes (I host my own site with them, which is no small one page web app and use a custom domain with https, all free too. Good stuff if you need a web host) 

**YOU WILL NOT NEED A NETLIFY ACCOUNT EVEN FOR THE CMS** but if web development is your trajectory, they are a great resource for you to know and have a killer devops team that makes 6 figures, so keep that in mind too. 

## Prerequisites 

- [GitHub Account](https://github.com) - so you can: **clone the repo, make pull requests, be added to an organization I will set up to get more access to the repo, etc. etc.**
- [GitHub Student Developer Pack](http://education.github.com/pack) - this is a resource that provides a plethora of free stuff to students, your CCLPCCD email is all you need (they send an email, you click a link and BAM! free stuff) some of which we may end up needing for this and not knowing what or who may need what at what time, us all having this access is better than not. It also comes with the license for **Jetbrains** products, which includes the Javascript IDE WebStorm I reccomend and is available on all platforms, is more robust than VSCode (and less broken) and provides a lot of functionality that only emacs can compare to, though without the learning curve. 
    **Note:** I do not actually have access to the resources at the moment because GitHub is stupid and chose now of all times to certify that I was a student and they have a 27 day waiting period. *So at least one of you actually needs to sign up too, to maximize our chances of using Algo for internal search functionality for the project* 
- **Code Editor** - I use Jetbrains' Webstorm, which you can very easily and quickly get access to on [their website](https://www.jetbrains.com/community/education/#students) or download the Jetbrains Toolbox to install WebStorm and then opt for a 30 day trial much like VMware software (though I don't know if uninstalling it and purging the configs allows for another 30 day free trial like VMware Workstation) or you can download it and look on Github Gist for a license key from an enterprise, which you will find some of and even if the key is invalidated **nothing will happen to you** (just like cracking the authenication server for Windows 10). 

If you really like VSCode you are free to use it, it does wrap some of the same functionality as WebStorm, I just prefer the later because it is higher quality, more consistently operative and runs the same way across the major OSes (Linux, Windows and Apple) providing a means of accessing BASH on Windows. 

- **BASH, ZSH, BASH-On-Windows or the Linux Subsystem for Windows** - If you are using Linux or Mac, you don't need to worry as you have BASH if nothing else. If you are using Windows its more tricky and I can not help you too much in that department as that is not something I have much experience with that wasn't caused by the client trying to install BASH on Windows and destroying their OS. That being the case, maybe using the Linux Subsystem on Windows would be wiser or even Powershell as many of the basic commands are taken by Microsoft from BASH then adapted to the Windows environment. 

- [Node.js](https://nodejs.org/en/) - get used to this nightmare, its Node.js, which is server-side JS and a package manager for JS that is EXTREMELY important to modern front end developers as it allows one to access a multitude of libraries, pligins and other goodies which we will need to set up your dev environment. 

**TO GET IT IF YOU DON'T ALREADY HAVE IT INSTALL** - instead of using the link above's downloads of it, I reccomend you use NVM (Node Version Manager) because with Node, its so broken sometimes you have to use old versions to get it to work and NVM makes that a simple process. See the example below
```bash
## Assumes Bash, Must be Performed on Command Line.
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
## the script will install the program and afterwards run the following so you can provision your shell to use it for node by default
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

## Now let's install some versions of node to use
nvm install node 
nvm install 10
nvm instal 12 
## Now We Must set the system to use one of the versions, which we will use latest aka 

nvm use node


```

### See Next Doc for getting it running
