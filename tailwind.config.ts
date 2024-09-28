import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js",
    "./node_modules/@nextui-org/theme/dist/components/Card.js",
    "./node_modules/@nextui-org/theme/dist/components/CardFooter.js",
    "./node_modules/@nextui-org/theme/dist/components/Image.js",
    "./node_modules/@nextui-org/theme/dist/components/Button.js",
    "./node_modules/@nextui-org/theme/dist/components/Navbar.js",
    "./node_modules/@nextui-org/theme/dist/components/NavbarBrand.js",
    "./node_modules/@nextui-org/theme/dist/components/NavbarContent.js",
    "./node_modules/@nextui-org/theme/dist/components/NavbarItem.js",
    "./node_modules/@nextui-org/theme/dist/components/Link.js",
    "./node_modules/@nextui-org/theme/dist/components/Spinner.js",
    "./node_modules/@nextui-org/theme/dist/components/Modal.js",
    "./node_modules/@nextui-org/theme/dist/components/ModalContent.js",
    "./node_modules/@nextui-org/theme/dist/components/ModalHeader.js",
    "./node_modules/@nextui-org/theme/dist/components/ModalBody.js",
    "./node_modules/@nextui-org/theme/dist/components/ModalFooter.js",
    "./node_modules/@nextui-org/theme/dist/components/useDisclosure.js",
    "./node_modules/@nextui-org/theme/dist/components/Checkbox.js",
    "./node_modules/@nextui-org/theme/dist/components/Input.js",
    "./node_modules/@nextui-org/theme/dist/components/Accordion.js",
    "./node_modules/@nextui-org/theme/dist/components/AccordionItem.js",
    "./node_modules/@nextui-org/theme/dist/components/Table.js",
    "./node_modules/@nextui-org/theme/dist/components/TableHeader.js",
    "./node_modules/@nextui-org/theme/dist/components/TableColumn.js",
    "./node_modules/@nextui-org/theme/dist/components/TableBody.js",
    "./node_modules/@nextui-org/theme/dist/components/TableRow.js",
    "./node_modules/@nextui-org/theme/dist/components/TableCell.js",
    "./node_modules/@nextui-org/theme/dist/components/Select.js",
    "./node_modules/@nextui-org/theme/dist/components/Popover.js",
    "./node_modules/@nextui-org/theme/dist/components/PopoverTrigger.js",
    "./node_modules/@nextui-org/theme/dist/components/PopoverContent.js",
  ],
  theme: {
    extend: {
      screens: {
        verybig: { max: "2000px" },
        1700: { max: "1700px" },
        1850: { max: "1850px" },
        mobile: { max: "1024px" },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
