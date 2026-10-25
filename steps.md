# ip 11 steps

repo: https://github.com/Rub064/ip-11
live app: https://ip-11-rubz-7dafe75b92b3.herokuapp.com

## what the app is
A small express app that serves a page from the public folder and has one route at /hello.
The /hello line prints the SITE_NAME environment variable so I can see the host setting it.

## local git
- git init to start the repo in the IP_11 folder.
- git add . then git commit -m "first commit with app.js and package.json" for the starting app.
- second round: git add . and git commit -m "add public page and css" after I made index.html and style.css.
- git branch to see my branches, git checkout main to move back to main.
- git merge to bring a branch into main, I practiced that with a throwaway branch first.
- third round of commits held the Procfile and the port and SITE_NAME changes for deploying.

## pushing to github
I made an empty repo on github with no readme so it would not fight my local files.

    git remote add origin https://github.com/Rub064/ip-11.git
    git branch -M main
    git push -u origin main

## feature branch
    git checkout -b add-visit-counter
    git add .
    git commit -m "count visits in memory"
    git push -u origin add-visit-counter

Then on github I opened pull request #1 from add-visit-counter into main, looked at the
changed files, and clicked merge pull request. Back in the terminal I ran git checkout main
and git pull, which fast forwarded my local main to the merge commit.

## deploying to heroku
    heroku login
    heroku create ip-11-rubz
    heroku config:set SITE_NAME="ip 11 demo"
    git push heroku main

The build log said "Node.js app detected" and "Procfile declares types -> web", so it picked
up my Procfile and started the app with node app.js. The port comes from process.env.PORT
because heroku picks the port, not me.

https://ip-11-rubz-7dafe75b92b3.herokuapp.com/hello prints "hello from ip 11 demo", and the
only place that text exists is the SITE_NAME config var I set, so the environment variable
is working.

Heroku does not have a free dyno anymore. Before I paid for one I tried vercel, which is
what vercel.json in this folder is for. Vercel runs the app as a function instead of a
server that stays up, so app.js exports the app and only calls app.listen when I run it on
my own machine.
