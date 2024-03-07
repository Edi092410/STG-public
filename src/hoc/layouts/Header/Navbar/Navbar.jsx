import { UnderlinedLink } from "../../../../components/common/UnderlinedLink/UnderlinedLink";
import { Logo } from "../../../../components/ui/Logo/Logo";
import { useNavigate } from "react-router-dom";
export const Navbar = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-x-4">
      <div onClick={() => navigate("/")}>
        <Logo />
      </div>
      {items.map((item, index) => (
        <div key={index}>
          <UnderlinedLink to={item.to} name={item.name} />
        </div>
      ))}
    </div>
  );
};
