import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  textAlign,
  TextAlignProps,
  variant,
  border,
  BorderProps,
} from "styled-system";
import theme from "../theme/theme";

type Variants = "primary" | "secondary" | "tertiary";

interface VariantProps {
  variant?: Variants;
}

const Header = styled.h1<
  SpaceProps | LayoutProps | TextAlignProps | VariantProps | BorderProps
>(
  {
    letterSpacing: "3px",
  },
  space,
  layout,
  textAlign,
  border,
  variant({
    variants: {
      primary: {
        color: `${theme.colors.whites.primaryWhite}`,
      },
      secondary: {
        color: `${theme.colors.whites.primaryWhite}`,
        background: `${theme.colors.blues.primaryBlue}`,
      },
      tertiary: {
        color: `${theme.colors.whites.primaryWhite}`,
        background: `${theme.colors.greens.primaryGreen}`,
      },
    },
  })
);

export default Header;
