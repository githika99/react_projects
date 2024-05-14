import datetime
from py4web import action

@action('index')
def page():
    return "hello, now is %s" % datetime.datetime.now()

@action('gitu')
def page():
    return "hello 2222, now is %s" % datetime.datetime.now()

@action("page2")
@action.uses("mypage.html")
def page1():
    return {"name": "Gitu ", "age": 16}


@action('color/<name>')
def color(name):
    if name in ['red', 'blue', 'green']:
        return 'You picked color %s' % name
    return 'Unknown color %s' % name

