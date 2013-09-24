# Meteor Websocket Test

[Meteor](http://www.meteor.com/) demo for Heroku websockets support.

# Running

``` bash
$ meteor remove autopublish
$ meteor
```

# Running on Heroku

``` bash
$ heroku create --buildpack https://github.com/oortcloud/heroku-buildpack-meteorite.git
$ heroku labs:enable websockets
$ git push heroku master
$ heroku open
```
