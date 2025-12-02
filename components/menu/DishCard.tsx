import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface DishProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export const DishCard = ({ title, description, price, image }: DishProps) => {
  return (
    <div className="group relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-neutral-100 dark:border-white/5 h-full flex flex-col transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
      </div>
      {/* <div className="p-5 flex flex-col flex-grow relative bg-white"> */}
      {/* <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-lg font-medium text-deep font-serif group-hover:text-gold transition-colors duration-300">{title}</h3>
          <span className="text-gold font-medium text-base font-serif whitespace-nowrap ml-2">{price}</span>
        </div> */}
      {/* <p className="text-neutral-500 mb-4 line-clamp-2 flex-grow leading-relaxed font-light text-xs">{description}</p> */}
      {/* <Button variant="outline" size="sm" className="w-full mt-auto border-neutral-200 text-deep hover:bg-deep hover:text-white hover:border-deep transition-all duration-300 uppercase tracking-wider text-[10px] font-medium h-8 rounded-sm">
          Add
        </Button> */}
      {/* </div> */}
    </div>
  );
};
