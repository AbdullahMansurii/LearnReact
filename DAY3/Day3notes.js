//*React controls the updation of UI by using hooks
//*Hooks are functions that allow you to hook into React features
//*Hooks let you use state and lifecycle features without writing a class
//* we will have to import hooks from react
//* useState is responsilbe for state change,this doesn't mean it update the value ,it means it propagate the changes in UI i.e in DOM
//* we will use const [counter,setCounter]=useState(0) like this 
/*Questions:
 * Question 1: What does useState do?
useState is a Hook that lets you add state to functional components. When you call setCounter(counter + 1), it:

Updates the state value - Changes the counter variable
Re-renders the component - React automatically refreshes the UI to show the new value
Preserves the value - Unlike regular variables, state persists between renders
Key difference: If you used a regular variable like let count = 10, changing it wouldn't automatically update the screen. State does both automatically.

Question 2: Why use useState instead of regular variables?
Regular JavaScript variables are forgotten after the function finishes. Every time React re-renders your component, regular variables get reset to their initial value.

Question 3: When should the error message disappear?
Currently, the message disappears when:

You click "Add Value" and successfully increment
You click "Remove Value" and successfully decrement
This is good design because it provides feedback. However, you could also add a timeout - the message auto-clears after 3 seconds (we'd use useEffect for this).

Question 4: What does {message && <h3>... do?
This is the logical AND operator (&&):

It means: "If message has a value, THEN show the <h3> element"

Breaking it down:

message = '' (empty string) → falsy → Don't render the <h3>
message = 'Counter value cannot exceed 20' → truthy → Render the <h3>
Why this works: In JavaScript, empty strings are false, non-empty strings are true.

Question 5: Why set message to empty string ''?
We set it to '' to hide the message from the screen.

Because of the && operator we discussed above:

When message = '', the condition is false, so nothing renders
When message = 'some text', the condition is true, so the error displays

 */