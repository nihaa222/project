function Buttons() {
  return (
    <div>
      <button className=" group absolute  top-[195px]  ml-[107px] h-[53px] w-[199px] rounded bg-[#6884FD]">
        <span className="w-143 h-35 font-segoeui font-segoeui leading-34.58 relative text-center text-2xl font-semibold text-white">
          BOOK NOW
        </span>
        <span className="h-50 w-384 absolute bottom-[-30px] left-[-40px] right-[-40px] top-[-30px] z-0 rounded-[40px] bg-[#6884FD] opacity-0 shadow-xl blur-sm transition-opacity duration-200 group-hover:opacity-20"></span>
      </button>
      <button className="custom-gradient-button group absolute top-[195px] ml-[402px] mr-[952px] h-[53px] w-[199px] rounded text-white">
        <span className="w-143 h-35 font-segoeui font-segoeui leading-34.58 relative text-center text-2xl font-semibold">
          BOOK NOW
        </span>
        <span className="h-50 w-384 custom-gradient-button absolute bottom-[-30px] left-[-40px] right-[-50px] top-[-30px] z-0 rounded-[40px] opacity-0 shadow-xl blur-sm duration-200 group-hover:opacity-20 "></span>
      </button>
    </div>
  );
}

export default Buttons;
