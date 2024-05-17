"""
This file defines the database models
"""

from .common import db, Field
from pydal.validators import *

### Define your table below
#
db.define_table('thing', Field('name'))
#

db.define_table(
        'post_item',
        Field('content'),
        Field('created_on', type='datetime'),
        Field('created_by'),
        Field('auth_signature'))

db.define_table(
        'tag_item',
        Field('name'),
        Field('post_item_id', 'reference post_item'))

## always commit your models to avoid problems later
#
db.commit()
#
