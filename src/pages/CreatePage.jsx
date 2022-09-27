import { useState } from "react"
export const CreatePage =()=> {
    const [values, setValues] = useState({
        name:'Aylin',
        lastName:'Cabello'
    })
    const heandleChange = ({target})=>{
        setValues({...values, [target.name]:target.value})
    }
    return(<>
        <div className="card-body">
            <input 
                value={values.name}
                onChange={heandleChange}
                name='name'/>
            <input 
                value={values.lastName}
                onChange={heandleChange}
                name='lastName' />
        </div>
    </>)
}