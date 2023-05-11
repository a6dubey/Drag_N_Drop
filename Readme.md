#Live Demo Link: https://a6dubey-kalvium.netlify.app/

# 'Draggable Square'
This is a simple web application that demonstrates dragging and dropping a square element on a webpage, and detecting if it overlaps with a target element.

## Getting Started
To use this application, simply open the **index.html** file in a web browser. You should see a square element and a target element on the webpage. You can drag the square element using your mouse or touch gestures, and drop it on the target element. If the square element overlaps with the target element, the target element will be highlighted.

## Implementation Details
The **'index.html'** file contains the HTML markup for the webpage. It defines the square and target elements, and includes the necessary CSS styles to position and style them.

The **script.js** file contains the JavaScript code that implements the drag and drop functionality. It defines several event handlers that are attached to the square element:

+ **dragMouseDown**: This is called when the user presses the mouse button on the square element. It initializes the position variables pos3 and pos4, and adds event listeners for mousemove and mouseup events to the document.
+ **elementDrag**: This is called when the user moves the mouse while dragging the square element. It updates the position variables pos1, pos2, pos3, and pos4, and sets the new position of the square element. It also checks if the square element overlaps with the target element, and adds or removes a "highlight" class to the target element accordingly.
+ **closeDragElement**: This is called when the user releases the mouse button after dragging the square element. It removes the event listeners for mousemove and mouseup events from the document. If the square element overlaps with the target element, it displays a message div for 2 seconds.
+ **mouseMove**: This is called when the user moves the mouse over the square element. It checks if the square element overlaps with the target element, and adds or removes a "hover" class to the target element accordingly.
+ **isOverlapping**: This is a helper function that checks if two elements overlap by comparing their bounding rectangles.
+**showMessage**: This is a helper function that displays a message div with the given text, position, and color, and removes it after 2 seconds.


For touch devices, the code defines similar event handlers that handle touch events instead of mouse events:

+ **dragTouchStart**: This is called when the user touches the square element. It initializes the position variables pos3 and pos4, and adds event listeners for touchmove and touchend events to the document.
+ **touchMove**: This is called when the user moves the finger while touching the square element. It updates the position variables pos1, pos2, pos3, and pos4, and sets the new position of the square element. It also checks if the square element overlaps with the target element, and adds or removes a "highlight" class to the target element accordingly.
+ **closeTouchElement**: This is called when the user lifts the finger after touching the square element. It removes the event listeners for touchmove and touchend events from the document. If the square element overlaps with the target element, it displays a message div for 2 seconds.
+ **touchHover**: This is called when the user hovers the finger over the square element. It checks if the square element overlaps with the target element, and adds or removes a "hover" class to the target element accordingly.
