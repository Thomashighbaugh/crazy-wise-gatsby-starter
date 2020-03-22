# Getting Started

To begin developing on this blog, use the commands below
## On Your Own System
The instructions below detail how to prepare your system for, and subsequently how to then begin to, developing in React + Gatsby on your local machine or virtualized environment. This is a lot of configuration, to be sure, but is only necessary to complete once and will thus allow you to work with the files natively within your system. Alternatively, there are instructions above on working with these files with online editors which take the configuration out of the process (and may be better for Windows users in general) which while cumbersome, means less risk of making a mistake that will require the restoration of your operating system by reinstallation.

Regardless what OS you use, before beginning any of the configuration steps below, take this oppurtunity to back up your system and prepare reinstallation media, which both Apple and Microsoft allow to be burned onto a flash drive via system utilities and on Linux is performed with an ISO of your distro of choice and either a GUI utilitiy (such as MintStick or Etcher) or the simple `dd` command that follows:
``dd if=/path/to/iso/file of=/dev/sdX status=progress`` where the X in sdx is the letter corresponding to the flash drive.
### Prerequistes

#### System with BASH Shell
  > Windows Users Advised to use VirtualBox and install Ubuntu for this.

BASH is the default shell of many Linux and macOS systems, and its popular alternative ZSH is similar enough that the following commands will produce the same results with slightly different macros available to the user.

**If you are not sure of your default shell, run the command below to insure it is set to BASH, just replace USERNAME with your user name**
```bash
chsh -s /bin/bash USERNAME
```

#### NodeJS Installed

Assuming you use bash, install `node.js` as follows (using your default user to execute the commands to prevent a permissions nightmare. DO NOT ADD IN SUDO doing so will mean needing to run all of these steps with SUDO permissions)

```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

   echo 'export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"' >> ~/.bashrc
   echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm' >> ~/.bashrc
   bash

   nvm install node

   npm install --global gatsby-cli node-sass yarn

   yarn global upgrade


```

### Clone the Repo

```bash
git clone https://github.com/Thomashighbaugh/g5-Blog-CCLife
```

### Install the Node Modules

```bash
cd g5-Blog-CCLife
yarn
```

### Run the Dev Server

This will enable you to preview changes as they occur in the browser. Run this within the `~/g5-Blog-CCLife` directory

```bash

gatsby develop

```

### Open Your IDE of Choice, Or Text Editor, and Begin Working
Now that you have completed the process of setting your system up for developing React, you can start the process. If you need a text editor or IDE to use, consider the following for a seamless experience.

| IDE                   | Free Or Not                    | Notes OnExperience                                                                                                                   |
| WebStorm by JetBrains | Yes with Github's Student Pack | What I use for most things, especially relating to React, provides integrated shell, file viewer and is easy to figure out and extend |
| VSCOde                | Yes                            | Microsoft's Light Weight Web Editor. Beautiful UI, Tons of Extensions, Sometimes Unstable. Most commonly used option in industry      |
| Atom                  | Yes                            | GitHub's Free Web Editor, extensions can be buggy (or spyware), harder to deal with configuring, much like VSCode but rougher         |
| Spacemacs             | Yes                            | My alternative to Webstorm, requires configuration in archiac language but immensely powerful, Emacs + Vim key bindings               |
