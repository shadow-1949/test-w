"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    console.log("Submitted values:", values);
    await new Promise((resolve) => setTimeout(resolve, 500));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
        <input
          {...register("name")}
          className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-slate-900 outline-none ring-0 transition focus:border-blue-500 dark:border-slate-700 dark:text-white"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-slate-900 outline-none ring-0 transition focus:border-blue-500 dark:border-slate-700 dark:text-white"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
        <textarea
          rows={4}
          {...register("message")}
          className="w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 text-slate-900 outline-none ring-0 transition focus:border-blue-500 dark:border-slate-700 dark:text-white"
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
