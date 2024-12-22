import Marquee from "react-fast-marquee";

interface MarqueeProps {
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  gradient?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const MarqueeComponent: React.FC<MarqueeProps> = ({
  direction,
  children,
  gradient = false,
  speed = 50,
  className,
}) => {
  return (
    <div className={className}>
      <Marquee speed={speed} gradient={gradient} direction={direction}>
        {children}
      </Marquee>
    </div>
  );
};
