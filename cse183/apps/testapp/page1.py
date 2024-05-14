import datetime
from py4web import action

@action('index')
def page():
    return "hello, now is %s" % datetime.datetime.now()

@action('color/<name>')
def color(name):
    if name in ['red', 'blue', 'green']:
        return 'You picked color %s' % name
    return 'Unknown color %s' % name

