<h1 align="center">Đây là README Tiếng Việt - Read English Readme here:<a   href="README.md"   target="_blank">README.md</a></h1>
 


<h1 align = "center">TherAIpist</h1>
<p align = "center">Bởi Team J4F Rocket</p>
<p align = "center">Curent: Alpha DEMO</p>

<p align = "center">Chào mừng đến với dự án của nhóm mình. Đây là trang hướng dẫn cách đặt và chỉ ra 1 số chi tiết. Xin hãy đọc kĩ.</p>

# About - Về dự án

Đây là 1 dự án bảo vệ sức khoẻ cho tất cả mọi người

## Pages and Features:
- Home 
- AI Assistant
- Login - Signup
- Your Journey
- Forums
- Blogs và Podcast

## Installation - Cách cài đặt

Sử dụng trình quản lý gói [pip](https://pip.pypa.io/en/stable/) để tải các gói cần có trong <span style = "color:#FFD700">requirements.txt</span><span style = "color:#FF4500"> (có sẵn trong folder, cùng vị trí với app.py)</span>.

Windows - CMD (Command prompt):
```bash
pip install -r "/path/to/requirements.txt"
```
Ví dụ: 
```bash
pip install -r "D:\20 Viet Thanh\Devs\Django\my-chatbot\requirements.txt"
```

MacOS Intel - Terminal:
(dùng Anaconda)
Tạo môi trường tên tf và kích hoạt nó:
```bash
conda create -n tf tensorflow
conda activate tf
```


<p style = "background-color:#DC143C;"><b>Lí do: Tensorflow không support trên Mac qua pip. Xem cách cài đặt trên Mac Apple Silicon (Chip M1, M2) ở <span><a href = "https://youtu.be/2C-B1VFMq58">đây</a></span></b></p>

sau đó tải các package khác qua pip:
```bash
pip3 install -r "/path/to/requirementsMAC.txt"
```

## Usage - Sử dụng
Sau khi cài đặt xong, bạn hãy làm các thao tác sau:

* 1: mở và chạy <span style = "color:#F08080">train.py</span> để luyện cho chatbot.
* 2: Chạy <span style = "color:#F08080">app.py</span> hoặc
```bash
flask run
```
...đẻ chạy trang web
* 3: Tận hưởng thôi!

## Files: 
* <p><b><span style = "color:#F08080">train.py:</span></b> File để cho chatbot "học"</p>

* <p><b><span style = "color:#F08080">app.py:</span></b> Chạy chương trình và trang web</p>

* <p><b><span style = "color:#F08080">Intents.json:</span></b> Chứa các câu hỏi và trả lới của bot</p>

* <p><b><span style = "color:#F08080">Các file có đuôi .pkl và .h5:</span></b> Model cho chatbot (đuôi tệp của Tensorflow)</p>

* <p><b><span style = "color:#F08080">requirements.txt:</span></b> Chứa các gói cần tải xuống (xem phần cài đặt)</p>

Ngoài ra có: 
* <p><b><span style = "color:#FF0000">404.html và 500.html (trong tệp Templates):</span></b> Dùng cho page error <span style = "color:#FFD700;">(404: sai link; 500: lỗi server)</span></p>
* Và 1 số thứ khác...

## How to - Cách vào trang chatbot
Nếu đã hoạt động trơn tru, bạn hãy làm các thao tác sau:

* 1: Click vào <span style = "color:#F08080">"AI Assistant"</span> trên Menu để vào trang chat.
* 2: Để hỏi, bạn cần dùng ngôn ngữ <span style = "color:#FF0000;">Tiếng Anh</span> để hỏi. Nếu không, nó sẽ không hiểu và.... trả lời bừa. :v (bạn có thể tham khảo trên <span style = "color:#F08080"><b>Intents.json</b></span>)

## Framework:
<img src = "static/images/Tensorflow.png"><h1>Tensorflow: Dùng cho AI</h1>
<img src = "static/images/flask.png"><h1>Flask: Chạy trang web</h1>
<img src = "static/images/bootstrap.png"><h1>Bootstrap: Framework UI</h1>
    

