import type React from "react";
import type { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
    label: string;
    id: Path<T>;
    type: string;
    errors: FieldErrors<T>;
    register: UseFormRegister<T>;
    required?: boolean;
    message?: string;
    className?: string;
    min?: number;
    value?: string;
    placeHolder?: string;
}

const InputField = <T extends FieldValues>({
    label,
    id,
    type,
    errors,
    register,
    required,
    message,
    className,
    min,
    placeHolder
}: InputFieldProps<T>) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={id} className={`${className ? className : ""} font-semibold text-sm text-slate-800`}>
                {label}
            </label>
            <input type={type} id={id} placeholder={placeHolder} className={`${className ? className : ""} 
                    p-2 border outline-none bg-transparent text-slate-800 rounded-md 
                    ${errors[id]?.message ? "border-red-500" : "border-slate-700"}`}
                {...register(id, {
                    required: required ? message : undefined,
                    minLength: min
                        ? { value: min, message: `Minimum ${min} character/s is required!` }
                        : undefined,
                    pattern: type === 'email' ? {
                        value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$/,
                        message: "Please input valid email!"
                    }
                        : type === 'url' ? {
                            value: /^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(:\d+)?(\/[^\s]*)?$/,
                            message: "Please enter a valid URL"
                        } : undefined
                })} required={required} />
            {errors[id]?.message && (
                <p className="text-sm font-semibold text-red-600 mt-0">
                    {errors[id]?.message as React.ReactNode}
                </p>
            )}
        </div >
    )
}

export default InputField;
