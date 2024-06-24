

            // 1. Reverse a String

            soln: function reverseString(str) {
                return str.split('').reverse().join('');
            }
            console.log(reverseString("hello")); // Output: "olleh"

            // 2. Find the Maximum Value in an Array

            soln: function findMax(arr) {
                return Math.max(...arr);
            }
            console.log(findMax([1, 2, 3, 4, 5])); // Output: 5

            // 3. Sum of All Numbers in an Array

            soln: function sumArray(arr) {
                return arr.reduce((acc, num) => acc + num, 0);
            }
            console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

            // 4. Check for Palindrome

            soln: function isPalindrome(str) {
                const reversed = str.split('').reverse().join('');
                return str === reversed;
            }
            console.log(isPalindrome("racecar")); // Output: true

            // 5.  Find the Factorial of a Number

            soln: function factorial(num) {
                if (num === 0) return 1;
                return num * factorial(num - 1);
            }
            console.log(factorial(5)); // Output: 120

            //6.  Merge Two Sorted Arrays

            soln: function mergeSortedArrays(arr1, arr2) {
                let mergedArray = [];
                let i = 0;
                let j = 0;
                while (i < arr1.length && j < arr2.length) {
                if (arr1[i] < arr2[j]) {
                    mergedArray.push(arr1[i]);
                    i++;
                } else {
                    mergedArray.push(arr2[j]);
                    j++;
                }
                }
                return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
            }
            console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

            // 7.  Find the First Non-Repeating Character

            soln: function firstNonRepeatingCharacter(str) {
                const charCount = {};
                for (let char of str) {
                charCount[char] = (charCount[char] || 0) + 1;
                }
                for (let char of str) {
                if (charCount[char] === 1) {
                    return char;
                }
                }
                return null;
            }
            console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"

            
            // 8. Implement a Queue Using Two Stacks

            soln: class Queue {
                constructor() {
                this.stack1 = [];
                this.stack2 = [];
                }
            
                enqueue(value) {
                this.stack1.push(value);
                }
            
                dequeue() {
                if (!this.stack2.length) {
                    while (this.stack1.length) {
                    this.stack2.push(this.stack1.pop());
                    }
                }
                return this.stack2.pop();
                }
            
                peek() {
                if (this.stack2.length) {
                    return this.stack2[this.stack2.length - 1];
                }
                return this.stack1[0];
                }
            }
            
            const queue = new Queue();
            queue.enqueue(1);
            queue.enqueue(2);
            console.log(queue.dequeue()); // Output: 1
            console.log(queue.peek()); // Output: 2

            // 9.  Implement a Stack

            soln: class Stack {
                constructor() {
                this.items = [];
                }
            
                push(element) {
                this.items.push(element);
                }
            
                pop() {
                if (this.items.length === 0) {
                    return "Underflow";
                }
                return this.items.pop();
                }
            
                peek() {
                return this.items[this.items.length - 1];
                }
            
                isEmpty() {
                return this.items.length === 0;
                }
            }
            
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            console.log(stack.pop()); // Output: 2
            console.log(stack.peek()); // Output: 1

            // 10.  Find the Index of the Target in a Sorted Array
            //Write a class to implement a stack with push, pop, and peek methods.

            soln:function binarySearch(arr, target) {
                let left = 0;
                let right = arr.length - 1;
                
                while (left <= right) {
                let middle = Math.floor((left + right) / 2);
                if (arr[middle] === target) {
                    return middle;
                } else if (arr[middle] < target) {
                    left = middle + 1;
                } else {
                    right = middle - 1;
                }
                }
                return -1;
            }
            
            console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
            console.log(binarySearch([1, 2, 3, 4, 5], 6)); // Output: -1
            