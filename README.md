<h1 align="center">This is  README English - Read Vietnamese Readme here:<a   href="README_VIE.md"   target="_blank">README_VIE.md</a></h1>
 


<h1 align = "center">TherAIpist</h1>
<p align = "center">By Team J4F Rocket</p>
<p align = "center">Curent: Alpha DEMO</p>

<p align = "center">Welcome to our team project. Here is a page that shows how to set it up and shows some details. Please read carefully.</p>

# About - Về dự án

This is a project to protect everyone's health

## Pages and Features:
- Home 
- AI Assistant
- Login - Signup
- Your Journey
- Forums
- Blogs và Podcast

## Installation - Cách cài đặt

Use the package manager [pip](https://pip.pypa.io/en/stable/) to load the packages required in <span style="color:#FFD700">requirements.txt</span> <span style = "color:#FF4500"> (available in folder, same location as app.py)</span>.

Windows - CMD (Command prompt):
```bash
pip install -r "/path/to/requirements.txt"
```
Example: 
```bash
pip install -r "D:\20 Viet Thanh\Devs\Django\my-chatbot\requirements.txt"
```

MacOS Intel - Terminal:
(using Anaconda)
Create an environment named tf and enable it:
```bash
conda create -n tf tensorflow
conda activate tf
```


<p style = "background-color:#DC143C;"><b>Reason: Tensorflow is not supported on Mac via pip. See how to install on Mac Apple Silicon (M1, M2 Chip) at <span><a href="https://youtu.be/2C-B1VFMq58">here</a></span></b>< /p>

then download other packages via pip:
```bash
pip3 install -r "/path/to/requirementsMAC.txt"
```

## Usage - Sử dụng
After the installation is complete, do the following:

* 1: open and run <span style = "color:#F08080">train.py</span> to train the chatbot.
* 2: Run <span style="color:#F08080">app.py</span> or
```bash
flask run
```
...to launch the website
*3: Enjoy!

## Files: 
* <p><b><span style = "color:#F08080">train.py:</span></b> File for chatbot to "learn"</p>

* <p><b><span style = "color:#F08080">app.py:</span></b> Run programs and web pages</p>

* <p><b><span style = "color:#F08080">Intents.json:</span></b> Contains bot questions and answers</p>

* <p><b><span style = "color:#F08080">Files ending in .pkl and .h5:</span></b> Model for chatbot (Tensorflow file extension)</p>

* <p><b><span style = "color:#F08080">requirements.txt:</span></b> Contains packages to be downloaded (see settings)</p>

In addition there are:
* <p><b><span style = "color:#FF0000">404.html and 500.html (in Templates file):</span></b> Used for page error <span style = "color: #FFD700;">(404: wrong link; 500: server error)</span></p>
*And a few other things...

## How to - Cách vào trang chatbot
If it's working fine, do the following:

* 1: Click on <span style="color:#F08080">"AI Assistant"</span> on the Menu to enter the chat page.
* 2: To ask, you need to use the language <span style = "color:#FF0000;">English</span> to ask. If not, it won't understand and... answer indiscriminately. :v (you can refer to <span style="color:#F08080"><b>Intents.json</b></span>)

## Framework:
<img src = "static/images/Tensorflow.png"><h1>Tensorflow: For AI</h1>
<img src="static/images/flask.png"><h1>Flask: Run web page</h1>
<img src="static/images/bootstrap.png"><h1>Bootstrap: Framework UI</h1>

**<h1 style = "text-align: center">Now... invite you to try it out!</h1>**
<img   style = "display: block;margin-left: auto;margin-right: auto;width: 25%;"   src = "static/run.gif">
