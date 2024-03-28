import { Form, Link } from "react-router-dom";

export default function RegisterPage(){
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-10">Create an account</h1>
                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Enter your name"/>
                    <input type="email" placeholder="Enter your email"/>
                    <input type="password" placeholder="Enter your password"/>
                    <button className="primary">Login</button>
                    <div className="py-2 text-center text-gray-600">
                        Already a member? <Link to={'/login'} className="underline text-black"> Login!</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
