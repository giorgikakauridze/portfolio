import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { StaticImageData } from "next/image";

interface BlogCardProps {
  imageSrc: StaticImageData;
  children: string;
}
const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, children }) => {
  console.log(imageSrc);
  return (
    <div>
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={300}
          src={imageSrc.src}
          width={400}
        />
        <CardFooter className="justify-between before:bg-[rgba(103,57,228,0.09)] border-[rgba(103,57,228,0.08)] border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 p-3">
          <Button
            className="text-sm font-[1000] text-white bg-transparent"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            {children}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
