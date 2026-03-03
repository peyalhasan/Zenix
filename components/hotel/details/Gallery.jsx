const Gallery = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-2 imageshowCase ">
        <img src="./assets/images/1.png" className="h-[400px] border" alt="" />

        <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
          <img src="./assets/images/2.png" alt="" className="border" />
          <img src="./assets/images/3.png" alt="" className="border" />
          <img src="./assets/images/4.png" alt="" className="border" />
          <img src="./assets/images/5.png" alt="" className="border" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
