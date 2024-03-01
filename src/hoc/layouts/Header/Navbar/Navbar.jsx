import { UnderlinedLink } from "../../../../components/common/UnderlinedLink/UnderlinedLink";
import { Logo } from "../../../../components/ui/Logo/Logo";
export const Navbar = ({ items }) => {
  return (
    <div className="flex items-center gap-x-4">
      <Logo />
      {items.map((item, index) => (
        <div key={index}>
          <UnderlinedLink to={item.to} name={item.name} />
        </div>
      ))}
    </div>
  );
};
