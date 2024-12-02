Intallation:
    a. npm init -y
    b. npm i express
    c. npm i mongoose


"A customer (view) is ordering a pizza, so he makes a request to the waiter (controller). The waiter takes the request and goes to the chef (model) in the kitchen and fetches the items from the kitchen (database) to make the pizza. Once it's ready, the chef serves the pizza back to the waiter, who then serves it to the customer."

Now, let's break down the MVC architecture within this analogy.

## Model:

# Represents the data and logic of the application.
1. In the pizza example, the chef in the kitchen is the model.
2. Manages and fetches data (ingredients) and performs operations (cooking) on it.
3. The model is unaware of the user interface.

## View:

# Represents the user interface or what the user interacts with.
1. In the pizza example, the customer is the view.
2. Displays information (menu options) to the user and captures user input (order).
3. Passes user input to the controller.


## Controller:

# Acts as an intermediary between the model and the view.
1. In the pizza example, the waiter is the controller.
2. Receives and processes user requests (orders) from the view.
3. Interacts with the model (chef) to fetch data (ingredients) and perform actions (cooking).
4. Sends updates back to the view to display the result (serving the pizza).

## Benifits of MVC Acrhitecture.

1. Separation of Concerns:
Divides the application into Model, View, and Controller for clear separation of 
responsibilities.

2. Modular Development:
Supports development and maintenance of separate, reusable modules for each component.

3. Improved Code Reusability:
Allows reuse of Models, Views, and Controllers in different parts of the application or other projects.

4. Enhanced Maintainability:
Changes in one component have minimal impact on the others, simplifying maintenance and debugging.

5. Scalability:
Facilitates parallel development and the addition of new features without major rework.

6. User Interface Flexibility:
Adapts to various user interfaces while keeping the core logic intact.

7. Efficient Testing and Debugging:
Enables isolated unit testing for each component, easing issue identification and resolution.

8. Parallel Development:
Supports multiple developers or teams working on different components simultaneously.

9. Support for Multiple Views:
Utilizes the same Model and Controller with multiple Views for diverse user interfaces.

10. Long-Term Maintainability:
Promotes organized and understandable code, reducing technical debt over time.