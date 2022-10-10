import Dropdown from "../Dropdown/Dropdown";
import { NavigationContainer, NavigationItems } from "./Navbar.style";
import {
  FeaturesDropsdownItems,
  CompanyDropsdownItems,
} from "../../utils/dropdownOptions";

const Navbar = () => {
  return (
    <NavigationContainer>
      <Dropdown hasIcons headItem="Features" data={FeaturesDropsdownItems} />
      <Dropdown headItem="Company" data={CompanyDropsdownItems} />
      <NavigationItems>Careers</NavigationItems>
      <NavigationItems>About</NavigationItems>
    </NavigationContainer>
  );
};

export default Navbar;
