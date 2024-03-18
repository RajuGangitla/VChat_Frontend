import { Label } from "../ui/label"




export interface IReusableFormRow {
    name: string
    label: string
    required: boolean
    children: React.ReactNode
    errors: any
    className?: string
}

export default function ReusableFormRow({ name, label, className, children, errors, required }: IReusableFormRow) {
    return (
        <>
            <div className={`flex flex-col ${className}`}>
                <Label className="mb-4 " htmlFor={name}>{label}{required && <span className="text-red-500 ml-2">*</span>}</Label>
                {children}
                {
                    errors && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.message}
                        </p>
                    )
                }
            </div>
        </>
    )
}