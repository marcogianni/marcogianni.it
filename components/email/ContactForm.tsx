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

const EmailFormSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Must be a valid email",
  }),
  subject: z.string(),
  message: z.string(),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      email: undefined,
      name: undefined,
      subject: undefined,
      message: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof EmailFormSchema>) {
    setLoading(true);
    console.debug("onSubmit", values);

    setLoading(false);

    return true;
  }

  return (
    <div className="bg-gray-500 mt-40 py-20">
      <main className="lg:container lg:mx-auto pl-6 pr-6 pt-6 z-10 ">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 col-start-4">
            <Form {...form}>
              <form className="space-y-3 w-full">
                <h1 className="text-4xl font-bold tracking-tight mb-4">
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
                          className="col-span-3"
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
                          className="col-span-3"
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
                          className="col-span-3"
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
