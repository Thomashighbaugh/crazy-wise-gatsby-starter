---
title: Another's Dotfiles
date: 2020-01-10 00:00:00 +0300
description: # Add post description (optional)
img: ./dotfiles.png # Add image post (optional)
tags: [Dotfiles, Git] # add tag
---

The best thing about common version control solutions that are publically available and accessible is that
if one is looking for ideas on how to best configure their own system, one has access to the multitude of
options that others are storing on those VCS services.

## Slippery, Slippery Slopes Indeed

One issue with looking through the configurations of others, that is necessary to illuminate first before
discussing anything else, is that if one is not careful one can manage to make their system unusable, at
least to them, with shortcuts they do not know and other optimizations that make not optimize much for
them (or anyone else, many dotfiles repos seem plain broken).

While this may be the most redundant bit of advise on the web about dotfiles **only change one configuration at a time**
otherwise you will end up in a sticky situation that until you are comfortable looking through old commits within git
repos, you may not be able to recover.

## The Doors Blow Open

Once you settle on the sane, slow approach to using ideas gained from other's dotfiles repos, you will find a new world
of possibilities have opened before you and you will find configurations to programs you had never heard of or understood
before that you are now eager to try out.

### Finding Treasure

To use another person's configurations, you must first find them. On GitHub, the search feature is great for this and you
will quickly find other repos end up in your `recommended repositories` that are often helpful. But with GitLab, and sometimes
with GitHub as well, it is necessary to use a real search engine to exacavate some specific repos and features.

There is also the option of using the unfortunately named subreddit r/unixporn for finding configurations. People boasting
about their system's often interesting set up will post the dotfiles repo they have saved whatever they are boasting about
on. Sometimes it is in looking through these repos that the best gems are inside.

In addition to looking at those configurations, the documentation of some programs will offer example configuration files
for various purposes that are also the source of some lines and much of my understanding reflected in my own dotfiles.

### Testing Out Alternatives

Often times the things I now love, like pacman or spacemacs, I didn't actually like the sound of at first (who would
have thought abstracting words like remove to -R would work so well), but tried at some point and discovered I liked a
lot.

In order to have the truly perfect system that is the dream of collecting one's dotfiles together, one must be ready to
experiment with the various options, try it out for a while and then determine if they like it or not based on experience.
Obviously no one needs a pink background with orange lettering, so no need to test every alternative but why not try a
different set of hotkeys in TMUX or swap Screen for TMUX to test it out. Worst comes to worst git stores your old commits (if you are saavy)
and you have probably learned the hard way why you must back all things up on Linux (including things saved on vcs I promise it will come in handy).

### Learn to Tell Wheat from Chaff

If you are diving into some git repos full of dotfiles and see things that don't look right, trust yourself. Its not so
much the security concern as it is fixing some broken dotfiles only to find the user was totally off base and none of their
features worked at all.

You will save yourself time when you learn to tell when dotfiles are well managed and the user knows what they are doing
vs. those who are not managing those files anymore (probably because they are broken and the user is in seclusion) or
composed by someone still farther back in the learning process than you are\*.

- Another word of caution: don't assume you know more because of bad dotfiles as they may just be busy or obnoxiously
  lazy but still knowledgeable. Assuming superiority over others in Linux is as stupid as doing so about anything else.
