"use server";

import { revalidatePath } from "next/cache";

import { isWaitlistExperience, type WaitlistState } from "@/lib/waitlist";
import { createWaitlistEntry } from "@/lib/waitlistDb";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const experience = String(formData.get("experience") ?? "");

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!isWaitlistExperience(experience)) {
    return {
      status: "error",
      message: "Please tell us where you are with investing.",
    };
  }

  const result = await createWaitlistEntry(email, experience);

  if (result === "error") {
    return {
      status: "error",
      message: "Something broke on our side. Please try again in a moment.",
    };
  }

  if (result === "duplicate") {
    return {
      status: "success",
      message: "You are already on the list. We will email you at launch.",
    };
  }

  revalidatePath("/");

  return {
    status: "success",
    message: "You are on the list. We will email you when early access opens.",
  };
}
