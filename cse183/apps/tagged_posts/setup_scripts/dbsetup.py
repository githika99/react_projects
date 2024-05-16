from py4web import action, redirect, Session, DAL, Field, URL
from py4web.utils.auth import Auth
import os

# ------------------------------------
# commenting the below function, it is redudant because once you call  create_cse183_module() funciton, it is calling controllers/startpage.py 
#  and creating  auth_user Table, so if you call this by itself, then it is becoming Duplicate ....
"""
def create_auth_usermodel():

    print('start of --------------:in side create_cse183_dbmode(), ... creating auth_user table')
    DB_FOLDER = os.path.join(os.path.dirname(__file__), '../database')
    db = DAL('sqlite://mydatabase.cse183db', folder=DB_FOLDER, pool_size=1)
    auth = Auth(Session, db)
    auth.enable()
"""

# ------------------------------------
def create_cse183_dbmodel():
    print('start of --------------:in side create_cse183_dbmode(), ... creating post_itme  tag_item tables')
    DB_FOLDER = os.path.join(os.path.dirname(__file__), '../database')
    db = DAL('sqlite://mydatabase.cse183db', folder=DB_FOLDER, pool_size=1)

    db.define_table(
        'post_item',
        Field('content'),
        Field('created_on', type='datetime'),
        Field('created_by'))

    db.define_table(
        'tag_item',
        Field('name'),
        Field('post_item_id', 'reference post_item'))


    db.post_item.insert(content='...value1', created_by='....value2')
    print('end of --------------:in side create_cse183_dbmode()')
                                                                  
