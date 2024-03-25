import { Form } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="mt-4">
            <h1 className="text-4xl text-center">Login to your account</h1>
            <form className="max-w-md mx-auto border">
                <input type="email" placeholder="Enter your email"/>
                <input type="password" placeholder="Enter your password"/>
                <button>Login</button>
            </form>
        </div>
    )
}
