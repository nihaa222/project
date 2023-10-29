function Card() {
  return (
    <div className="cards group">
      <div className="image-container">
        <img className="image" src="Card video (1).png" />
        <img className="photo" src="46.jpg" />
      </div>
      <div className="text-main">
        <div>
          <p className="text ">Cristian Fernandez</p>
          <p className="text2 ">Derecho penal</p>
        </div>
        <div>
          <img src="Flags.png" />
        </div>
      </div>
      <div>
        <img className="qualification" src="Qualification.png"></img>
      </div>

      <div className="arrow2 -translate-y-4 translate-x-4 scale-0 transform opacity-0 transition-transform duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100">
        <div className="box">
          <img className="arrow" src="arrows.png"></img>
        </div>
      </div>

      <div className="blog">
        <p className="blog-title2">Title of blog post</p>

        <p className="blog-parah">
          Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque
          mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis
          posuere turpis turpis, nec mollis nulla tincidunt sodales.
        </p>
      </div>

      <div className="pill">
        <div className="childpill"> Pill labels</div>
        <div className="childpill">Pill labels</div>
        <div className="childpill">Pill labels</div>
      </div>

      <p className="line"></p>

      <div className="end-container">
        <div className="mni1">
          <img src="message.png" />
          <p>123</p>
        </div>
        <div className="mni1">
          <img src="Thumbs Up.png"></img>
          <p>340</p>
        </div>

        <div>
          <button className="transform rounded  border-0 text-white transition-transform hover:scale-110 hover:bg-gray-400 ">
            <img src="Buttons secondary animate.png" alt="Button Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
