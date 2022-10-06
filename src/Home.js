import { useContext } from "react";
import {UserContext} from "./App.js"



const Home =() =>{

    const user = useContext(UserContext)
    return(
            <>
            <h1>welcome = {user}</h1>
            </>
    )
}

export default Home;
    