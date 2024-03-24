import Image from 'next/image'

export interface ComicProps {
  comic: {
    id:number,
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
}

export default function Card({ comic }: ComicProps) {
  return (
    <div className="max-w-xs overflow-hidden shadow-lg mx-auto mt-8 flex flex-col items-center border p-4 rounded-lg">
      <Image
        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
        width={200}
        height={200}
        alt={comic.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{comic.title}</div>
        {/* <p className="text-gray-700 text-base">
          <strong>Comic:</strong> {comic.title}
        </p> */}
      </div>
    </div>
  );
}
