"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadScript } from "@react-google-maps/api";

import {
  CheckoutSidebar,
  Container,
  Title,
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
} from "@/shared/components";
import { CheckoutFormValues, checkoutFormSchema } from "@/shared/constants";
import { useCart } from "@/shared/hooks";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import React from "react";
import { useSession } from "next-auth/react";
import { Api } from "@/shared/services/api-client";

export default function CheckoutPage() {
  const [submitting, setSubmitting] = React.useState(false);
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();
  const { data: session } = useSession();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  React.useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullName.split(" ");

      form.setValue("firstName", firstName);
      form.setValue("lastName", lastName);
      form.setValue("email", data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session, form]);

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmitting(true);

      const url = await createOrder(data);

      toast.error("Order successfully placed! 📝 Redirecting to payment...", {
        icon: "✅",
      });

      if (url) {
        location.href = url;
      }
    } catch (err) {
      console.log(err);
      setSubmitting(false);
      toast.error("Failed to create order", {
        icon: "❌",
      });
    }
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10 p-3">
      <Title
        text="Order processing"
        className="font-extrabold mb-8 text-[36px]"
      />

      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        libraries={["places"]}
      >
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-4 flex-col md:flex-row">
              {/* Left side */}
              <div className="flex flex-col gap-4 flex-1">
                <CheckoutCart
                  onClickCountButton={onClickCountButton}
                  removeCartItem={removeCartItem}
                  items={items}
                  loading={loading}
                />

                <CheckoutPersonalForm
                  className={loading ? "opacity-40 pointer-events-none" : ""}
                />

                <CheckoutAddressForm
                  className={loading ? "opacity-40 pointer-events-none" : ""}
                />
              </div>

              {/* Right side */}
              <div className="md:w-[400px] md:max-w-[350px]">
                <CheckoutSidebar
                  totalAmount={totalAmount}
                  loading={loading || submitting}
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </LoadScript>
    </Container>
  );
}
