import { Snippet } from "@nextui-org/react";

interface SnippetUIProps {
  children: string;
}

const SnippetUI: React.FC<SnippetUIProps> = ({ children }) => {
  return (
    <Snippet
      // defaultValue={children}
      classNames={{ symbol: "hidden" }}
      className="verybig:w-[auto] w-[50svh] 1700:text-[10px]  flex pt-3 pb-3 gap-10 bg-[rgb(20,17,40)] text-white text-opacity-70 mobile:text-[0px] "
      tooltipProps={{
        color: "foreground",
        disableAnimation: true,
        placement: "right",
        closeDelay: 0,
      }}
    >
      {children}
    </Snippet>
  );
};
export default SnippetUI;
