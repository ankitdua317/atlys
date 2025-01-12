interface Props {
  text: string;
  className?: string;
}

const Badge = ({ text, className }: Props) => {
  return (
    <div
      className={`text-xs text-center mt-auto mb-2 text-white p-1 rounded-full ${className}`.trim()}
    >
      {text}
    </div>
  );
};

export default Badge;
