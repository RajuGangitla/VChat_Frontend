import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { Input } from "../ui/input";
import { v4 as uuidv4 } from "uuid";
import { IReusableMultiInput } from "@/types/reusable";



export default function ReusableMultiInput({ tags, setTags, placeholder, disabled }: IReusableMultiInput) {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            const newValue = e.target.value;
            setInputValue(newValue);
        }
    }

    const handleRemove = (id: string) => {
        if (!disabled) {
            let newTags = tags.filter((s: any) => s.id !== id);
            setTags(newTags);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!disabled && e.key === 'Enter') {
            e.preventDefault();
            const newTagText = inputValue.trim();

            if (newTagText?.length === 0) {
                toast({
                    title: "Tag is too short",
                    description: "Please enter a tag with more characters",
                    variant: "destructive",
                });
            }

            const newTagId = uuidv4();

            if (!tags.some((tag: any) => tag.text === newTagText)) {
                setTags([...tags, { id: newTagId, text: newTagText }]);
            } else {
                toast({
                    title: "Tag is already there",
                    description: "Please enter a new tag with more characters",
                    variant: "default",
                });
            }
            setInputValue("");
        }
    }

    return (
        <>
            <div className="rounded-md border border-input px-3 py-2 bg-background ">
                <div className="flex flex-wrap gap-2 mb-4 rounded-md max-w-full md:max-w-1/2">
                    {tags?.map((s: any) => (
                        <div key={s.id} className="flex items-center gap-1 py-1 px-2 bg-muted justify-center rounded-md ">
                            <p className="text-sm">{s.text}</p>
                            <button className="flex items-center" type="button" onClick={(e) => !disabled && handleRemove(s.id)}>
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
                <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={`Enter ${placeholder}`}
                    onKeyDown={handleKeyDown}
                    disabled={disabled} 
                />
            </div>
        </>
    )
}