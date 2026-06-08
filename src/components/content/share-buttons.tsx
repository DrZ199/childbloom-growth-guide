import { useState } from "react";
import { Check, Copy, Facebook, Linkedin, Mail, Pin, Twitter } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  url: string;
  imageUrl?: string;
}

export function ShareButtons({ title, url, imageUrl }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodeURIComponent(imageUrl ?? "")}&description=${encodedTitle}`,
      icon: Pin,
      color: "hover:text-red-600",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: Twitter,
      color: "hover:text-sky-500",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
      color: "hover:text-blue-700",
    },
    {
      name: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: Mail,
      color: "hover:text-green-600",
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API not available
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Share
      </span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.name}`}
          className={`text-muted-foreground transition-colors ${link.color}`}
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="text-muted-foreground transition-colors hover:text-foreground"
      >
        {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
      </button>
    </div>
  );
}
