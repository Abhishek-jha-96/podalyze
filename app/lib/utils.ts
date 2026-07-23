import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { SentimentTone } from "~/constants/interfaces"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getSplicedTitle(title: string) {
  return title.length > 20
    ? title.substring(0, title.lastIndexOf(" ", 20)) + "..."
    : title;
}

export function getYoutubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1) || null
    }
    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v")
    }
  } catch {
    return null
  }
  return null
}

export function getYoutubeThumbnail(url: string, fallbackIndex = 0): string {
  const videoId = getYoutubeVideoId(url)
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
  }
  const covers = [
    "/analytics/cover-1.png",
    "/analytics/cover-2.png",
    "/analytics/cover-3.png",
  ]
  return covers[fallbackIndex % covers.length]
}

export function formatDisplayUrl(url: string): string {
  try {
    const parsed = new URL(url)
    const hostPath = `${parsed.hostname}${parsed.pathname}`
    return hostPath.length > 42 ? `${hostPath.slice(0, 42)}…` : hostPath
  } catch {
    return url.length > 42 ? `${url.slice(0, 42)}…` : url
  }
}

export function formatUpdatedAt(dateValue: string): string {
  const date = new Date(dateValue)
  if (Number.isNaN(date.getTime())) {
    return "Updated recently"
  }

  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays <= 0) return "Updated Today"
  if (diffDays === 1) return "Updated Yesterday"
  if (diffDays < 7) return `Updated ${diffDays} days ago`

  return `Updated ${date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })}`
}

export function formatWatchTime(totalMinutes: number): string {
  if (!totalMinutes || totalMinutes <= 0) return "—"
  const mins = Math.floor(totalMinutes)
  const secs = Math.round((totalMinutes - mins) * 60)
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}

export function getSentimentMeta(tone: SentimentTone): {
  label: string
  dotClass: string
  textClass: string
} {
  switch (tone) {
    case "highly-positive":
      return {
        label: "Highly Positive",
        dotClass: "bg-emerald-500",
        textClass: "text-emerald-700",
      }
    case "positive":
      return {
        label: "Positive",
        dotClass: "bg-emerald-500",
        textClass: "text-emerald-700",
      }
    case "neutral":
      return {
        label: "Neutral",
        dotClass: "bg-blue-400",
        textClass: "text-blue-700",
      }
    case "negative":
      return {
        label: "Negative",
        dotClass: "bg-red-500",
        textClass: "text-red-700",
      }
    default:
      return {
        label: "Pending",
        dotClass: "bg-amber-400",
        textClass: "text-amber-700",
      }
  }
}