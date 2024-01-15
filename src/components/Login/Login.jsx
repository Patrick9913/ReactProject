import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export const Login = () => {

    const { login, register, googleLogin } = useContext(UserContext)

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        login(values);
    };

    return (
        <div className=" mt-32 w-full flex justify-center">
            <div className="bg-slate-800 w-[500px] h-[500px] rounded-md p-4 flex flex-col items-center gap-4 justify-center">
                <p className=" text-stone-50 mb-5">Bienvenido a CyberCart Haven</p>
                <form className=" flex flex-col gap-8 justify-center items-center" onSubmit={handleSubmit}>
                    <input 
                        className="border border-black w-72 p-3"
                        placeholder="Email"
                        type="text" 
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <input 
                        className="border border-black w-72 p-3"
                        placeholder="Contraseña"
                        type="password" 
                        value={values.password}
                        onChange={handleInputChange}
                        name="password"
                    />
                    <button type="submit" className="rounded-md w-36 p-4 text-stone-50 border hover:bg-white hover:text-black ease-in duration-150">
                        Iniciar Sesion
                    </button>
                </form>
                <button onClick={googleLogin} className="rounded-md w-64 p-4 text-stone-50 border hover:bg-white hover:text-black ease-in duration-150">Iniciar Sesion con Google</button>
                <button className="rounded-md p-4 w-36 text-stone-50 border hover:bg-white hover:text-black ease-in duration-150" onClick={() => register(values)}>
                    Registar
                </button>
            </div>
        </div>
    )
}




