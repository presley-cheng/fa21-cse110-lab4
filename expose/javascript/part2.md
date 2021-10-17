### Part 2
## Question 1
print the number 3, because i was declared through a var keyword in the for loop, which persists beyond blocks, and since i was incremented on every iteration of the loop plus the last time it was incremented to exit out of the loop, we get 3.
## Question 2
print the number 150, because discountedPrice was declared using a var keyword, which means it is visible within the entire 'discountPrices' function, or in other words, persists after the block it was created.
## Question 3
print the number 150, finalPrice was also declared using the var keyword at the beginning of the function, therefore, it is visible throughout the entire 'discountPrices' function.
## Question 4
[50,100,150], because this variable was declared at the beginning of this function, since 'var' variables' scope starts from the function that it was declared, after the for loop, the values persists and are returned.
## Question 5
Error, because i was declared using the 'let' keyword, therefore, it's function scope stays within the for loop.
## Question 6
Error, because 'discountedPrice' was using a 'let' keyword within the for loop block, it will only be visible within that block.
## Question 7
Print the number 150, because finalPrice was declared at the beginning of the function, therefore, as its value gets updated after every iteration of the for loop, at line 14 it will still be visible.
## Question 8
[50,100,150], because 'discounted' was declared using a 'let' keyword at the beginning of the function, hence it has visibility even after the for loop.
## Question 9
Error, because i was declared using the 'let' keyword, therefore, it's only visible within that for loop block.
## Question 10
Print the number 3, because the variable was only assigned once, which is at the beginning of the function.
## Question 11
[50,100,150], because const only disallow reassignments of a variable, but not the direct manipulations, which is essentially what the push function is doing.
## Question 12
- A. student.name
- B. student['Grad Year']
- C. student.greeting()
- D. stuednt['Favorite Teacher'].name
- E. student.courseLoad[0];
## Question 13
- A. '32', the addition here is interpreted as a string concatenation since 3 is a string, therefore, the number 2 is converted into a string.
- B. 1, the subtration is interpreted as a numeric operation, hence, '3' is converted to a number.
- C. 3, since 3 is a number being used to add onto a null (which arithmetically is 0 in javascript), therefore, this is will be interpreted as 3 + 0.
- D. '3null', since 3 is a string, the addtion sign is will be used to do string concatenation.
- E. 4, the addition sign is interpreted as a numerical operation, therefore, true will be converted to 1, making this 1 + 3.
- F. 0, the addition sign will be doing numerical operation here, therefore, false and null will be converted into its numerical value, which are 0 and 0.
- G. '3undefined', the addition sign here is a string concatenation since 3 is a string.
- H. NaN, the outcome is Not A Number, because 3 is a number and undefined is interpreted as a NaN arithmetically, therefore, 3 - NaN = NaN.
## Question 14
- A. true, since comparisons in javascript implicitly converts the values to numerics, which can evaluate this expression as 2 > 1, where '2' is converted to 2.
- B. false, comparisons between strings are done in lexicographically, meaning they are compared letter by letter, hence, '2' > '1' (the first letter of '12').
- C. true, the string '2' is converted to 2, therefore, 2 equals to 2 yields true.
- D. false, strict equality evaluates two values as how they are presented, therefore, the number 2 is not equal to the string 2.
- E. false, true is converted into 1 in this comparison, therefore 1 is not equal to 2.
- F. true, Boolean(2) will yield true since it is not 0, therefore, true equals true
## Question 15
'==' indicates loose equality, meaning the two values will be evaluated in terms their numerical values, whereas '===' indicates strict equality, where it compares two values in their original data type and values, without any type conversions.
## Question 16
answer in part2-question16.js
 
