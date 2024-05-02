"use client";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: Props): ReactNode => {
  const router = useRouter();
  const authInfo = useAuth();

  if (!authInfo.checked) {
    return <div>Loading...</div>;
  }

  if (authInfo.isAuthenticated) {
    return <>{children}</>;
  }

  router.push("/signin");
  return null;
};

export const GuestRoute = ({ children }: Props): ReactNode => {
  const router = useRouter();
  const authInfo = useAuth();

  if (!authInfo.checked) {
    return <div>Loading...</div>;
  }

  if (authInfo.isAuthenticated) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
};
