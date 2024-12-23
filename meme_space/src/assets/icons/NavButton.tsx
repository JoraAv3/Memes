import { Svg, SvgProps } from "../../utils/svg-wrapper";

export const NavButtonIcon: React.FC<SvgProps> = ({ className }) => (
  <Svg className={className} width="14" height="13" viewBox="0 0 14 13" fill="none">
    <rect y="5" width="14" height="3" rx="1.5" fill="black" />
    <rect width="14" height="3" rx="1.5" fill="black" />
    <rect y="10" width="14" height="3" rx="1.5" fill="black" />
  </Svg>
);
