# TestSemesterProject

[![Coverage Status](https://coveralls.io/repos/github/lovrobiljeskovic/TestSemesterProject/badge.svg)](https://coveralls.io/github/lovrobiljeskovic/TestSemesterProject)
[![Build Status](https://travis-ci.com/lovrobiljeskovic/TestSemesterProject.svg?branch=master)](https://travis-ci.com/lovrobiljeskovic/TestSemesterProject)

## Links

- [User stories](https://docs.google.com/document/d/102noJkplHfuhDPHFSsYH5lnx4m_IzrlVCwuL41aUFME/edit?fbclid=IwAR2QpogKHWDyKhF_b626QHPvfFxwYA8phfQc3mZpaxqxdgH6Useaz8X90G0)
- [PRoject description](https://github.com/datsoftlyngby/soft2019spring-test/blob/master/Assignments/TestSemesterProject.pdf)

## Boundry Analaysis
The boundry analysis for teachers who can vote on the course depending on their teaching hours

| Lower Boundary  | Upper Boundary |
| ------------- | ------------- |
| -∞  | 20  |
| 20  | +∞  |


## Decision Table


| Condition  | | | | ||
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| has the teacher voted | F | T | T | F| F | 
| number of teaching hours |19| 19| 25| 30| 10|
| is teacher allowed to vote| F| F| T| T| F|

We didn't test all the conditions because they are redundant and we used equivalence partitioning

##Report

		 	 	 							
**Team collaboration**
						
We have used tools from agile development to communicate to all team members. We have used tools such as User stories, tasks and sprints. Furthermore we had a stand up meeting each time we meet and worked on the project. This made it easy for us to have good overview of what we had achieved so far and what was missing .
	
    					
**Test automation strategy**
						
We have decided to use Travis because we deemed it as the best CI/CD chain for JS. Since we had implemented our backend in express and our frontend in react, it was really easy to add our
testing components to CI and run the build after every push on git. When our build is executed, we first set up the build cache so that we can actually run other scripts. We then run the linting which is done with ESLint together with the coverage tests and lastly for automated tests we used cucumberJS. At the later point, we run selenium test for the web browser automation to confirm that the server and the client are running as intended. The build will either fail or pass depending if the test criteria have been met.

						
**Non-functional requirements**
						
How do you deal with non-functional issues?
Given the scope of the project, no non-functional issues were covered at the time. Although if looking towards the future, we discussed performance and load testing. The fact the projects front-end is decoupled from the back-end makes it ideal for backend HTTP performance testing since all it is an API. To achieve that we could use tools such as JMeter(even though the API itself is written in Javascript). JMeter would allow us to see, amongst other things, how the API response time(or lack of response) varies when changing the amount of concurrent users.


**Testability**

Our solution is very testable because we used Test Driven Development approach. Before building any of the functionalities we made sure to build the tests first to ensure integrity of the code.
We would first discuss to understand the feature's specification and requirements and based on the knowledge gathered we would build tests which would define the functionality itself. Afterwards, we would run all the tests to validate that the test harness is working correctly, shows that the new test does not pass without requiring new code because the required behaviour already exists, and it rules out the possibility that the new test is flawed and will always pass. The tests should fail for the expected reason.


						
**Test design techniques**
					
The group have  used “Boundary Value Analysis”, “Equivalence Partitioning”, “Decision Table Testing”. Before writing any code or test for a user story, we sat down and talked about, if there were a need for one or all of these 3 techniques.  If there was a need, we would start by using them. Next we would  implement the test and the code.  So overall the 3 techniques were very useful for our group in this project. In our readme you can see one scenario where we have used these 3 techniques.			
			


