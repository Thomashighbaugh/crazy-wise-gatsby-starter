---
title: Dotfiles && Provisioning
date: 2020-01-11 00:00:00 +0300
description: Boilerplate posts
img: ./ansible.png # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Productivity, Dotfiles] # add tag
---

In cases of provisioning systems for others to use who may hate you configurations or want to use their own, like the
DevOps context, but if you are the sole user of the machine, or the primary user and you have root access, I can't foresee
why you would not want to consolidate these two steps without it being really a case of fanboy/fangirl-ism relating to
your dotfiles manager or provisioning tool.

## The Easy Way to the Perfect Installation

Being that I lack any such irrational loyalties, especially since the Raiders moved to Las Vegas, I do not see why one
could not provision any system they want using the Makefile method that I currently employ across my systems. I can set
up different commands to call for different systems (a work in progress at the moment) or use the admittedly clunkier method
of using git branches for each machine, if you wanted to keep some configuration options in common otherwise different repos would
probably be best.

Since the Makefile method allows you to run whatever commands you want, bundled together in specific orders as you want
or need them to be, you can easily throw in the package manager commands you want with an automation flag that will take
away need for you to do much other than watch and make sure to enter the sudo password (or you can dangerously change the
system with visudo and it won't even ask for that). With a few annoying exceptions in pacman, this takes away my need to
attend the install at all save to watch for error codes when I have messed up the Makefile.

## Throw the Bin in There Too

Like most Linux users, I call some scripts a lot and prefer to have them accessible via my system's path. Thus I stop
saving them with extensions and put them into a `${HOME}/bin` directory that I then add to my path via `.profile` for
use when I need them. This is another repo that I have seen people make, but this also makes more sense to keep in the same
repo as your dotfiles+Makefile and just symlink from that repo to the `${HOME}/bin` location as you need it. These scripts
are never really large, for me at least, and this method takes the hassle out of remembering yet another repo I need
to make commits to all the time.

### Personal /lib, Yeah Throw It In There Too!

I also have need for a `${HOME}/lib` folder that I use for a specific bin file that creates the structure and installs some
default configurations in SCSS. These are also relatively small files and so it is added in my dotfiles and symlinked. Having
this directory has also made it possible for me to store all the installation scripts I ended up making to declutter my
Makefile possible without further cluttering other dotfiles subdirectories.

## Things You Shouldn't Add

I like to keep my dotfiles repo small in size, mainly because there are times when internet speed is lacking and pulling
in 500MB takes too long when I want my system working **NOW**! Like all of my tips, this was earned in blood and archived git
repos but I have become aware that any of the following probably don't need to be in your dotfiles repo, primarily because
they make it huge in size.

- GTK themes
- Icon themes
- Fonts (with certain specific exceptions)
- Wallpapers (except the default if its specific and different from the OS default)
- .emacs.d (Emacs configuration directory with all its add-ons installed within)
- GIMP/Inkscape directory (with all the plugins, textures, etc)

You are also wise to avoid including the following as they don't seem to work or reveal personal information (luckily not earned in blood)

- Gnome settings
- firefox user profiles
- passwd files
- files containing one's logins in general
- visudo files
- crypto currency wallet ids
