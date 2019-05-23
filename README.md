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

