#!/Library/Frameworks/Python.framework/Versions/3.8/bin/python3
from flask import Flask, render_template, request
import requests
from bs4 import BeautifulSoup


app = Flask(__name__)

@app.route('/')
def main():
    return render_template("indexWiki.html")

@app.route('/search', methods=['POST'])
def search():
    result = request.form
    mot = result['mot']
    res = requests.get(f"https://www.larousse.fr/dictionnaires/francais/{mot}/") # le f au debut fais qu'on peut utiliser {variable}
    soup = BeautifulSoup(res.text, 'html.parser')
    defText =[]
    definitions = soup.select("div#definition li.DivisionDefinition")
    for definition in definitions:
        defText.append(definition.text)

    return render_template("result.html", definitions=defText, mot=mot)

if __name__ == "__main__":
    app.run(debug=True)



def search(mot):
    defText = []
    res = requests.get(f"https://www.larousse.fr/dictionnaires/francais/{mot}/") # le f au debut fais qu'on peut utiliser {variable}
    soup = BeautifulSoup(res.text, 'html.parser')

    definitions = soup.select("div#definition li.DivisionDefinition")

    for i,definition in enumerate(definitions):
        defText.append(definition.text)
    #
    #return defText
