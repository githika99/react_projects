import datetime
from py4web import action

@action('index')
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
