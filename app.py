# libraries
import random
import numpy as np
import pickle
import json
from flask import Flask, render_template, request
from flask_ngrok import run_with_ngrok
import nltk
from keras.models import load_model
from nltk.stem import WordNetLemmatizer


lemmatizer = WordNetLemmatizer()


# chat initialization
model = load_model("chatbot_model_v2.h5")
intents = json.loads(open("intents.json").read())
words = pickle.load(open("words_v2.pkl", "rb"))
classes = pickle.load(open("classes_v2.pkl", "rb"))

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home():
    return render_template("index.html")

@app.route("/blog", methods=["GET", "POST"])
def blog():
    return render_template("Blog.html")

@app.route("/blogshow", methods=["GET", "POST"])
def blog_show():
    return render_template("Blog-show.html")

@app.route("/podcastshow", methods=["GET", "POST"])
def podcast_show():
    return render_template("Podcast-show.html")

@app.route("/podcast", methods=["GET", "POST"])
def podcast():
    return render_template("Podcast.html")

@app.route("/documentation", methods=["GET", "POST"])
def doc():
    return render_template("Documentation.html")

@app.route("/yourjourney", methods=["GET", "POST"])
def yourjourney():
    return render_template("YourJourney.html")

@app.route("/login", methods=["GET", "POST"])
def signin():
    return render_template("login.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    return render_template("register.html")

@app.route("/about", methods=["GET", "POST"])
def about():
    return render_template("About.html")

@app.route("/ai", methods=["GET", "POST"])
def ai():
    return render_template("Dolphins.html")

@app.errorhandler(404)
def not_found(error):
    return render_template("404.html"), 404

#Handling error 500 and displaying relevant web page
@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'),500

@app.route("/get", methods=["POST"])
def chatbot_response():
    msg = request.form["msg"]
    # checks is a user has given a name, in order to give a personalized feedback
    if msg.startswith("my name is"):
        name = msg[11:]
        ints = predict_class(msg, model)
        res1 = getResponse(ints, intents)
        res = res1.replace("{n}", name)
    elif msg.startswith("hi my name is"):
        name = msg[14:]
        ints = predict_class(msg, model)
        res1 = getResponse(ints, intents)
        res = res1.replace("{n}", name)
    # if no name is passed execute normally
    else:
        ints = predict_class(msg, model)
        res = getResponse(ints, intents)
    return res


# chat functionalities
def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words


# return bag of words array: 0 or 1 for each word in the bag that exists in the sentence
def bow(sentence, words, show_details=True):
    # tokenize the pattern
    sentence_words = clean_up_sentence(sentence)
    # bag of words - matrix of N words, vocabulary matrix
    bag = [0] * len(words)
    for s in sentence_words:
        for i, w in enumerate(words):
            if w == s:
                # assign 1 if current word is in the vocabulary position
                bag[i] = 1
                if show_details:
                    print("found in bag: %s" % w)
    return np.array(bag)


def predict_class(sentence, model):
    # filter out predictions below a threshold
    p = bow(sentence, words, show_details=False)
    res = model.predict(np.array([p]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    # sort by strength of probability
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
    return return_list


def getResponse(ints, intents_json):
    tag = ints[0]["intent"]
    list_of_intents = intents_json["intents"]
    for i in list_of_intents:
        if i["tag"] == tag:
            result = random.choice(i["responses"])
            break
    return result


if __name__ == "__main__":
    app.debug = False
    app.run()
