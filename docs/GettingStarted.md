# Getting Started

To begin developing on this blog, use the commands below

### Prerequistes

- System with BASH Shellcurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  > Windows Users Advised to use VirtualBox and install Ubuntu for this

#### NodeJS Installed

Assuming you use bash, install `node.js` as follows

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
