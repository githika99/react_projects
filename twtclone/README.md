apps/password.txt file is created with the password I gave as 'gitu'

# when you use this url first time on browser it asks password, give 'gitu'

localhost:8000/\_dashboard

# be in a the parent folder of 'apps' and issue this command to create "tagged_posts" app

py4web new_app apps tagged_posts

# --------------------------------------

Registration pending message after Registering new user is fixed with by
adding auth.parms. ... = False in "index" route

# -----------------------------------------------------------------

# ========== How to delete Data from Databases =========================

1. be in PARENT foldr of 'apps' and issue this command on terminal
   py4web shell apps

2. you see shell prompt, and paste following 3 one at time and Enter

from py4web import DAL, Field
from apps.tagged_posts import db
db.tables()

3. Issue the below one after another and finally 3rd one, it will delete ALL Records from tables

db(db.tag_item).delete()

db(db.post_item).delete()

db.commit()

4. go to the github Vscode, you see 2 FILES changed, commit these 2 files and Git push
   file storage.db
   service.storage

# ---------- SQL queries ----------------------

### ----- from same above shell

db.executesql('select \* from tag_item')
db.executesql('delete from post_item where id > 10')

for row in db(db.tag_item.id > 20).select():
.... print(row.id)

for row in db().select(db.tag_item.ALL):
... print(row.post_item_id)

### ------------------------------- Dynamic list works -----

mytags = [ "news", "sports" , "om"]
query = db.tag_item.name.belongs(myids)
rows = db(query).select()
for row in rows:
... print(row.post_item_id)

#### ---- delete --------

db(db.mytable.id == myid).delete()
db.commit()
