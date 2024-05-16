from py4web import DAL, Field


print('in side 0000000')

def createdb():
    print('in side 1111111111')
    db = DAL('sqlite://mydatabase.cse183db', folder="./apps/tagged_posts/database")  

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
    print('in side 2222222 1111111111')
