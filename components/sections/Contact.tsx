"use client";

import { useState } from "react";
import { contact } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Icon } from "@/components/ui/Icon";
import Swal from "sweetalert2";

const inputBase =
  "w-full rounded-xl border border-border bg-[color-mix(in_oklab,var(--color-surface-2)_55%,transparent)] px-4 py-3 text-foreground placeholder:text-subtle transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData();

    formData.append("access_key", "29e17d46-429b-47b1-a407-f3481c0c4081");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
          text: "Thank you for contacting me. I will get back to you as soon as possible.",
          confirmButtonText: "Ok",
          backdrop: "rgba(0, 0, 0, 0.5)",
          confirmButtonColor: "#ECC94B",
        });

        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Web3Forms Error:", data);

        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text:
            data.message || "Unable to send your message. Please try again.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#ECC94B",
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Unable to send your message. Please check your internet connection and try again.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#ECC94B",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-sm font-medium text-muted">
            Name
          </label>

          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputBase}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="text-sm font-medium text-muted">
            Email
          </label>

          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputBase}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-sm font-medium text-muted">
          Message
        </label>

        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me a little about what you have in mind…"
          className={`${inputBase} resize-y`}
        />
      </div>

      <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          rightIcon={<Icon name="send" size={16} />}
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {isSubmitting ? (
          <span className="text-xs text-subtle border border-accent-green rounded-md px-2 py-1">
            Sending your message...
          </span>
        ) : null}
      </div>
    </form>
  );
}

export function Contact({ index = "05" }: { index?: string }) {
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* CTA copy */}
        <div>
          <SectionHeading
            index={index}
            eyebrow="Contact"
            title="Let's build something"
          />

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-[clamp(1rem,2.5vw,1.1rem)] leading-relaxed text-muted">
              Have a project in mind, a role to fill, or just want to connect?
              I&apos;d be glad to hear about it — send a message and I&apos;ll
              get back to you.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-5">
              <Button
                href={`mailto:${contact.email}`}
                variant="secondary"
                size="md"
                leftIcon={<Icon name="mail" size={16} />}
                className="w-fit"
              >
                Email me directly
              </Button>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-subtle">
                  Elsewhere
                </span>

                <SocialLinks />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <Card className="p-6 sm:p-8">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
