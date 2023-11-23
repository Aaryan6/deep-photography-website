import { urlForImage } from "@/sanity/lib/image";

export default function ImageGridLayout({ groups }: any) {
  return (
    <div className="grid grid-flow-row justify-center gap-4 md:gap-8 grid-cols-1 md:grid-col-2 pb-4 px-4">
      {groups.map((group: any, i: number) => (
        <div
          key={i}
          className="flex flex-col gap-y-4 md:gap-y-8 last:hidden lg:last:flex"
        >
          {group.map((item: any, i: number) => (
            <div key={i} className="relative w-full h-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={urlForImage(item.image).url() as string}
                alt=""
                className="w-full h-full hover:scale-105 hover:brightness-75 transform transition-all duration-300"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
