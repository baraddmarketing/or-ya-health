import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "השם חייב להכיל לפחות 2 תווים")
    .max(100, "השם ארוך מדי"),
  phone: z
    .string()
    .regex(/^05[0-9]{1}-?[0-9]{7}$/, "מספר טלפון לא תקין (050-1234567)")
    .transform((val) => val.replace(/-/g, "")),
  email: z
    .string()
    .email("כתובת אימייל לא תקינה")
    .optional()
    .or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
