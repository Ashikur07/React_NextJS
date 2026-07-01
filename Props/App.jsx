import React from "react";
import IdCard from "./IdCard";

function App(){
    return(
        <div>
            <h1>List of Employee</h1>
            <IdCard name="Ashik" role="Software Engineer"/>
            <IdCard name="Faisal" role="AI Engineer"/>
            <IdCard name="Julfikar" role="Python Developer"/>
        </div>
    )
}
export default App;