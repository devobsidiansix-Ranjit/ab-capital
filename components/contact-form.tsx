"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import axios from 'axios'
import { useToast } from "@/components/ui/use-toast"
import {countries} from '../country-code'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ChevronDown, ChevronsUpDown, Loader2 } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./ui/command"
import { cn } from "@/lib/utils"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover"
import React from "react"

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name can not be empty.",
    }),
    countryCode: z.string({
        required_error: "Please select a language.",
    }),
    phone: z.string().min(1, { message: "Phone can not be empty." }).refine((value) => /^[0-9]+$/.test(value), {
        message: "Please enter a valid phone number with only numbers.",
    }),
    email: z.string().min(1, { message: "Email can not be empty." }),
    service: z.string(),
    message: z.string().optional(),
})

export default function ContactForm() {
    const [fetching, setFetching] = useState<boolean>(false)
    const { toast } = useToast()
    const router = useRouter()




    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            countryCode: "",
            phone: "",
            email: "",
            service: "",
            message: ""
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setFetching(true);
            const response = await axios.post('/api/test', values)
            setFetching(false)
            form.reset();
            
            // Redirect to thank you page with form data
            const params = new URLSearchParams({
                service: values.service,
                name: values.name
            });
            router.push(`/thank-you?${params.toString()}`);
            
        } catch (error) {
            setFetching(false);
            toast({
                title: "Oops 😔😔",
                description: 'Something went wrong',
                variant: "destructive"
            })
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full bg-white py-10 px-5 border rounded-lg shadow-xl">
                <div className="flex flex-col gap-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Name" {...field} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-2">
                        <div className="w-[25%]">
                            <FormField
                                control={form.control}
                                name="countryCode"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        className={cn(
                                                            "w-full justify-between",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value
                                                            ? countries.find(
                                                                (country) => country.value === field.value
                                                            )?.value
                                                            : "Select code"}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[200px] p-0 h-[400px]">
                                                <Command>
                                                    <CommandInput placeholder="Search language..." />
                                                    <CommandEmpty>No language found.</CommandEmpty>
                                                    <CommandGroup className="overflow-y-scroll">
                                                        {countries.map((country) => (
                                                            <CommandItem
                                                                value={country.value}
                                                                key={country.value}
                                                                onSelect={() => {
                                                                    form.setValue("countryCode", country.value)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        country.value === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                                {country.value}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-[75%]">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Phone no" {...field} value={field.value ?? ''} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email ID" {...field} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#036B6D]">
                                    Select any service
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]">
                                            <SelectValue placeholder="Select any service" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="text-[#036B6D]">
                                        <SelectItem value="Buisness Setup">Buisness Setup</SelectItem>
                                        <SelectItem value="Buisness Advices">Buisness Advices</SelectItem>
                                        <SelectItem value="Financial Forecast and Projections">Financial Forecast and Projections</SelectItem>
                                        <SelectItem value="Dubai Customs Registration">Dubai Customs Registration</SelectItem>
                                        <SelectItem value="Tax Residency Certificate">Tax Residency Certificate</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="Message" {...field} className="border border-[#036B6D] focus-visible:ring-[#036B6D] text-[#036B6D]" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={fetching} type="submit" className=' bg-[#036B6D] hover:bg-[#9B999A] hover:text-gray-800 w-full'>
                    {fetching && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit
                </Button>
            </form>
        </Form>
    )
}