import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TFormLoginValues, formLoginSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Title } from "../../../title";
import { FormInput } from "../../../form";
import { Button } from "@/shared/components/ui";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw Error();
      }

      toast.success("You have successfully logged into your account.", {
        icon: "✅",
      });

      onClose?.();
    } catch (error) {
      console.error("Error [LOGIN]", error);
      toast.error("Failed to log in to your account", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title
              text="Login to your account"
              size="md"
              className="font-bold"
            />
            <p className="text-gray-400">
              Enter your email to log into your account
            </p>
          </div>
          <img
            src="/assets/images/phone-icon.png"
            alt="phone-icon"
            width={60}
            height={60}
          />
        </div>

        <FormInput name="email" label="Email" required />
        <FormInput name="password" label="Password" type="password" required />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </FormProvider>
  );
};
