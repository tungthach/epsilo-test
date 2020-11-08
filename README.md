### Getting started

- Click <a href="https://drive.google.com/file/d/1qMSiHIt9N3qlL8vGEc5uMLhuND3fDoxq/view?usp=sharing" target="_blank">to download the code</a>. (please submit your request permisson on this file) 
- Install [Nodejs](https://nodejs.org/en/) (Eg. LTS version 12.x)
- Install [yarn](https://yarnpkg.com/)
- Go to the extracted folder, install the dependecies by running the command `yarn install`
- To start the project please run: `yarn start`
- To submit your work, please create a bitbucket or github repo then share your repo with this email phuc.phan@epsilo.io

# What you would do with this assigment?

We thank you for taking your time to look into this assigment.
With this assigment, we would like to know more about your technical background.
We hope you can enjoy and learn 1 or 2 things when completing this one.  

**It is ok to not complete all the issues**. We expect you only need to spend _less than 3hours_ on this assignment.
You _can stop at any point_ you want and send back the code to us. We thank you for spending your time with us.

Please only use the **Javascript** (browser native support. Eg. google chrome), and **React.js**(eg. v16.13) for this assigment.

There are only 3 `.js` file you need to be awared of in this assigment:

- `atom-input.js`
- `atom-multi-input.js`
- `app.js`
- those files contain less than 200 lines of code in total

**NOTE:** for every issue number below, please commit your code accordingly for each issue.  
 Eg. git commit -m "issue 1: your own commit comment etc..."

## ❓The issues:

1. The assigment is not working as expected. Could you please fix it?

   - When click to update the `size`, `velocity`, and `color` of the electron the function is not worked as expected.
   - Can you make it work with the minimal changes in code? (change as least as possible)

2. Can you add a button `Remove` beside the `atom-input`, to remove a single `atom` at a specific position?

   - Eg: |`size` | `velocity` | `color` | `>> **{your_remove_button}** <<`|

3. Any redudant conditions, logics and structures, you can remove, optimize in those 3 files?

4. We know it is a tiny project, but could you propose a good folder structure for this project?

5. When you run this assigment on the local machine, you can visit the `localhost:1234/vendor.html`
   - We want to create a widget script for `an atom`. An example what is a widget is the
     <a href="https://publish.twitter.com/?query=https%3A%2F%2Ftwitter.com%2FInterior%2Fstatus%2F463440424141459456&widget=Tweet" target="_blank">embed tweet</a>
   - Can you provide a **clean solution** to setup a `widget-script.js` so that our partner (vendor.html)
     can include that script and display the `atom` widget inside their website?
     - We already have the file `widget-script.js`, you can write your solution in that file.
