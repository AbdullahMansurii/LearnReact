//todo createRoot method
//* this method creates a DOM like structure behind the scene
//*and then it compares it with the real DOM and if there is any change it updates the real DOM

//todo React Fiber

//*Reconciliation : the algorithm react use to differentiate one tree with another to determin which part needs tobe changed 
//!Reconciliation is the algorithm behind what is popularly understood
//!as React's virtual DOM
//*update: a change in data used to render a react app.usaully the result of 'setState'

//todo what is a fiber: a fiber represents a unit of work that needs to be done
/**
 * primary goal of fiber is to enable react to take advantage of scheduling
 * pause work and come back to it later 
 * assign priority to different type of work
 * reuse previously completed work
 * abort work if it's longer needed
 */