import { useForm } from "react-hook-form"
import Field from "../common/Field"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";


export default function LoginForm() {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm()

    const submitForm = async (data) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, data)
            if (response.status === 200) {
                const { user, token } = response.data;
                if (token) {
                    const authToken = token?.token;
                    const refreshToken = token.refreshToken;
                    console.log(`login time auth token ${authToken}`)
                    setAuth({ user, authToken, refreshToken })
                    navigate("/")
                }
            }

        } catch (error) {
            setError('error', {
                type: 'random',
                message: `user with email ${data.email} is not found`
            })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)} className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
                {/* <!-- email --> */}
                <Field label="Email" htmlFor="email" error={errors.email}>
                    <input
                        {...register("email", { required: "Email is required" })}
                        className={`auth-input ${errors.email ? "border-red-600" : ""}`}
                        name="email"
                        type="email"
                        id="email"
                    />
                </Field>
                {/* <!-- password --> */}
                <Field label="password" htmlFor="password" error={errors.password}>
                    <input
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                        className={`auth-input ${errors.password ? "border-red-600" : ""}`}
                        name="password"
                        type="password"
                        id="password"
                    />
                </Field>
                <p className="text-xs p-1 text-red-600">{errors?.error?.message}</p>
                {/* <!-- Submit --> */}
                <Field>
                    <button
                        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                        type="submit"
                    >
                        Login
                    </button>
                </Field>
            </form>
        </>
    )
}
