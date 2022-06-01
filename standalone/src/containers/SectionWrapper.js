const SectionWrapper = (props) => {
  return (
    <div className={props.color ? "py-40 bg-gray-100" : "py-40"}>
      <div className="max-w-6xl mx-auto">{props.children}</div>
    </div>
  );
};

export default SectionWrapper;
