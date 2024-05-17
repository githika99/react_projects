from py4web import action, redirect, Session, DAL, URL
from py4web.utils.auth import Auth
import os

session = Session(secret='my secret key')
#DB_FOLDER = os.path.join(os.path.dirname(__file__), 'databases')   # old one we are not using /controllers/database  folder 
DB_FOLDER = os.path.join(os.path.dirname(__file__), '../database')   # path relative to CURRENT FILe, that is THIS file

db = DAL('sqlite://mydatabase.cse183db', folder=DB_FOLDER, pool_size=1)
auth = Auth(session, db)
auth.enable()

# https://github.com/web2py/py4web/blob/master/apps/showcase/examples/common.py
auth.param.registration_requires_confirmation = False
auth.param.registration_requires_approval = False
auth.param.password_complexity = {"entropy": 2}   # higher the number, higher the complexity

@action('index')
@action.uses(auth)
def index():
    user = auth.get_user() or redirect(URL('auth/login'))
    #print("user: ", user)
    return 'Welcome ------- %s' % user.get('first_name')



# ----------------------------------------------------------------
import datetime
from py4web import action

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
        ]}


@action("api/posts", method="POST")
def posts():
    return {"posts": "---- we need to insert this NEW POST into database -----------"}
