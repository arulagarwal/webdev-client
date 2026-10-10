export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-my-dimension wd-my-bg-navy wd-my-fg-silver">
          Seven stars and seven stones and one white tree. - Gandalf
        </div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box keeps its declared 120 by 60 pixel size even with a long sentence
        </div>
      </div>
    </div>
  );
}
