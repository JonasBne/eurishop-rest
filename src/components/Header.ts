import styled, { DefaultTheme } from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  textAlign,
  TextAlignProps,
  variant,
} from "styled-system";

type Variants = "primary" | "secondary" | "tertiary";

interface VariantProps {
  variant?: Variants;
}

// TODO: cleanup the unused variants later
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
        color: `${(theme: DefaultTheme) => theme.colors.whites.primaryWhite}`,
      },
      secondary: {
        color: "#FFF",
        background: "#013A63",
      },
      tertiary: {
        color: "#013A63",
      },
    },
  })
);

export default Header;
