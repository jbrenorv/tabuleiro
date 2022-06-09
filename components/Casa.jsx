export default function Casa(props) {
  return (
    <div
      style={{
        backgroundColor: props.cor ?? "#000",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,255,0,.5)",
        }}
      ></div>
    </div>
  );
}
