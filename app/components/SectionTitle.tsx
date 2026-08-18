type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={alignment}>
      <h2
        className="font-display text-4xl italic leading-[0.95] text-foreground sm:text-5xl lg:text-6xl"
        style={{ transform: "skewX(-4deg)" }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}