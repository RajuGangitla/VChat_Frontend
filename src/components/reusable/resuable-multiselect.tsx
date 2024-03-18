"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

type SelectableItem = {
    value: string;
    label: string;
};

type MultiSelectProps = {
    selected: SelectableItem[] | [];
    setSelected: React.Dispatch<React.SetStateAction<SelectableItem[] | []>>;
    data: SelectableItem[];
};

export function MultiSelect({ selected, setSelected, data }: MultiSelectProps) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    const handleUnselect = React.useCallback((item: SelectableItem) => {
        setSelected((prev) => prev.filter((s) => s.value !== item.value));
    }, [setSelected]);

    const handleKeyDown = React.useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            const input = inputRef.current;
            if (input) {
                if (e.key === "Delete" || e.key === "Backspace") {
                    if (input.value === "") {
                        setSelected((prev) => {
                            const newSelected = [...prev];
                            newSelected.pop();
                            return newSelected;
                        });
                    }
                }
                if (e.key === "Escape") {
                    input.blur();
                }
            }
        },
        [setSelected]
    );

    const selectables = data?.filter(
        (item) => !selected?.find((selectedItem) => selectedItem.value === item.value)
    );

    return (
        <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
            <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="flex gap-1 flex-wrap">
                    {selected?.map((item) => (
                        <Badge key={item.value} variant="secondary">
                            {item.label}
                            <button
                                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleUnselect(item);
                                    }
                                }}
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }}
                                onClick={() => handleUnselect(item)}
                            >
                                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                            </button>
                        </Badge>
                    ))}
                    <CommandPrimitive.Input
                        ref={inputRef}
                        value={inputValue}
                        onValueChange={setInputValue}
                        onBlur={() => setOpen(false)}
                        onFocus={() => setOpen(true)}
                        placeholder="Select items..."
                        className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
                    />
                </div>
            </div>
            <div className="relative mt-2">
                {open && selectables.length > 0 ? (
                    <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                        <CommandGroup className="h-full overflow-auto">
                            {selectables.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    onMouseDown={(e: any) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                    onSelect={(value: any) => {
                                        setInputValue("");
                                        setSelected((prev: SelectableItem[] | undefined) => {
                                            prev = prev || [];
                                            return [...prev, item];
                                        });

                                    }}
                                    className={"cursor-pointer"}
                                >
                                    {item.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </div>
                ) : null}
            </div>
        </Command>
    );
}