---

<h1>Crazy-Wise Starter</h1>
<h2>A Gatsby.js starter featuring tinaCMS, styled-components and a bunch of custom artwork</h2>
<button style="width: 5rem;height: 2rem;border: 2px solid #24262d;"><a href="https://g5-blog-cclife.netlify.app/" >Hosted Here </a></button>

---

## Installation

Assuming you are using a Unix-like OS or have a BASH terminal available and node.js installed, follow the steps below to get this respository up and running locally so you can modify it with your code editor of choice to make it your own. 

```bash 

$ git clone https://github.com/Thomashighbaugh/g5-blog-cclife

$ cd g5-blog-cclife

# install yarn if not already installed
$ npm i -g yarn

# install packages
$ yarn 

# run thr development server

$ yarn dev


# After finishing your changes run the below to format the code
$ yarn format 

```

---
## Using tinaCMS

Unfortunately, the only way at present to use tinaCMS is to do so in the development server. Though its not too much more work than the steps above. Once they are done, open up your browser and navigate to `http://localhost:8000` and you will see the website. In the bottom left hand corner there is an icon of a pencil, click that and it will open up the CMS, which is relatively self explanatory. 

Modifications you make with the CMS interface will be reflected in the JSON files populating the various pages and configurations used to render the site. Its a relatively slick way to dynamically edit the content as well as write it in the first place as JSON files strip out all of the syntax and allow you to focus more specifically on content. 

---
## Features 

This starter offers the crazy-wise developer:
	- tinaCMS
	- styled components
	- custom artwork (including a few extras that aren't used by default)
	- clean, formatted React.js code 
	- atomic design 



---
## Issues and Things to Watch For

### Node Versions
An issue I have had come up in developing this site is the version of node, the wrong version breaks the whole process. I reccomend you install nvm (node version manager) and run the following commands if you have an major issues with the development server 

```bash 	

# Install Node.js version 10
$ nvm install 10

$ nvm use 10

```
Try `yarn dev` again and it should work. 


### Gatsby Limitations
Another issue is the Gatsby system in general, while an awesome way to generate static webpages with React, the inclusion of plugins makes the whole process a lot more prone to failure or bugginess that will require restarting the dev server or will prevent the dev server from registering a change or something else equally annoying. Its the price you pay for the simplified access to WebPack features. 

### TinaCMS
As far as I know it is still that tinaCMS is not ready for deployment on a production website, for one it lacks a means of authentication, meaning anyone could vandalize the site that used it. I do not actually use CMS systems to edit content on my sites, I like using vim to edit text and can easily write out the types of files useful here, so I am not going to invest heavily into solving this issue myself, but that would be a really awesome project for the right individual(s) and I will merge your pull requests so have at it.

This does hamper the use case for many with a CMS, and I am sure in the future it will be handled if the project survives, however I found it was an awesome way to get people participating in the process of designing and producing content for the site even if they were intimidate by the code itself. 


---

## License 

This software is licensed under the MIT license, consult the file named `License` for details. 