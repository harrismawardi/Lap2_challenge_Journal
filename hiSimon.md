Hi Simon - 
sorry for dropping out last min.

## Things that could be useful:

you need to do `docker-compose down --remove-orphans --volumes` i think when you want to rerun the server then `docker-compose up` as usual. Not sure why but it won't creat the sql tables otherwise. 

There is still something wrong with postgres - because when you check the log when running the server it does say `TABLES CREATED` or something along those lines. However when interacting in the postgres terminal there isn't any relations detected ( i used \d+ as you suggested ). 

I had to create a new table in the terminal while the server was running - the paths seem to work okay when I did that, so it is just a problem with running that initial `.db/migrations/1_create_posts.sql` file

Anyway - hope you get on okay:)