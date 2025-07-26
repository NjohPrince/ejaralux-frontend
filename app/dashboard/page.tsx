import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AxiosError } from "axios";
import { Metadata } from "next";

import TemplateheaderAtom from "@/modules/dashboard/components/atoms/template-header/template-header.atom";
import { UserDataType } from "@/modules/auth/types/auth.types";
import axiosInstance from "@/shared/lib/axios";

export const metadata: Metadata = {
  title: "Dashboard | EJARALUX",
};

export interface GetUserResponse {
  status: string;
  data: {
    user: UserDataType;
  };
}

async function getUserInfo(): Promise<UserDataType | null> {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");

  try {
    const res = await axiosInstance.get<GetUserResponse>("/users/me", {
      headers: {
        Cookie: cookieHeader,
      },
    });

    return res.data.data.user;
  } catch (err) {
    const axiosErr = err as AxiosError;

    if (
      axiosErr.response?.status === 401 ||
      axiosErr.response?.status === 403
    ) {
      return null;
    }

    // ❌ log only in dev (avoid leaking info in production)
    if (process.env.NODE_ENV !== "production") {
      console.error("Unexpected error in getUserInfo:", axiosErr.message);
    }

    throw new Error("Failed to fetch user info.");
  }
}

export default async function DashboardPage() {
  const user = await getUserInfo();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className={""}>
      <TemplateheaderAtom content={`Welcome, ${user?.firstName}`} />
    </div>
  );
}
