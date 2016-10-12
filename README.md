## System Preparation

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)

## Local Installation

1. Clone this repo, or download it into a directory of your choice.
2. Inside the directory, run `npm install`.
3. Run `bundle install`

## Usage

**development mode**

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting etc etc.

```shell
$ bundle exec jekyll clean; bundle exec jekyll build; gulp
```

## TOOD: Deploy with s3cmd

s3cmd sync ~/whatever/folder/ s3://some-bucket/some/path/
