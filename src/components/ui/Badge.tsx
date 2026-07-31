interface BadgeProps {
  text: string;
}

function Badge({
  text,
}: BadgeProps) {
  return (
    <span className="rounded-full bg-red-500 px-3 py-1 text-sm text-white">
      {text}
    </span>
  );
}

export default Badge;