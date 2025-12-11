"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      reset();

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-1">
          שם מלא
          <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          {...register("name")}
          disabled={isSubmitting}
          className="text-right"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-1">
          טלפון
          <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          {...register("phone")}
          placeholder="050-1234567"
          disabled={isSubmitting}
          className="text-right"
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">אימייל (אופציונלי)</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          disabled={isSubmitting}
          className="text-right"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">הודעה (אופציונלי)</Label>
        <Textarea
          id="message"
          {...register("message")}
          rows={4}
          disabled={isSubmitting}
          className="text-right resize-none"
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? "שולח..." : "שלחי פרטים"}
      </Button>

      {submitStatus === "success" && (
        <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm text-center">
          הפרטים נשלחו בהצלחה! נחזור אליך בהקדם.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm text-center">
          אירעה שגיאה בשליחת הטופס. אנא נסי שוב מאוחר יותר.
        </div>
      )}
    </form>
  );
}
