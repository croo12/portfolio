
const Line = ({ content } : {content : string}) => {
  return (
    <p className={`font-sans m-0 mx-auto opacity-75`}>
      {content}
    </p>
  );
}

export default Line;