# Google Trends API Visualisation Summary
Google NFL visualisation

## Deadlines
* 14th January - first delivery to Google
* 20th January - final delivery to Google

## Description
We are going to make a one page website showing interesting things about the American Football League based on data from the Google Trends API. The visualisations on the page will be embedded into the Washington Post, blogs, people will tweet it, instagram it etc.

Google want to show off the API and it's power using a popular story. The story will be "who do fans support over the NFL season?". We also want to visualise the major "events" or "plays" that occur during the season. What is is people are searching for related to the NFL.

### What will the headlines say.
"NFL fans are not as loyal as you think!"

"Google discovers the hidden secrets of NFL fans"

### Top 5 emotions we what the users to feel
1. Excitement 
2. Intrigue
3. Surprise
4. Joy
5. Anticipation

### The top 3 questions the visualisation will solve
1. Who is supporting my team? Who is supporting other teams?
2. Make me remember the best bits of the season? "It wasn't always like it is now"
3. What else can I find out through google trends?

### Main demographics of the NFL fans:
![alt tag](https://raw.githubusercontent.com/Vizzuality/google-nfl/develop/app/images/docs/NFL%20demographic.png?token=AApJgybsbwDdMj5KwJMcODpJKAVjELZdks5UtpiIwA%3D%3D)


# What you need to know to write code.

## Technology Stack

This application uses:

* BackboneJS
* handlebars
* jquery
* sass

## Set-up dev environment

To setup your development environment, execute the following commands in your terminal:

```
git clone git@github.com:Vizzuality/google-nfl.git

# change to develop branch to start working
git checkout develop
bundle install
npm install
bower install
```

Having done this you are ready to run the application, just run, and point your browser to http://localhost:8000:

```
grunt
```

All grunt tasks are documented inside **Gruntfile.js**.

## Git Workflow

For this project **master** branch should always be ready to deploy to production, and **gh-pages** branch will be our development branch and the one we deploy to staging

We will use the following workflow:

1. *developer A* **starts** feature in Pivotal Tracker and branches off **develop**
2. After feature is done *developer A* creates a pull request from his branch to **develop**
3. *developer B* reviews pull request from *developer A*, makes any comments and suggestions. Once there are no more comments to be addressed, *developer B* merges pull request to **develop** and deploys (see Deployment section below). Marks story in Pivotal Tracker as **finished**
4. *tester (Alicia)* tests the feature on staging. If all looks good it **delivers** the story in Pivotal Tracker
5. *project manager (Craig)* reviews story on staging and **accepts/rejects** the story in Pivotal Tracker
 
When a few stories have been accepted and there are no stories waiting for review by the project manager we create a pull request with a new release from **gh-pages** to **master**, and once this has been reviewed and merged we are ready to deploy to production.

**[Pivot Tracker](https://www.pivotaltracker.com/n/projects/1243362)**

## Deployment

To deploy the application run the following commands:

```
grunt build
grunt deploy
```

This will deploy the application to Github Pages (branch **gh-pages**) of this repository.









