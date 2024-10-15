"use client";

import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

interface CardComponentProps {
  image: string;
  sitelink: string;
}
export default function CardComponent({ image, sitelink }: CardComponentProps) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="outline-none border-none scale-105 hover:scale-100 hover:opacity-85 opacity-95 group"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={450}
        src={image}
        // width={100}
      />

      <CardFooter className="justify-between before:bg-white/10 border-white/20 py-1 absolute   bottom-0 w-[calc(100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ">
        <p className="text-tiny text-white/80 pt-2"></p>
        <Button
          className="text-md p-5 text-white bg-black/25"
          variant="flat"
          color="default"
          radius="lg"
          size="lg"
        >
          <Link
            className="font-[1000]"
            href={sitelink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </Link>
        </Button>{" "}
      </CardFooter>
    </Card>
  );
}
