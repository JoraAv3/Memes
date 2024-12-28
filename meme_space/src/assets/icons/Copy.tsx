import { Svg, SvgProps } from "../../utils/svg-wrapper";

export const CopyIcon: React.FC<SvgProps> = ({ className }) => (
  <Svg className={className} width="22" height="22" viewBox="0 0 22 22" fill="inherit">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1C0 0.447715 0.447715 0 1 0H13C13.5523 0 14 0.447715 14 1V2.5H12V2H2V16H6.5V18H1C0.447715 18 0 17.5523 0 17V1Z"
      fill="inherit"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 5C8 4.44772 8.44771 4 9 4H21C21.5523 4 22 4.44772 22 5V21C22 21.5523 21.5523 22 21 22H9C8.44771 22 8 21.5523 8 21V5ZM10 6V20H20V6H10Z"
      fill="inherit"
    />
    <path fillRule="evenodd" clipRule="evenodd" d="M16 11H12V9H16V11Z" fill="inherit" />
    <path fillRule="evenodd" clipRule="evenodd" d="M18 14H12V12H18V14Z" fill="inherit" />
    <path fillRule="evenodd" clipRule="evenodd" d="M15 17H12V15H15V17Z" fill="inherit" />
  </Svg>
);
