## Initialisation

```
    ng g application zoneless-app-v2
```

## Setup of mock server

Installation of json-server

```
    npm i --save-dev json-server
```

And in `package.json`, add the following script

```json
{
  ...
  "scripts": {
    ...
    "api": "json-server --watch db.json --port 3000"
  },
  ...
}
```

Add create a file called db.json (our DB) at the root

```json
{
  "posts": [
    {
      "id": "1",
      "title": "a title",
      "views": 100
    },
    {
      "id": "2",
      "title": "another title",
      "views": 200
    }
  ]
}
```

To run the server:

```
    npm run api
```
