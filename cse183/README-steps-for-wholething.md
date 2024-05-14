# Command executed to get this project setting up

# create a python virual environment
# any name of 'virtual environment' you like ( here cse183venv) with full file path
# It will create a folder cse183venv and store all Python Install Libs in that Folder ...
python -m venv ./cse183venv

# activate it , after this command, the RIGHT hand side of Terminal shows "name" of virtual env
. ./cse183venv/bin/activate


# install py4web framework as given in this url https://github.com/web2py/py4web 
python3 -m pip install --upgrade py4web --no-cache-dir 

# ran follwoing 3 commands, for 'password' prompt I gave 'gitu'
py4web setup apps
py4web set_password
py4web run apps


# finally ran the app as given in this url https://github.com/web2py/py4web 
# open browser at localhost:8000 , the web application shows , for password give above set one 'gitu'
py4web run -d demo apps


# creating a new py4web application
mkdir apps/app1
cd app1
touch __init__.py

# put some code as shown in above file: https://py4web.com/_documentation/static/en/chapter-05.html
py4web run apps -d app1

# open browser http://localhost:8000/app1
