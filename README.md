# Blog Content

Content (articles and comments) of my blog at https://blog.ttulka.com

## Add a new comment

You can add a new comment by opening a pull request upon the particular file in the `/site/comments` directory.

It is a JSON file with the same name as the article's URI (e.g. `article-uri.json`) with the following structure:

```json
{
  "comments": [{
    "author": "Your name",
    "createdAt": "2022-01-15",
    "body": "Your comment 2"
  }, {
    "author": "Your name",
    "createdAt": "2020-01-14",
    "body": "Your comment 1",
    "answers": [{
        "author": "Your name",
        "createdAt": "2020-01-14",
        "body": "Your answer 1"
      }, {
        "author": "Your name",
        "createdAt": "2020-01-16",
        "body": "Your answer 2"
      }
    ]
  }
]}
```
