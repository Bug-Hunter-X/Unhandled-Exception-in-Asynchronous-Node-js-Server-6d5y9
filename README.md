# Unhandled Exception in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js servers:  unhandled exceptions within asynchronous operations.  The `bug.js` file showcases a server that simulates an asynchronous task.  Sometimes the task fails, and the error isn't caught.  This leads to a server crash. The `bugSolution.js` demonstrates the correct approach, using error handling to prevent the crash.

## Bug

The bug is that the server lacks error handling inside of its asynchronous callback. If the simulated operation fails, an exception is thrown which is not handled and causes the server to terminate. 

## Solution

The solution involves proper error handling within the asynchronous operation's callback.  This prevents unhandled exceptions from causing the server to crash.