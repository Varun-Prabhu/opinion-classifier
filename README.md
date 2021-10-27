# opinion-classifier
Identifies author of user-supplied opinionated tweets . Uses Brain.js libraries for natural langage machine learning traning. 

Full paper with figures: https://docs.google.com/document/d/1bjLj8q5xTvvL8mwfKnJ4k4ekLxRPwkiVAVblk2qXl4s/edit?usp=sharing
Varun Prabhu || 

Creating An AI Program to Generate Controversial Statements and Respond to Model Civilized Discussions  

Abstract
People’s casual conversations, or the reply section of a post online, can quickly turn into an argument, filled with personal attacks, especially in today’s world where someone can hide behind a phone or computer screen. To counteract this problem I have made a program that can serve as an educational tool for people when arguing or debating to keep it civil and respectful. There were 3 main stages to this project. The first was to look at similar programs and applications. This gave me a base for what I could do to make this project. The second stage was where I started coding the project. In this, I used the Brain.js library to make “trigger words” in the program that would call for certain prompts.  I used JavaScript to code this project. This stage took the longest time out of all. Finally, the third stage was where I tested the program, and analyzed the feedback from the trials experimenting with it. I analyzed how the conversation went, and if the program was able to use the correct prompts, it would be recorded as positive data. The data so far is limited yet trending towards positive. This program could be used with people who have trouble communicating, and people on the autism spectrum, but the goal is for it to be able to help anyone, as a small-scale version of an idea and tool that can be greatly expanded on in the future.

…
Introduction 
	Arguments can quickly start from casual conversations, to the reply section of a post online, filled with personal attacks and insults, especially in today’s world where someone can hide behind a phone or computer screen. This is explained in the article “It's Easy To Be Mean Behind A Screen: How Social Media Has De-Sensitized This Generation” by Katie Gonzalez.
This program/project will serve as an educational tool and model to help guide people who disagree on a certain topic to still be respectful, and can be used with people who have trouble communicating, and people on the autism spectrum, though the goal is for it to be able to help anyone. There are few programs currently that do this. One that is close is a website called Kialo that is a place online for people to debate civilly. Kialo explained in  “Meet the start-up that wants to sell you civilised debate” by Jonathan Margolis. But this project differs as it is a programmed system to detect a person’s opinion on a statement, and then calmly argue with the user. To do this in the coding language, in this case JavaScript, a library was needed. After numerous grading systems through a Pugh Matrix (Figure 1) the article “You can build a neural network in JavaScript even if you don’t really understand neural networks” by Daniel Simmons implied that Brain.js would be the best for my project. The guidelines for what ways debating would be in my project were based on the article “Eight Rules for a Civilized Debate or Argument” by Claiborne Mize. For the program to understand any of the words in context, Natural Language Processing (NLP) and the Natural Language ToolKit (NLTK) were huge parts of this project. Many concepts within this, such as the terms “corpora” and “lexicon” were explained in the book “Natural Language Processing with Python– Analyzing Text with the Natural Language Toolkit” by Steven Bird, Ewan Klein, and Edward Loper. The program interprets certain data with “training” (training data is data you add to help a program understand an input correctly- more training data means a higher percentage of the computer getting the right prediction), as do AI programs. The prior research for this project was spread apart between two major areas of studies: The Components of Civilized Discussions and The Processes of Artificial Intelligence/ Machine Learning. With all of this, the project strings concepts together by attempting to solve a big social problem with concepts of machine learning and datasets.

