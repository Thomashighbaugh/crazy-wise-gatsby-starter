---
title: Get the Git
date: 2020-01-03 00:00:00 +0300
description: A general guide for using git to backup files, or dotfiles, that started as an explanation for my girlfriend.
img: ./gitx.png # Add image post (optional)
tags: [Dotfiles, Git] # add tag
---

Let's say you want to backup your settings (or dotfiles in Linux parlance) on someone else's server as demanded by best practices and better judgement. To do this, you could use one of a million commercial cloud services that all work about the same and are easy enough to use with the GUI but lack the simplicity of a single command line to bring your data to your system and another to provision that data. So there are still innumerable options offering those features, but let's say you aren't seeking to be a super nerd and go with a solution favored by many, using the VCS (Version Control System) called git.

### Get the Git

Step 1: Get An Account
There are a few options for Git storage providers, all free and each with advantages and disadvantages, in the future I will make this into a table you can browse at your leisure but for the time being, let's assume you are going to use GitHUb because that's what everyone uses and it works well enough even with the Octocat plastered on everything.

### Step 2: Adding Git to Your Repo

if you have not setup a git repo for the directory or any of the subdirectories associated with your project just enter:

```bash
git init
```

### Step 3: Adding Files to Git

This is wonky for your use case, but if you use git more than for dotfiles storage, this will come to make sense. In order to have git save your files you must add them to the git repo in one of the following ways

```bash
# Individual Files
git add <filename>

# Everything in the Current Directory
git add .
```

### Step 4: Commit Your Changes

This also won't make a ton of sense until you use git for something more version sensitive than basic dotfiles storage but bare with me. Committing is when you author your changes in a public sense. This command requires a commit message that if you listen to the various advise about git from online rambling click-bait sites should be fewer than 50 characters and yet still descriptive. Conventionally these are also written in the present tense for reasons I do not know, but bet is to save the characters. To commit your changes:

```bash
# with message provided in the command
git commit -m 'your message'

# provide a message using your $EDITOR
git commit
```

### Step 5: Adding Remote

This is what adds the git to your GitHub, aka skipping this makes the whole build up a nothing burger of the worst kind.
A) Make a new repo on GitHub (hit the plus symbol)
B) enter the command fourth on their list (ignore that crap about the README, we did that already and the world has enough craptastic READMEs)

```bash
git remote add origin <url provided>
```

### Step 6: The Last Step. Pushing Your Changes

The worst thing about git is the stupid jargon, which is confusing and ultimately unrelated to the meaning of the words in a conventional sense in the English language. '**Pushing**' your changes means _uploading them to the specified remote_ [the last step]

```bash
git push
<github user namee>
<github password>
```

## Downloading the Repo on Another System

So you backed it all up, now you want to use your configurations on another system, now what?

**SIMPLE**

```bash
git clone https://github.com/<YourUserName>/<YourRepoName>
```

## So That's The Process

Sure there are complex things you can do with git, like branching and merging branches and pull requests. But that's out of the scope of this tutorial and a subject for a different parsing of the nerd-speak.

The important take away is **IGNORE THE JARGON** and **GIT IS NOT THAT HARD SO LONG AS YOU IGNORE THE JARGON**
