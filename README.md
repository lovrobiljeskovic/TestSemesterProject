# TestSemesterProject

Coveralls markdown:
[![Coverage Status](https://coveralls.io/repos/github/lovrobiljeskovic/TestSemesterProject/badge.svg?branch=lovro/testcoverage)](https://coveralls.io/github/lovrobiljeskovic/TestSemesterProject?branch=lovro/testcoverage)

#Boundry Analaysis
The boundry analysis for teachers who can vote on the course depending on their teaching hours

| Lower Boundary  | Upper Boundary |
| ------------- | ------------- |
| -∞  | 20  |
| 20  | +∞  |


#Decision Table


| Condition  | | | | | | | | |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| has the teacher voted | F| | T| | T| | F| | F| 
| number of teaching hours |19| | 19| | 25| | 30| | 10|
| is teacher allowed to vote| F| | F| | T| | T| | F|

