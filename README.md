# Lap2 Challenge: Scream Into The Void

## Startup: 
### To Run Serverside:
1. In terminal, run **`bash _scripts/startUp.sh`**
- starts api & db services
- runs db migrations
- seeds db for development
- serves api on localhost:5000

### To Run Client
1. cd into client folder
2. 2. Enter into terminal ```python3 -m http.server```

### Stopping Serverside:
1. Use ***Ctrl + C***
2. In terminal, run **bash _scripts/teardown.sh**
- stop all running services
- removes containers
- removes volumes

***Note: You need to do `bash _scripts/teardown.sh` each time you want to rerun the server, then `bash _scripts/startUp.sh` as usual. Not sure why, but it won't creat the sql tables otherwise.***

## Bugs:
There is something wrong with postgres - when you check the log when running the server, it says `TABLES CREATED` (owtte). However, when interacting in the postgres container, there aren't any relations detected

When you create a new table in the terminal while the server was running, the paths seem to work okay. So it's just a problem with running that initial `.db/migrations/1_create_posts.sql` file. People smarter than we may be able to fix it