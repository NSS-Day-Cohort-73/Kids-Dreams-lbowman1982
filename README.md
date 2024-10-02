# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   >  In the Kids.js module, when the event listener function is invoked it will display in the window alert the wish of that child, by checking the dataset in celebrities.js and then by using an if statement it only displays when a child's name is clicked only.  

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > Because in order to match both the child to the celebrity it must iterate through the entire array to get the matches of each child one at a time.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > This takes place in the kids.js module, by asking it to access the dataset in the database module and asking it to show window alert displaying wish when a child's name is clicked and then an if statement saying if what is clicked is not a child's name then in an else if statement saying if a celeb name is clicked then display the sport which is also found in the dataset, in the database

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > First, the module imports three functions from individual modules (celebrities.js, kids.js and pairings.js)  The main module is responsible for creating the HTML, then the kids(), celebrities() and pairings() functions are called and return in the form of HTML to the main module.   
