"use client";

import { motion } from "framer-motion";
import { Clock, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface ArticleCardData {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  readTime: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function ResourceCard({ article, index = 0 }: { article: ArticleCardData; index?: number }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: EASE }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/resources/blog/${article.slug}`} className="group block h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-shadow duration-300 group-hover:shadow-lift">
          {/* Image */}
          <div className="relative h-[200px] w-full overflow-hidden bg-surface-muted">
            {!imgError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={article.imageUrl}
                alt={article.title}
                onError={() => setImgError(true)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-muted to-border/30">
                <span className="text-4xl opacity-30">📞</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
            <span
              className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide"
              style={{ backgroundColor: article.categoryColor + "22", color: article.categoryColor, border: `1px solid ${article.categoryColor}44` }}
            >
              {article.category}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5">
            <p className="text-[11px] text-ink-faint">{article.date}</p>
            <h3 className="mt-2 font-display text-[16px] font-bold leading-snug tracking-tight text-ink group-hover:text-ink/80 transition-colors">
              {article.title}
            </h3>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-muted line-clamp-3">
              {article.excerpt}
            </p>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-2">
                <div className="relative h-7 w-7 overflow-hidden rounded-full border border-border bg-surface-muted">
                  <Image src={article.authorAvatar} alt={article.authorName} fill className="object-cover" sizes="28px" />
                </div>
                <span className="text-[12px] font-medium text-ink">{article.authorName}</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-ink-faint">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedCard({ article }: { article: ArticleCardData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: EASE }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/resources/blog/${article.slug}`} className="group block">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card transition-shadow duration-300 group-hover:shadow-lift md:grid md:grid-cols-[1fr_480px]">
          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="flex items-center gap-3">
              <span
                className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide"
                style={{ backgroundColor: article.categoryColor + "22", color: article.categoryColor, border: `1px solid ${article.categoryColor}44` }}
              >
                {article.category}
              </span>
              <span className="text-[12px] text-ink-faint">{article.date}</span>
            </div>
            <h2 className="mt-4 font-display text-[1.6rem] font-bold leading-tight tracking-tighter2 text-ink md:text-[2rem] group-hover:text-ink/80 transition-colors">
              {article.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
              {article.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative h-9 w-9 overflow-hidden rounded-full border border-border bg-surface-muted">
                  <Image src={article.authorAvatar} alt={article.authorName} fill className="object-cover" sizes="36px" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink">{article.authorName}</p>
                  <p className="text-[11px] text-ink-faint flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime}</p>
                </div>
              </div>
              <span className="flex items-center gap-1 text-[13px] font-semibold text-ink group-hover:text-accent transition-colors">
                Read article <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[260px] w-full overflow-hidden md:h-auto">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
