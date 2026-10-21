# ip 11 steps

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

    git remote add origin https://github.com/myuser/ip-11.git
    git branch -M main
    git push -u origin main

## feature branch
    git checkout -b add-visit-counter
    git add .
    git commit -m "count visits in memory"
    git push -u origin add-visit-counter

Then on github I opened a pull request from add-visit-counter into main, looked at the
changed files, and clicked merge pull request. Back in the terminal I ran git checkout main
and git pull so my local main had the merge too.

## deploying to heroku
    heroku login
    heroku create
    git push heroku main
    heroku config:set SITE_NAME="ip 11 demo"
    heroku open
    heroku logs --tail

Heroku does not have a free dyno anymore, so running it there costs money now.
Render.com works the same way on a free web service, build command npm install,
start command npm start, and SITE_NAME added as an environment variable in the dashboard.

deployed link: (paste url here after deploy)
