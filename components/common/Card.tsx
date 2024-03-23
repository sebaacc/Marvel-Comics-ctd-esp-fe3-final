interface CardProps {
  comic: {
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
}

export default function Card({ comic }: CardProps) {
  return (
    <div className="max-w-xs overflow-hidden shadow-lg mx-auto mt-8 flex flex-col items-center border p-4 rounded-lg">
      <img
        className="mx-auto aspect-auto object-cover"
        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
        alt={comic.title}
        width={200}
        height={200}
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
