import Image from "next/image";

const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase ">
        <Image
          src="/image.jpg"
          alt="hotel"
          width={400}
          height={300}
          className="border"
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          <Image src="/image.jpg" alt="hotel" width={400} height={300}   className="border" />
          <Image src="/image.jpg" alt="hotel" width={400} height={300}   className="border" />
          <Image src="/image.jpg" alt="hotel" width={400} height={300}   className="border" />
          <Image src="/image.jpg" alt="hotel" width={400} height={300}   className="border" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
