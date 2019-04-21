# Frameworkless TS/SASS Boilerplate

This repo can be cloned and used as boilerplate for apps that want to work with TypeScript and Sass,
but don't want to bother with using a big framework like React, Angular, or Vue.


## Getting Started

1. Run an `npm install` (this is only needed once after you clone the repo).
2. Run `npm run watch` to start the compilation process. This will continue to compile changes as you make them.
3. Open `dist/index.html` in your browser to view the app.
4. Make changes to files under `src` and refresh your browser to see them.


## Guided Tour

**src/index.html**

This is the main file for your app. You'll want to modify the page title, and if you're doing a mobile app or
want better SEO you'll want to add meta tags as well.

**src/ts**

This is where all of your TypeScript files should live. The `main.ts` file is the entry point, and anything that
it imports (and that those files import) will be included in the final build.

**src/scss**

This is where you should put all your Sass. `index.scss` is currently imported by `main.ts`, which is why it's
included in the output.

**src/assets**

This folder is for all your static assets like images or sounds.


## Making Git Push to Somewhere Else

If you fork this repo and make your own commits, you'll be stuck pushing to a repo called "boilerplate" forever
and GitHub won't let you make a second fork. To fix that, you should

1. Create a new repository on GitHub using the UI. DO NOT initialize it with a README.
2. Copy the URL in GitHub's instructions that starts with `https://` or `git@github.com:`.
3. Open this repository on the command line.
4. Run `git remote set-url origin <that URL you copied>`.


## Adding More Pages

For each page that you want to add:

1. Create a new html file next to the existing html file.
2. Create a new Sass entry point in the `scss` folder.
3. Create a new TS entry point in the `ts` folder, and import your new Sass file.
4. Add a script tag to your new html file that imports the new TS file, but with a JS extension.
5. Go into `webpack.config.js` at the root of the repo and add a new line to the `entry` section with your new TS file.


## Deploying to Production

1. Run `npm run build-prod` to produce a much smaller, faster-loading version of your app in `dist/`.
2. Copy the generated files onto your web server.
