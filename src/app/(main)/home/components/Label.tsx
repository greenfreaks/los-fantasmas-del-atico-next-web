interface LabelProps {
  text: string;
}
export const Label = ({ text }: LabelProps) => {
  return (
    <div className="border-2 rounded-full p-2 min-w-30 flex flex-col justify-center items-center font-oswald">
      <span>{text}</span>
    </div>
  );
};
