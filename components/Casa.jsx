export default function Casa(props) {
  return (
    <div
      style={{
        backgroundColor: props.cor,
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: props.selected ? "rgba(0,255,0,.5)" : props.cor,
        }}
        onClick={props.onClick}
      ></div>
    </div>
  );
}
