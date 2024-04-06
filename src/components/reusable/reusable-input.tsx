import { Controller, FieldValues, Path } from "react-hook-form";
import { Input } from "../ui/input";
import { IReusableInput } from "@/types/reusable";



export default function ReusableInput<T extends FieldValues>({ control, name, type, placeholder }: IReusableInput<T>) {

    return (
        <>
            <Controller
                control={control}
                name={name as Path<T>}
                render={({ field }) => (
                    <>
                        <Input type={type} placeholder={placeholder} {...field} />
                    </>
                )}
            />
        </>
    )
}