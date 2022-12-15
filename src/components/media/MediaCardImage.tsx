export default function MediaCardImage({ photos }: any) {
  return (
    <div className="max-w-500px]">
      {photos.map((items: any, index: number) => (
        <div key={index} className="mb-[33px]">
          <img
            src={items.image}
            alt="no img"
            className="w-full h-auto bg-white rounded-[16px] mb-[19px] object-cover"
          />
          <p className="text-center px-[20px] text-[22px]">{items.title}</p>
        </div>
      ))}
    </div>
  );
}
