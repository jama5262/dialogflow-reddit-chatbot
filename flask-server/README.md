# dialogflow-reddit-chatbot (Server Side)
A dailogflow chatbot that consumes the reddit api using a flask server and a react js client

Demo 1 | Demo 2
------------ | ------------- 
<img src="../demos/image1.gif" alt="alt text" height="500px"> | <img src="../demos/image3.gif" height="500px">

## Endpoints
| Title | Endpoint                                   | Method | Description |
| ------------- |--------------------------------------------| ------------- | ------------- |
| Chatbot  | /chatbot?query=`show me top 5 funny posts` | GET  | Returns a fullfilment message and matched reddit posts  |

# Table of Contents
- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- 
## Built-With
- [Flask](https://flask.palletsprojects.com/en/1.1.x/)
- [Dialogflow](https://cloud.google.com/dialogflow/?utm_source=google&utm_medium=cpc&utm_campaign=emea-emea-all-en-dr-skws-all-all-trial-p-gcp-1011340&utm_content=text-ad-none-any-DEV_c-CRE_550162822986-ADGP_Hybrid%20%7C%20SKWS%20-%20PHR%20%7C%20Txt%20~%20AI%20%26%20ML%20~%20Dialogflow%23v3-KWID_43700066772651217-aud-488003287395%3Akwd-389521182622-userloc_9076828&utm_term=KW_dialogflow-NET_g-PLAC_&gclid=Cj0KCQiAzeSdBhC4ARIsACj36uF6zxdWzxvsFPqTKmusbtAQFAR2C4m4aWQ_IUrjwzPAohr-dFFaWaUaApLnEALw_wcB&gclsrc=aw.ds)

## Installation

### Cloning
Clone this repo to your local machine using `https://github.com/jama5262/dialogflow-reddit-chatbot.git`

### Setup
To get started, cd into the project and follow the following steps
1. #### Change direcory to the `flask-server` folder
```
cd  flask-server
```

2. #### Create a virtual environment

```
python -m venv venv
```

And activate (For Windows)

```
.\venv\bin\activate
```

3. #### Create a `.env` file
Create a `.env` file 

```
touch .env
```

And add the following
```
FLASK_APP=run.py
FLASK_ENV=development
DIALOGFLOW_PROJECT_ID={put-google-cloud-project-id-here}
GOOGLE_APPLICATION_CREDENTIALS={put-google-service-account-json-file-path-here}
```

4. #### Installing all packages
After creating the `.env` file run the following to install all the packages needed
```
pip install -r requirements.txt
```
Great the project has been setup 👍

## Usage

And finally, to start using it locally, run the following
```
flask run
```

You can find the app here http://localhost:5000

### Sample success and error responses
#### Success

##### Request
```
http://localhost:5000/chatbot?query=show me top 5 funny posts
```

##### Response
```
{
  "data": {
    "bot": true,
    "customFullfilment": "",
    "fullfilment": "Here you go 👍",
    "redditPosts": [
      {
        "subreddit": "r/funny",
        "title": "My cab driver tonight was so excited to share with me that he’d made the cover of the calendar. I told him I’d help let the world see",
        "url": "/r/funny/comments/7mjw12/my_cab_driver_tonight_was_so_excited_to_share/"
      },
      {
        "subreddit": "r/funny",
        "title": "Guardians of the Front Page",
        "url": "/r/funny/comments/5gn8ru/guardians_of_the_front_page/"
      },
      {
        "subreddit": "r/funny",
        "title": "Gas station worker takes precautionary measures after customer refused to put out his cigarette",
        "url": "/r/funny/comments/7431qq/gas_station_worker_takes_precautionary_measures/"
      }
    ]
  },
  "status": 200
}
```

