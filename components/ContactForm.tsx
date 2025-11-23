"use client";
import { contactSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectValue,
  SelectItem,
  SelectTrigger,
} from "./ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "./ui/input-group";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      originCountryCity: "",
      destinationCountryCity: "",
      message: "",
      serviceRequired: "",
    },
  });
  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        toast.error("Failed to send message. Please try again later.", {
          style: {
            background: "#e06356",
          },
        });
        return;
      }
      toast.success("Message sent successfully!", {
        style: {
          background: "#98c379",
        },
      });
      form.reset();
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.message || error}`);
    }
  }

  return (
    <Card className="mx-auto h-fit max-w-[95%] md:max-w-[700px] md:min-w-[500px] lg:mx-0">
      <CardContent>
        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="font-semibold">
                    Full Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Joe Doe"
                    autoComplete="given-name"
                    className="transition-all duration-200 focus:scale-[1.01]"
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className="flex flex-col gap-5 sm:flex-row">
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className="font-semibold">
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      placeholder="example@gmail.com"
                      autoComplete="email"
                      className="transition-all duration-200 focus:scale-[1.01]"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="phoneNumber"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className="font-semibold">
                      Phone Number
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      placeholder="+61 000 000 000"
                      autoComplete="tel"
                      className="transition-all duration-200 focus:scale-[1.01]"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="companyName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="font-semibold">
                    Company Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Company Inc."
                    className="transition-all duration-200 focus:scale-[1.01]"
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className="flex flex-col gap-5 sm:flex-row">
              <Controller
                name="originCountryCity"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className="font-semibold">
                      Origin Country/City
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      placeholder="e.g., Syndey, Australia"
                      autoComplete="off"
                      className="transition-all duration-200 focus:scale-[1.01]"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="destinationCountryCity"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className="font-semibold">
                      Destination Country/City
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      placeholder="e.g., London, UK"
                      autoComplete="off"
                      className="transition-all duration-200 focus:scale-[1.01]"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="serviceRequired"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-semibold"
                    htmlFor="serviceRequired"
                  >
                    Service Required
                  </FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Sea Freight">Sea Freight</SelectItem>
                        <SelectItem value="Air Freight">Air Freight</SelectItem>
                        <SelectItem value="Customs Clearance">
                          Customs Clearance
                        </SelectItem>
                        <SelectItem value="Vehicle Imports">
                          Vehicle Imports
                        </SelectItem>
                        <SelectItem value="FMCG Logistics">
                          FMCG Logistics
                        </SelectItem>
                        <SelectItem value="Meat Trading">
                          Meat Trading
                        </SelectItem>
                        <SelectItem value="Cartage Transport">
                          Cartage Transport
                        </SelectItem>
                        <SelectItem value="Warehouse & Storage">
                          Warehouse & Storage
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="message" className="font-semibold">
                    Message
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="message"
                      placeholder="Leave us a message..."
                      rows={6}
                      aria-invalid={fieldState.invalid}
                      className="min-h-24 transition-all duration-200 focus:scale-[1.01]"
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText>
                        {field.value.length}/500 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="responsive">
          <Button
            type="submit"
            form="contact-form"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                <Spinner /> <p>Sending</p>
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
