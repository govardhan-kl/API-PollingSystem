# A API Polling System

### Routes used
- /questions/create (To create a question)
- /questions/:id/options/create (To add options to a specific question)
- /questions/:id/delete (To delete a question)
- /options/:id/delete (To delete an option)
- /options/:id/add_vote (To increment the count of votes)
- /questions/:id (To view a question and it’s options)


### Tech Stack
 - NodeJS,ExpressJS,MongDB,EJS,JavaScript

  - Data
	- MongoDB
        - Models/Collections
            - options
            - questions

- Functions used in controllers(in code)
    - Questions_controller
        - create --> This function is used to create a question
        - create_options --> To create option for a  particular question
        - delete --> To delete a question
        - display --> to fetch a particular question
    - Options_controller
        - deleteOption --> To delete a option
        - add_vote --> To add a vote to a particular option