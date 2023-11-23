"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type EmailFormValues = z.infer<typeof EmailFormSchema>;

const EmailFormSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Must be a valid email",
  }),
  subject: z.string(),
  message: z.string(),
});

interface Props {
  className?: string;
}

export function ContactForm(props: Props) {
  const { className } = props;

  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof EmailFormSchema>) {
    setLoading(true);

    const response = await fetch("/api/email/send", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.debug("response", response);

    setLoading(false);
    form.reset();
  }

  return (
    <div
      id="contact-form"
      className={cn(
        "dark:bg-gray-900/20 bg-gray-400/50 text-black dark:text-white mt-20 sm:mt-40 py-20 px-10 sm:px-0",
        className
      )}
    >
      <main className="lg:container lg:mx-auto z-10">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 sm:col-span-6 sm:col-start-4">
            <Form {...form}>
              <form className="space-y-3 w-full">
                <h1 className="font-medium text-4xl text-center tracking-tight mb-6">
                  Send me a message!
                </h1>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          id="name"
                          className="col-span-3 text-md"
                          {...field}
                        />
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
                      <FormControl>
                        <Input
                          placeholder="Email"
                          id="email"
                          className="col-span-3 text-md"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Subject"
                          id="subject"
                          className="col-span-3 text-md"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          rows={8}
                          className="text-md resize-none"
                          id="message"
                          placeholder="Type your message here."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="w-full">
                  <Button
                    onClick={form.handleSubmit(onSubmit)}
                    loading={loading}
                    size="lg"
                    className="w-full px-8"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
}
