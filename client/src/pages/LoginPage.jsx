import { Form, Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-10">Login to your account</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder="Enter your email"/>
                    <input type="password" placeholder="Enter your password"/>
                    <button className="primary">Login</button>
                    <div className="py-2 text-center text-gray-600">
                        Don't have an account yet? <Link to={'/register'} className="underline text-black"> Register now!</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
