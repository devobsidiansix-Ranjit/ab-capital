"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
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
import { Loader2, ShieldCheck, PhoneCall, Clock, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    phone: z
        .string()
        .min(1, { message: "Phone is required." })
        .regex(/^\+?[0-9]*$/, {
            message: "Only numbers and a leading '+' are allowed."
        }),
    email: z.string().email({ message: "Invalid email." }),
    service: z.string({ required_error: "Select a service." }),
    message: z.string().optional(),
})

export default function ContactFormTwo() {
    const [fetching, setFetching] = useState(false)
    const { toast } = useToast()
    const router = useRouter()
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setFetching(true);
            const formElement = document.createElement('form');
            formElement.method = 'POST';
            formElement.action = 'https://script.google.com/macros/s/AKfycbyoWGVCllzh4L3ocyjfttJur2QucQft74EnE_jnNQNyNGCaNUpJK1IE4K8TzRPSc4V0/exec';
            formElement.target = 'hidden_iframe';
            formElement.style.display = 'none';
            
            const fields = ['name', 'email', 'phone', 'service', 'message'];
            fields.forEach(field => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = field;
                input.value = values[field as keyof typeof values] || '';
                formElement.appendChild(input);
            });
            
            let iframe = document.getElementById('hidden_iframe') as HTMLIFrameElement;
            if (!iframe) {
                iframe = document.createElement('iframe');
                iframe.id = 'hidden_iframe';
                iframe.name = 'hidden_iframe';
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
            }
            
            document.body.appendChild(formElement);
            formElement.submit();
            document.body.removeChild(formElement);
            
            setTimeout(() => {
                setFetching(false);
                toast({
                    title: "Success! 🎉",
                    description: "Your message has been sent successfully!",
                });
                form.reset();
                const params = new URLSearchParams({
                    service: values.service,
                    name: values.name
                });
                router.push(`/thank-you?${params.toString()}`);
            }, 2000);
            
        } catch (error: any) {
            setFetching(false);
            toast({
                title: "Oops 😔",
                description: 'Something went wrong. Please try again.',
                variant: "destructive"
            });
        }
    }

    return (
        <section id="form" className="relative w-full py-24 sm:py-32 overflow-hidden bg-white">
            <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-[#036B6D]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-24 items-start">

                    {/* Left Side Content - Adjusted for upward alignment */}
                    <div className="space-y-8 lg:sticky lg:top-8 mt-2"> 
                        <div className="space-y-5">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#036B6D]/5 border border-[#036B6D]/10 text-[#036B6D] text-[13px] font-bold uppercase tracking-wider"
                            >
                                <Zap size={14} className="fill-[#036B6D]" />
                                Ready to take the first step?
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Our experts are available to <span className="text-[#036B6D]">guide you.</span>
                            </h2>

                            <div className="space-y-4 max-w-xl">
                                <p className="text-lg xl:text-xl text-slate-500 leading-relaxed font-medium">
                                    No obligation, no pressure. Just honest advice to help your business scale in the UAE.
                                </p>
                                <p className="text-slate-500 leading-relaxed border-l-2 border-[#036B6D]/20 pl-4 italic">
                                    We believe in ethical business practices and clear communication.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                            <a href="tel:+971523655193" className="group flex items-center gap-4 p-4 bg-slate-50/50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-transparent hover:border-slate-100">
                                <div className="p-3 rounded-xl bg-[#036B6D] text-white shadow-lg shadow-[#036B6D]/20">
                                    <PhoneCall size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Call Now</p>
                                    <p className="text-sm font-bold text-slate-800">+971-523655193</p>
                                </div>
                            </a>
                            <div className="flex items-center gap-4 p-4 bg-slate-50/50 rounded-2xl border border-transparent">
                                <div className="p-3 rounded-xl bg-white text-[#036B6D] shadow-sm border border-slate-100">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Quick Response</p>
                                    <p className="text-sm font-bold text-slate-800">Under 2 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                                    <span className="w-10 h-1 bg-[#036B6D] rounded-full" />
                                    Request a Callback
                                </h3>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Jane Doe" {...field} className="bg-slate-50 border-none h-12 rounded-xl focus-visible:ring-[#036B6D]" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="jane@company.com" {...field} className="bg-slate-50 border-none h-12 rounded-xl" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="+971..."
                                                            {...field}
                                                            className="bg-slate-50 border-none h-12 rounded-xl"
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                const sanitized = value.replace(/(?!^\+)[^\d]/g, "");
                                                                field.onChange(sanitized);
                                                            }}
                                                        />
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
                                                    <FormLabel className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="bg-slate-50 border-none h-12 rounded-xl text-slate-500">
                                                                <SelectValue placeholder="Select" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="rounded-xl">
                                                            <SelectItem value="setup">Business Support</SelectItem>
                                                            <SelectItem value="advice">Professional Inquiry</SelectItem>
                                                            <SelectItem value="management">Operational Support</SelectItem>
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
                                                <FormLabel className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Context</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="How can we assist?" {...field} className="bg-slate-50 border-none min-h-[80px] rounded-xl resize-none" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button disabled={fetching} type="submit" className="w-full h-14 bg-[#036B6D] hover:bg-[#025254] text-white rounded-xl text-lg font-bold shadow-xl shadow-[#036B6D]/20 transition-all hover:scale-[1.01]">
                                        {fetching ? <Loader2 className="animate-spin" /> : "Start Your Journey"}
                                    </Button>

                                    <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                        <ShieldCheck size={14} className="text-[#036B6D]" />
                                        100% Confidential & Secure
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}