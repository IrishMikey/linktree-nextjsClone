import Image from "next/image";
import data from "../data.json";

function LinkCard({
  title,
  url,
  image,
}: {
  title: string;
  url: string;
  image?: string;
}) {
  return (
    <a
      href={url}
      className="w-full flex  bg-white mb-2 rounded-lg"
    >
      <div className="flex justify-between p-4  shadow-md hover:shadow-xl transition-shadow duration-200 w-full">
        {image && ( <Image src={image} alt={title +" image"} width={25} height={25} className="rounded"/>)}
        <h2 className="text-lg flex-grow text-center">{title}</h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full pt-5">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="mt-5 text-xl font-semibold text-white tracking-wider">{data.name}</h1>
      <div className="flex flex-col w-full mt-5 px-5 max-w-lg">
        {data.links.map((link) => (
          <LinkCard key={link.url} {...link} />
        ))}
      </div>
    </div>
  );
}
