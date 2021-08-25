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