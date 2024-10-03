import { useState } from "react"



const Register = ()=>{

    const  [registerData,setRegisterData] = useState({});

    const getValue = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setRegisterData({...registerData,[name]:value});
        
        
    }

    const submitData = (e)=>{
        e.preventDefault();
         console.log(registerData)
    }

    return(
        <>
           <div>
            <div className="max-w-7xl bg-gray-800">
                <div>
                    <div>
                        <form method="post" onSubmit={(e)=>submitData(e)}>
                            <label className="text-5xl">Fisrt Name</label>
                            <input type="text" placeholder="Enter Fisrt Name" name="fisrtName" onChange={(e)=>getValue(e)} />
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter Last Name" name="lastName" onChange={(e)=>getValue(e)} /><br/><br/>
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter Email Address" name="email" onChange={(e)=>getValue(e)}/>
                            <label>Phone Number</label>
                            <input type="number" placeholder="Enter Phone Number" name="number" onChange={(e)=>getValue(e)}/><br/><br/>
                            <select name="country" onChange={(e)=>getValue(e)}>
                                <option>Select Country</option>
                                <option value={"India"}>India</option>
                                <option value={"America"}>America</option>
                                <option value={"Canada"}>Canada</option>
                                <option value={"England"}>England</option>
                                <option value={"Newzeland"}>Newzeland</option>
                            </select>
                            <select name="state" onChange={(e)=>getValue(e)}>
                                <option>Select State</option>
                                <option value={"Gujarat"}>Gujarat</option>
                                <option value={"Hariyana"}>Hariyana</option>
                                <option value={"Rajasthan"}>Rajasthan</option>
                                <option value={"Bihaar"}>Bihaar</option>
                                <option value={"Mahrashtra"}>Mahrashtra</option>
                            </select>
                            <select name="city" onChange={(e)=>getValue(e)}>
                                <option>Select City</option>
                                <option value={"Surat"}>Surat</option>
                                <option value={"Vadodara"}>Vadodara</option>
                                <option value={"Rajkot"}>Rajkot</option>
                                <option value={"Ahemadabad"}>Ahemadabad</option>
                                <option value={"Junagadh"}>Junagadh</option>
                            </select><br/><br/>
                            <select name="hospital" onChange={(e)=>getValue(e)}>
                                <option>Select Hospital</option>
                                <option value={"Cancer Hospital"}>Cancer Hospital</option>
                                <option value={"Simimer Hospital"}>Simimer Hospital</option>
                                <option value={"Apple Hospital"}>Apple Hospital</option>
                                <option value={"Ram Raj Hospital"}>Ram Raj Hospital</option>
                                <option value={"Kiraan Hospital"}>Kiraan Hospital</option>
                            </select><br/><br/>
                            <label>Password</label>
                            <input type="text" placeholder="Enter Password" name="pass" onChange={(e)=>getValue(e)} /><br/><br/>
                            <label>Confirm Password</label>
                            <input type="text" placeholder="Enter Confirm Password" name="confirmPass" onChange={(e)=>getValue(e)} /><br/><br/>
                            <input type="radio"/>
                            <label>I agree to all the T&C and Privacy Policies</label><br/><br/>
                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
           </div>
        </>
    )
}

export default Register;