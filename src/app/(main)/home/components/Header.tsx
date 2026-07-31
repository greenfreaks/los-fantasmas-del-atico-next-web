import { SideSocial } from "./sideSocial";

export const Header = () => {
  return (
    <header className="flex items-center justify-center p-5 bg-black text-white h-16">
      <div className="sm:hidden">
        <SideSocial />
      </div>
    </header>
  );
};
