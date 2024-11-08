# Testing
## Defination:
    Your code should match the required specification/expectations.



# Types of testing
## Way to you test your code.
1. Manual testing : where a qa will test whether all the features are working according to the specification
2. Automated testing : We use different types of test that automatically runs when a new feature is added / component is added or a new flow is added.

### Areas of tsting.
1. Unit testing :  Testing a small unit of the app -> component.   
2. Functional/Integration Test: How your multiple component behave in cohesion.
3. End To end testing: How much closer your application is to the requiement in real world.
                      -> Sandbox Testing
4. Stress Testing:
5. Performance Testing:
6. Security Testing:

## Generic Level:
1. Arrange.
2. Act -> run your app in a kind of virtual/real environment.
3. assert your expectation. 

## snapshot testing

# Explanation: A snapshot test captures the current state of a React component's rendered output. It takes a snapshot of the component's markup and compares it to the stored snapshot. If there are unintended changes, the test fails, highlighting potential issues with the component's visual representation.

# Use Case: Verifying that the rendered output of a component remains consistent over time, helping detect unexpected changes.
    

### React : unit testing  
## Tech:(create-react-app) 
* JEST 
    * test runner : it finds and excutes all the tests
    * It also provides you feature of describe , test and expect
    * snapshot testing
    *  https://jestjs.io/

    * Test a particular file: npm test -- SomeTestFileToRun 

* React Testing Library
    * Emulate rendering.
    * Find element on the emulated UI.
    * Fire events.

Testing Redux files: https://redux.js.org/usage/writing-tests#writing-integration-tests-with-components
    
### What is required to test a react component???
* Initial State
* Multiples Update to that initial state  
* Snapshot test  -> snapshot will created automatically when you run your test file. `expect(asFragment()).toMatchSnapshot();`
