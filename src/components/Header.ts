import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  textAlign,
  TextAlignProps,
  variant,
} from "styled-system";

type Variants = "primary" | "secondary";

interface VariantProps {
  variant?: Variants;
}

const Header = styled.h1<
  SpaceProps | LayoutProps | TextAlignProps | VariantProps
>(
  {
    letterSpacing: "3px",
  },
  space,
  layout,
  textAlign,
  variant({
    variants: {
      primary: {
        color: "#FFF",
      },
      secondary: {
        color: "#FFF",
        background: "#013A63",
      },
    },
  })
);

export default Header;
