"use client";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "@/types";

const File = ({ name }: { name: string }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.FILE,
    item: { name, type: ItemTypes.FILE },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      //@ts-ignore
      ref={drag}
      className={`px-3 border-black border ${isDragging ? "opacity-50" : ""}`}
    >
      {name}
    </div>
  );
};

export default File;
