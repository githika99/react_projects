"""
This file defines actions, i.e. functions the URLs are mapped into
The @action(path) decorator exposed the function at URL:

    http://127.0.0.1:8000/{app_name}/{path}

If app_name == '_default' then simply

    http://127.0.0.1:8000/{path}

If path == 'index' it can be omitted:

    http://127.0.0.1:8000/

The path follows the bottlepy syntax.

@action.uses('generic.html')  indicates that the action uses the generic.html template
@action.uses(session)         indicates that the action uses the session
@action.uses(db)              indicates that the action uses the db
@action.uses(T)               indicates that the action uses the i18n & pluralization
@action.uses(auth.user)       indicates that the action requires a logged in user
@action.uses(auth)            indicates that the action requires the auth object

session, db, T, auth, and tempates are examples of Fixtures.
Warning: Fixtures MUST be declared with @action.uses({fixtures}) else your app will result in undefined behavior
"""

from py4web import action, request, abort, redirect, URL
from yatl.helpers import A
from .common import db, session, T, cache, auth, logger, authenticated, unauthenticated, flash

# https://github.com/web2py/py4web/blob/master/apps/showcase/examples/common.py
auth.param.registration_requires_confirmation = False
auth.param.registration_requires_approval = False
auth.param.password_complexity = {"entropy": 5}   # higher the number, higher the complexity

@action("index")
@action.uses("index.html", auth, T)
def index():
    user = auth.get_user()
    message = T("Hello {first_name}").format(**user) if user else T("Hello")
    return dict(message=message)


# ----------------------- main project code ----------------------------------                                                                    
#-------------------------                  ----------------------------------
@action("api/tags", method="GET")
def tags():
    data = db().select(db.tag_item.name, distinct=True)
    tags = [tag["name"] for tag in data]

    return {"tags": tags }

# --------------------------------------------------------
@action("api/posts", method="GET")
def posts():
    tags = request.query.get('tags')   # these 2 lines no use for now
    tag_list = tags.split(',') if tags else []

    tweets = db().select(db.post_item.ALL)
    tags_list = db().select(db.tag_item.name, distinct=True)
    tags = [tag["name"] for tag in tags_list]    
    print("tags: ", tags)
    return {"tweets":tweets, "tags": tags }


   

# ------------------
def split_text_and_hashtags(text):
  """
  This function splits a text string containing hashtags into the text itself
  and a list of hashtags.
  Args:
      text: The text string to split.
  Returns:
      A tuple containing the text and a list of hashtags.
  """
  words = text.split()
  hashtags = [word[1:] for word in words if word.startswith('#')]
  text = ' '.join([word for word in words if not word.startswith('#')])
  return text, hashtags


# ----------------------------------------------
@action("api/posts", method="POST")
def posts():
    tweet_text = request.forms.get('tweet_text')
    text, hashtags = split_text_and_hashtags(tweet_text)
    
    postID = db.post_item.insert(content=text)
    for hashtag in hashtags:
        db.tag_item.insert(post_item_id=postID, name=hashtag)
    db.commit()

    return {"msg": "DB recored inserted, new record ID is:" + str(postID) }


# ----------------------------------------------
@action("api/posts/<post_item_id>", method="DELETE")
def delete_posts(post_item_id):

    query = (db.tag_item.post_item_id == post_item_id)
    myset = db(query)
    myset.delete()
    db.commit()
    # one lineer below, but above 3 lines shows what is happening
    #db(db.tag_item.post_item.id == post_item_id).delete()
    return {"status": 200 }


# ---------- basic test funcitons to test different ROUTES ------------------------------------------------------
import datetime
from py4web import action , response, request


@action('index2')
def page():
    return "Welcome to my Twitter clone web site .. TIME now is %s" % datetime.datetime.now()

@action('timenow')
def page():
    return "Time now is  %s" % datetime.datetime.now()

@action("testpage")
@action.uses("page1.html")
def page1():
    return {"name": "Gitu ", "age": 16}


@action('color/<name>')
def color(name):
    if name in ['red', 'blue', 'green']:
        return 'You picked color %s' % name
    return 'Unknown color %s' % name
