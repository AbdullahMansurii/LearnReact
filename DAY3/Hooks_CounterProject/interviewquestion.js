
//todo interview question
//  const addValue=()=>{
//     if (counter < 20){
//       setCounter(counter+1)
//       setMessage('')
//     }
// }

// In this if we add more setCounter(counter+1), what will happen?
// this concept is called state as a snapshot.  
// When we write setCounter(counter+1) multiple times it is updated only once because in the onclick
//  handler of that render, even after calling setCounter(counter + 1) multiple times 
// the value of the counter is 15, because after our event handler finishes, 
// then React re-renders the component.

// so the useState( )hook has a setCounter function name can be differ but it schedules jobs in batches
// so all the instructions inside setCounter will be sent once altogether so it sees that 
// all are repeated instructions so its gets executed only once. 
// But in case of call back function syntax inside setCounter it immediately increments the value 
// and when the next time it excutes it agian increments like that then it doesnt works in batches