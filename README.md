# 08062024AngularAssignment
1. Explain how property binding updates the DOM when the component’s data changes.
   - Property binding creates a connection between component's property and the DOM element's property, the initial value was HTML's element attribute, once it's changed/updated using property binding, it become DOM element's property.
2. What would happen if you used interpolation instead of property binding for the same scenario?
   - If I used interpolation instead of property binding for the same scenario, the count value would still be displayed correctly, however, interpolation can only be used for stringified values, whereas property binding is used for binding the properties of HTML elements.
3. Describe the role of event binding in updating component properties.
   - The role of event binding in updating component properties is that when any user action are triggered based on HTML elements, the event binding listens for those events and call the method in the componenet.ts file, which creates an interactive application where user actions can dynamically change the component properties' data.
4. How does combining event binding and data binding enhance user interaction?
   - Combining event binding and data binding enhance user interaction by real time updates within the application, event binding captures user actions and triggers methods to update component properties, while data binding ensures the changes happened to those properties are immediately reflected in the UI dynamically. This combination provides a responsive and interactive user experience.
