const Formheader = ({heading, text}: any) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-darkText text-center">
        {heading}
      </h2>
      <p className="text-base font-normal text-[#333333] text-center my-2 mb-10">
        {text}
      </p>
    </div>
  );
};

export default Formheader;
