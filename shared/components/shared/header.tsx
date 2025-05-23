"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  className,
}) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("paid")) {
      toastMessage = "Order successfully paid! Information sent to your email.";
    }

    if (searchParams.has("verified")) {
      toastMessage = "Email successfully verified!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);

  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-4 md:py-8">
        {/* Left side */}
        <Link href="/">
          <div className="flex items-center gap-4 mx-4">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={90}
              height={90}
              className="w-[60px] h-[60px] md:w-[90px] md:h-[90px]"
            />
            <div>
              <h1 className="text-xl md:text-2xl uppercase font-black">
                Lunch Time
              </h1>
              <p className="text-xs md:text-sm text-gray-400 leading-3">
                Take a Break, Make It Delicious
              </p>
            </div>
          </div>
        </Link>

        {/* Search input - hidden on mobile */}
        {hasSearch && (
          <div className="mx-10 flex-1 hidden md:block">
            <SearchInput />
          </div>
        )}

        {/* Right side */}
        <div className="flex items-center gap-3 mx-4">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

          {/* Cart button - hidden on mobile */}
          {hasCart && <CartButton className="hidden md:flex" />}
        </div>
      </Container>

      {/* Second Line - Mobile only */}
      {(hasSearch || hasCart) && (
        <Container className="flex items-center gap-4 py-2 md:hidden mx-4">
          {hasSearch && (
            <div className="flex-1">
              <SearchInput />
            </div>
          )}
          {hasCart && <CartButton />}
        </Container>
      )}
    </header>
  );
};
