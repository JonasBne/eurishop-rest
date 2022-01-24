import styled from "styled-components";
import { space, SpaceProps, layout, LayoutProps, variant } from "styled-system";

// TODO: use variants

type Variants = "primary" | "secondary" | "danger" | "success";

interface VariantProps {
  variant?: Variants;
}

const Button = styled("button")<SpaceProps | LayoutProps | VariantProps>(
  {
    boxSizing: "border-box",
    borderRadius: "0.25rem",
    borderWidth: "0",
    boxShadow:
      "rgba(50, 50, 93, 0.1) 0 0 0 1px inset, rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0",
    color: "#FFF",
    fontSize: "100%",
    height: "2rem",
    lineHeight: "1.15",
    outline: "none",
    textAlign: "center",
    textTransform: "none",
    cursor: "pointer",
  },
  space,
  layout,
  variant({
    variants: {
      primary: {
        color: "#FFF",
        bg: "#007bff",
      },
      secondary: {
        color: "FFF",
        bg: "#17a2b8",
      },
      danger: {
        color: "#FFF",
        bg: "#dc3545",
      },
      success: {
        color: "FFF",
        bg: "#28a745",
      },
    },
  })
);

// const Button = styled.button<SpaceProps | LayoutProps>`
//   ${space}
//   ${layout}
//   border-radius: 0.25rem;
//   border-width: 0;
//   box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
//     rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   font-size: 100%;
//   height: 2rem;
//   line-height: 1.15;
//   outline: none;
//   padding: 0 25px;
//   text-align: center;
//   text-transform: none;

//   &:hover {
//     box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
//       rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
//       rgba(50, 151, 211, 0.3) 0 0 0 4px;
//   }
//     ${variant}: {
//       variants: {
//         danger: {
//           color: white,
//           backgroundColor: "red,
//         },
//         primary: {
//           color: white,
//           backgroundColor: "green"
//         }
//       }
//     }
// `;

export default Button;
