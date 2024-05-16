from py4web import action, redirect, Session, DAL, URL
from py4web.utils.auth import Auth
import os

session = Session(secret='my secret key')
DB_FOLDER = os.path.join(os.path.dirname(__file__), '../database')   # path relative to CURRENT FILe, that is THIS file
db = DAL('sqlite://storage.db', folder=DB_FOLDER, pool_size=1)
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
    return 'Welcome %s' % user.get('first_name')

