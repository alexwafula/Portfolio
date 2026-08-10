"use client";

import { Button } from "@/components/ui/button";
import { socials } from "@/data/user";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { UserSocial } from "@/types/types";

function Hero() {
  return (
    <section className="flex flex-col gap-6" id="home">
      {/* Profile infos */}
      <div className="flex flex-row items-center gap-6">
        {/* Profile Image */}
        <div className="flex items-center justify-center shrink-0">
          <div className="size-24 rounded-full border border-border bg-card flex items-center justify-center text-2xl font-semibold">
            AW
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1 justify-start items-start">
          {/* Name */}
          <h1 className="md:text-4xl text-2xl font-bold">Alex Wafula Kwoba</h1>

          {/* Job Title */}
          <p className="font-light text-lg text-muted-foreground sm:text-left text-center">
            Software Developer | Full-Stack, Mobile & Operational Systems
          </p>

          {/* Location and Time */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} />
              Nairobi, Kenya
            </span>
            <span>·</span>
            <span>
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              (GMT+3)
            </span>
          </div>
        </div>
      </div>

      {/* List Social */}
      <div className="flex items-center gap-2.5">
        {socials.map((social: UserSocial) => {
          const Icon = social.icon;
          const isExternal = social.url.startsWith("http");
          return (
            <Button
              key={social.name}
              variant="ghost"
              size="icon-lg"
              className="rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"
              asChild
            >
              <Link
                href={social.url}
                aria-label={social.name}
                {...(isExternal && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <Icon size={16} />
              </Link>
            </Button>
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
