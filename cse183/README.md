# Command executed to get this project setting up

# create a python virual environment
# any name of 'virtual environment' you like ( here cse183venv) with full file path
# It will create a folder cse183venv and store all Python Install Libs in that Folder ...
python -m venv ./venv

# activate it , after this command, the RIGHT hand side of Terminal shows "name" of virtual env
. ./venv/bin/activate


# install py4web framework as given in this url https://github.com/web2py/py4web 
python3 -m pip install --upgrade py4web --no-cache-dir 


# to execute a function inside a file  /tagged_posts/test.py/
py4web call apps tagged_posts.test.myfn

# the following will create all the Database table required for this application cse183 
py4web call apps tagged_posts.setup_scripts.dbsetup.create_cse183_dbmodel

# put some code as shown in above file: https://py4web.com/_documentation/static/en/chapter-05.html
py4web run apps -d tagged_posts

# open browser http://localhost:8000/tagged_posts

