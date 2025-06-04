"use client";

import emailjs from "@emailjs/browser";

// Inicializa o EmailJS com a Public Key do ambiente
if (typeof window !== "undefined") {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
}
