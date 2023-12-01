```Time Complexity: O(n)```
The time complexity of the solution is O(n), where n is the length of the input string s. This is because the algorithm iterates through each character in the string exactly once using a for...of loop. Inside the loop, each operation takes constant time, resulting in a linear time complexity proportional to the length of the input string.

```Space Complexity: O(n)```
The space complexity is also O(n), where n is the length of the input string. The primary contributor to space usage is the stack (const stack = []), which can grow up to the length of the input string in the worst case. In the absence of nested parentheses, the stack size will be proportional to the length of the input string.