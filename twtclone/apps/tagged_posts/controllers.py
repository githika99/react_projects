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
    return {"tags": ["news", "technology", "sports"] }


@action("api/posts", method="GET")
def posts():

    return {"posts": [
        {"content": "Sky is going to drop to night..... :-).", "created_on": "05/01/2024", "created_by": "Easy Peasy Gir"},
        {"content": "Sky is going to drop to night..... :-).", "created_on": "05/01/2024", "created_by": "Easy Peasy Gir"}
    ]
    }


@action("api/posts", method="POST")
def posts():
    tweet_text = request.forms.get('tweet_text')

    return {"posts": "----  22we need to insert this NEW POST into database -----------", "tweet": {"content": tweet_text, "created_on": "05/01/2024", "created_by": "Easy Peasy Gir" }}

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
