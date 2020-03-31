---
title: Dotfile Management
date: 2020-01-04 00:00:00 +0300
description: Boilerplate posts
img: ./make.jpg # Add image post (optional)
tags: [Dotfiles, Makefile] # add tag
---

If you have explored dotfiles repos on GitHub or GitLab, one very obvious difference between them all are the methods
in which they are provisioned (usually plastered all over the ReadMe).

## Many, Many Options

I have tried many of these options, with varying degrees of success but found the supposedly most complicated way,
using Makefile, to be the easiest and best method of provisioning my dotfiles consistently.

Here are some options and my thoughts on each

| Option       | Experience                                                                                                                                                                                                                                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dotbro       | Easier to use than stow, still works just as a syslink farm. Awkward repo structure required                                                                                                                                                                                                                            |
| Stow         | Awkwardly creates sysmlink farm but the cool kids love it. Clones exactly what is in the repo to the home directory, meaning file names must be the same                                                                                                                                                                |
| Ansible      | More useful for remote provisioning. Excellent for idempotency features and would be great to remote provision a server or 10. Localhost provisioning is possible but it strips away control, has spotty plugins for various tasks and must be run as root (thus precluding the use of yay for AUR packages annoyingly) |
| Shell Script | more configuration options than syslink farms but no modularization without excessive extra work                                                                                                                                                                                                                        |
| Makefile     | Creates syslink farm and allows shell script like configuration. Best of both worlds and easy to write. Since you control the link commands, you can control the file names adding dots to the link but having the actual file not hidden.                                                                              |
| rcm          | Did not work for me, moved on instead of trying to get it to work because the bounty of other options                                                                                                                                                                                                                   |
| yadm         | Tried it out, was something like dotbro in needing a config file that was tedious, moved on to other options                                                                                                                                                                                                            |

## Makefile is the Winner

Makefile turns out to offer the most in ways of features, allowing stow like **syslink farming**
(meaning all your dotfiles stay in the repo and are linked to their original location) while also
enabling the user to provision other aspects of their system easily from the same file with the same
command `make all`

### It's Phony

Makefiles run modular sets of commands that are listed under headings according to how they are
called at the files beginning. Typically `.Phony:` is the first line where all the commands are
listed followed in my case by `.all` where I list the commands I want to run in the order I want
them to run.

A typical command looks like the following:

```bash
example:
    mkdir -p ${HOME}/.config/some-program
    ln -svf some-program/dotfile ${HOME}/.config/some-program/dotfile
```

### Repo Structure

To keep things easy, most of my Makefile commands are named after the directory in my repo,

For example let's imagine we have this directory in our dotfiles

```$xslt
kitty
    |
    - kitty.conf
    - colors.conf

```

In the Makefile we would just add commands to link those files to where they are expected within the system like so

```bash
kitty:
    ln -svf ${PWD}/kitty/kitty.conf ${HOME}/.config/kitty/kitty.conf
    ln -svf ${PWD}/kitty/colors.conf ${HOME}/.config/kitty/colors.conf
```

#### No Naming Madness

Stow and dotbro, as well as any other dotfiles management system I can even get to work, require either the removal of the dot at the file name, or for the directory structure to mirror where the files are going or some other stipulation that makes using them an awful experience if you have git repo OCD like me.

That's not true of Makefiles, since you control the commands that are being run, you can have the destination of the link be whatever you want. For instance using the example above let's say I named `kitty.conf` as `cat.box`. I would just need to enter

```bash
kitty:
    ln -svf ${PWD}/kitty/cat.box ${HOME}/.config/kitty/kitty.conf
    ln -svf ${PWD}/kitty/colors.conf ${HOME}/.config/kitty/colors.conf
```

and everything would work just as well. So much for the cool kids and their Stow

## Advantages Over Roll-Your-Own Scripts

I generally prefer using my own scripts when I can, even if they are rudimentary they are a lot easier to manage than
the uncommented monstrosities common in Linux. Makefile offers one advantage over a Tom script though, its modular
without need for extra bs to debug.

Makefiles are used for installing and removing programs in your system, having both sets of commands in th esame file
called with commands like `make install` which calls the make command install. Its a very elegant system compared to
stow farming and it is easily adapted to provisioing different systems (which is my next project as git branches are
a little less useful as it happens)

## Disadvantages of Makefile for Dotfiles:

## Real and Imagined

### Maintanence

Rarely do I have a reinstallation where I do not have to change some aspect of the provisioning process to
suit my needs and there is none of the features of Ansible to add to the Makefile that make that system
provisioning tool worth knowing, even if I found it utterly useless for provisioning thanks to makefile rolling
in my dotfile configuration and **having a much more organic flow** to my work pattern.

Nonetheless, one will have to tweak their Makefile, more if they have a large one like myself and even in smaller
deployments probably somewhat here and there.

The lack of idempotency is a pain especially if one has changed some aspect of their Makefile and then have to debug
it. I guess the best way to do this reliably is to do all one's debugging on a VM and then only pull in the perfectly
functional variants into the system but let's be real and admit that doing that is a little more work than it is worth.

### 'Bolted On'

I have seen people chide Makefile provisioning as feeling bolted on and treat it as if it was a wasteful use of a
powerful program. These same people also stated elsewhere that they used Stow, which like Make **was not intended
to manage dotfiles**.

Dotfile management, like so much in the Linux community, attracts a certain portion of users that are more into
pretending they do no wrong and reading the opinions of others and parroting them back to others in some strange 'good
boy points' seeking way. **Honestly both programs work well for specific things and what you use is a matter of taste
and hopefully your preference**

Yes make allows for the installation process of an application to run relatively smoothly, which is arguably a lot
like dotfile management and its essentially just a process of writing a more organized shell script which hardly feels
bolted on to me.

### Monolithic File

While I am not a huge fan of Ansible as I found it exceptionally tedious most of the time and overkill for my uses, I
really liked that it was a structure that one could easily understand as each portion of the `playbook` could easily be
identified in functionality as each was separated from one another in different files.

Using Makefile that luxury is absent, or at least to my knowledge. Thus you end up wading through a giant files when
debugging or looking for something or whatever. To mitigate this, I have made a lib/install directory within my dotfiles
repo that has scripts named after make commands that install all the requisite tech I want installed with those
configurations.This cuts down on the clutter but having each command in its own file would help make debugging less
annoying.
