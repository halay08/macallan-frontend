type Props = {
  item: { url: string; text: string };
};

export const MenuItem = ({ item }: Props) => {
  const { url, text } = item;
  return (
    <a
      className="text-sm font-serif font-bold py-2 uppercase hover:underline focus:underline"
      href={url}
    >
      {text}
    </a>
  );
};
