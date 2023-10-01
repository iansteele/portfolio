function Quotation(props) {
  const hasAuthor = props.author;
  function Author() {
    if (hasAuthor) {
      return (
        <p className="mt-2 text-base text-brand-tertiary">- {props.author}</p>
      );
    }
    return null;
  }
  return (
    <div className="relative px-4 py-6 rounded-md bg-brand-muted text-brand-tertiary">
      <span className="absolute text-5xl top-3 left-3 text-brand-secondary">
        "
      </span>
      <p className="text-lg font-bold leading-6">{props.quote}</p>
      <Author />
    </div>
  );
}
export default Quotation;
