# Archicollector API
This is the api for the ArchiCollector App, challenge of Codeable to Vinco
by David Montoya

This REST API was made using Sqlite as Database, ExpressJS, Knex and Node-fetch

# Usage

You need yo go this repo: https://github.com/DavidMontoya24/archicollector_client
which is the Client version of the full project. That repo use as URL server, a
cloud deployed version of this API on Fly.io service.


If you want to run it locally:

1. DOWNLOAD or CLONE this API repo
2. Run `npm install` to install all the dependencies
2. Run `npm start` to start the server on 8000 port
3. On the Client Repo go to src/config.js file and use that BASE_URI (localhost:8000)
4. On the Client Repo run `npm install` and `npm start`
