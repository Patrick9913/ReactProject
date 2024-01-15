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
            <div className=" bg-sky-950 w-[500px] h-[500px] rounded-md p-4 flex flex-col items-center gap-4 justify-center">
                <p className=" text-stone-50">Bienvenido a CyberCart Haven</p>
                <form className=" flex flex-col gap-4 justify-center items-center" onSubmit={handleSubmit}>
                    <input 
                        className="border-2 rounded-md w-72 p-3"
                        placeholder="Email"
                        type="text" 
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <input 
                        className="border-2 rounded-md w-72 p-3"
                        placeholder="Contraseña"
                        type="password" 
                        value={values.password}
                        onChange={handleInputChange}
                        name="password"
                    />
                    <button type="submit" className=" rounded-md w-36 p-4 text-stone-50 border-2">
                        Iniciar Sesion
                    </button>
                </form>
                <button className="rounded-md p-4 w-36 text-stone-50 border-2" onClick={() => register(values)}>
                    Registar
                </button>
            </div>
        </div>
    )
}




