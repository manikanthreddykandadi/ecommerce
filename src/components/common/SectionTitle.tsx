interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      {subtitle && (
        <p className="text-blue-600 font-semibold uppercase tracking-wider">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold mt-2">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;