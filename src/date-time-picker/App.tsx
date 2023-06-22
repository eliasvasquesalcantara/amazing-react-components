'use client'

import DateTimePicker from "./DateTimePicker";

const App = () => {

    return ( <div style={{ width: "600px", backgroundColor: "white", margin: "auto" }}>
        <DateTimePicker epochMillisecInitial={Date.now()} />
    </div> );
}
 
export default App;