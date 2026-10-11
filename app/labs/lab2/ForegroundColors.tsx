export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p className="wd-fg-color-olive wd-my-bg-color">
        All that is gold does not glitter,{" "}
        <span className="wd-fg-color-black">
          not all those who wander are lost.
        </span>{" "}
        - J.R.R. Tolkien
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This sample paragraph is blue,{" "}
        <span className="wd-fg-color-black">and this nested span is black</span>
      </p>
    </div>
  );
}
