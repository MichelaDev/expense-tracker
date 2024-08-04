const Card = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col rounded-lg border border-primary text-primary shadow">
      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight space-y-1.5 p-6">
        {title}
      </h3>
      <div className="px-6 pb-6 grow">
        {children}
      </div>
    </div>
  );
};

export default Card;
