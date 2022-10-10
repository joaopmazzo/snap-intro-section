const size = {
  mobile: "375px",
  tablet: "845px",
  notebook: "1080px",
  desktopS: "1280px",
  desktopM: "1378px",
  desktop: "1080px",
};

export const device = {
  mobile: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.notebook})`,
  notebook: `(min-width: ${size.notebook}) and (max-width: ${size.desktopS})`,
  desktopS: `(min-width: ${size.desktopS}) and (max-width: ${size.desktopM})`,
  desktopM: `(min-width: ${size.desktopM}) and (max-width: ${size.desktop})`,
  desktop: `(min-width: ${size.desktop})`,
};
