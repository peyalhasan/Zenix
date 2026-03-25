import Image from "next/image";

const Gallery = ({gallery}) => {

  const newGallery = [...gallery];
  newGallery.shift()

  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase ">
        <Image
          src={gallery[0]}
          alt="Main Pic"
          width={400}
          height={300}
          className="border h-[400px]"
        />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          {
            newGallery.map((img)=>(
              <Image key={img} src={img} alt="hotel" width={400} height={300}   className="border" />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;
