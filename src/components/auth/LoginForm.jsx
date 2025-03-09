import { useForm } from "react-hook-form"
import Field from "../common/Field"
import { useNavigate } from "react-router-dom"


export default function LoginForm() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const submitForm = (data) => {
        console.log(data)
        navigate("/")
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
