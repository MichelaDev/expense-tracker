const Card = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col rounded-lg border border-primary text-primary shadow">
      <h3 className="space-y-1.5 whitespace-nowrap p-6 text-2xl font-semibold leading-none tracking-tight">
        {title}
      </h3>
      <div className="grow px-6 pb-6">{children}</div>
    </div>
  );
};

export default Card;
