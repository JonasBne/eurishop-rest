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
import theme from "../theme/theme";

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
        color: `${theme.colors.whites.primaryWhite}`,
      },
      secondary: {
        color: `${theme.colors.whites.primaryWhite}`,
        background: `${theme.colors.blues.primaryBlue}`,
      },
    },
  })
);

export default Header;