Materials and Methods/Procedure
Figure 1:  

	
Microsoft Cognitive Services was initially going to be used, but the library was switched to Brain.js. The functionality of Brain.js was tested out by making a program that could distinguish a Tweet by whether it was by Donald Trump or Kim Kardashian. This was done by first making adding a few Trump tweets and a few Kardashian tweets into a training data file. The program was coded so that based on the words in the tweet, it would use Natural Language Processing to predict the person who made it. First the functions of the program would be defined, the model would be trained, and then the specific tweet would be taken and executed. The program was successful, as it was able to identify the right person on most of the trials, and this was based on little training data. For this project, one part was to give the user a controversial statement, to which they would respond with through a web browser prompt. Based on what the person types, that would be taken just like the tweets and the program would try to predict if the person agrees or disagrees. There was some difficulty when trying to implement this program into Brain.js at first, because the program stopped using the training data. After a few days, with changes to the way the data was being stored, by pre-training it and saving the data, the program started to work again. A plan was made for how the whole project’s coding would work out. New prompts, which were going to be more controversial statements, were going to be added, and would be randomly displayed. More answers to the prompts and more training data for the program to work are being added. The hope is for little bit of CSS for the web browser, where this program will take place. After that, there will be a final test how good the program works, and the probability of it displaying the right statements. The Logical Design is shown below (Figure 2). 
Figure 2 (Above):

	There are also many pictures depicting the progress during this project (Figures 3,4,5).

Figure 3: This is some of my coding for the Tweet Detector program.

	Figure 4: This is some of the training data from the sample tweets.



Figure 5: This shows input and output of the tweet program.


Data/Results
	When testing the predictions of this project for results, the program was to determine if the person agreed with a statement or not. The “Accuracy Percentage” was how “confident” the program was that it had the right answer. Here were the results from the different versions of programs:
Tweet Detector:  Correct Prediction: 18/20 Trials; Highest Accuracy: 91%, Lowest: 39%
Initial Argument Position Detector:  Correct Prediction: 5/20 Trials; Highest Accuracy: 50%, Lowest: 2%
New Argument Classifier (In progress) :  Correct Prediction: 4/5 Trials; Highest Accuracy: 98%, Lowest:10%
Here is the table for the newest program (New Argument Classifier) 
Figure 6:

Conclusions
	At first, the tweet detector worked very well (Correct 18/20 Trials) . When this project was implemented into the tweet detector program, it didn’t run well (Only 5/20 times correct). In conclusion, it was found out that the Brain.js training model couldn’t handle that much data (maybe as an overflow error). A new way of getting the program to work was found (pre-training),  and after a few (5) trials, it worked good (4/5 times correct with a high score of 98% accuracy confidence). Currently more training data is being added and more prompts are being tested so that a user can have a “conversation” with the program. One main limitation is time, which if there is enough of, CSS may be added to the web browser where the program will be displayed on. There were other libraries that may be used, but as shown on the Pugh Matrix, Brain.js is the best for so far. 
Discussion
As for future implications, whether it be this project or a future rendition on a bigger scale (this program seems to be more of a proof-of-concept at this point in time), some uses for this type of program could be (some in summary of aforementioned problems) a guide for people with communication issues, people on the autism spectrum, people going for political jobs, people who go on social media and online comment sections a lot, and also as a great educational model for debating. While at present there is still a lot of work to do, the hope is that this project will go somewhere someday no matter who is programming it, as something that could help anyone.

Works Cited
Bird, Steven, et al. Natural Language Processing with Python – Analyzing Text with the Natural Language Toolkit. E-book.
Gonzalez, Katie. "It's Easy to Be Mean behind a Screen: How Social Media Has De-Sensitized This Generation." EliteDaily.com, www.elitedaily.com/life/culture/social-media-makes-us-mean/649029. Accessed 2 Feb. 2019.
"Meet the start-up that wants to sell you civilised debate." FinancialTimes.com, www.ft.com/content/4c19005c-ff5f-11e7-9e12-af73e8db3c71. Accessed 2 Feb. 2019.
Mize, Claiborne. "Eight Rules for a Civilized Argument." PowerOfHumility.org, powerofhumility.org/eight-rules-civilized-argument/. Accessed 23 Jan. 2019.
Simmons, Daniel. "You Can Build a Neural Network in JavaScript Even If You Don't Really Understand Neural Networks." ITNext.io, itnext.io/you-can-build-a-neural-network-in-javascript-even-if-you-dont-really-understand-neural-networks-e63e12713a3. Accessed 23 Jan. 2019.
