# dialogflow-reddit-chatbot
A dailogflow chatbot that consumes the reddit api using a flask server-side and react client-side

## Endpoints
| Title | Endpoint | Method | Description |
| ------------- | ------------- | ------------- | ------------- |
| Render React UI  | /  | GET  | Render the react link previewer UI  |
| Chatbot  | /predict?query=`show me top 5 funny posts`  | GET  | Returns a fullfilment message and matched reddit posts  |

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [License](#license)

## Installation

### Cloning
Clone this repo to your local machine using `https://github.com/jama5262/dialogflow-reddit-chatbot.git`

### Setup
To get started, cd into the project and follow the following steps
1. #### Switch to `flask-server` branch
```
git checkout flask-server
```

2. #### Create a virtual environment

```
virtualenv venv
```

And activate (For Windows)

```
venv\Script\activate
```

3. #### Create a `.env` file
Create a `.env` file and add the following
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
#### Error
```
{
  "error": "Looks like you didn't pass anything",
  "status": 422
}
```

## Support

Reach out to me at one of the following medias!

- Email at jama3137@gmail.com
- Twitter [timedjama5262](https://twitter.com/timedjama5262)

## License

```
MIT License

Copyright (c) 2020 Jama Mohamed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
