import Hello from "./Hello";
import Message from "./Message";

function App() {
  return (
    <div>
        {/* Rendering the Hello component more than once risults in having more than one complete messagge 
        since the Hello components contains the messagge components they get rendered in the correct way, 
        rendering the messagge component alone in App risults instead in having more singular messages one after another  */}
      <Hello/>
      <Hello/>
      <Hello/>
      <Message/>
      <Message/>
    </div>
  );
}

export default App;
