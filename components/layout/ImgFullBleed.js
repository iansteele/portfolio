export default function ImgFullBleed(props) {
  return (
    <div className="-mx-6 overflow-hidden sm:mx-0 sm:rounded-xl ">
      {props.children}
    </div>
  );
}
