import { useState } from "react";
import { Form, Link } from "react-router-dom";

export default function RegisterPage(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-10">Create an account</h1>
                <form className="max-w-md mx-auto">
                    <input  type="text" 
                            placeholder="Enter your name"
                            value = {name}
                            onChange = {ev => setName(ev.target.value)}/>
                    <input  type="email" 
                        placeholder="Enter your email"
                        value = {email}
                        onChange = {ev => setEmail(ev.target.value)}/>
                    <input  type="password" 
                            placeholder="Enter your password"
                            value = {password}
                            onChange = {ev => setPassword(ev.target.value)}/>
                    <button className="primary">Login</button>
                    <div className="py-2 text-center text-gray-600">
                        Already a member? <Link to={'/login'} className="underline text-black"> Login!</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
