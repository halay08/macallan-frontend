type Props = {
  item: { url: string; text: string };
};

export const MenuItem = ({ item }: Props) => {
  const { url, text } = item;
  return (
    <a
      className="text-xl font-bold mb-1 hover:underline focus:underline"
      href={url}
    >
      {text}
    </a>
  );
};
