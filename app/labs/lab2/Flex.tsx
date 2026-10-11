export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-flex-grow-1 wd-my-bg-mustard wd-my-fg-navy">
          The Road goes ever on and on
        </div>
        <div className="wd-my-bg-cream wd-my-fg-navy">Frodo</div>
        <div className="wd-my-fixed-width wd-my-bg-navy wd-my-fg-silver">Bag End</div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Pinned</div>
        <div className="wd-bg-color-gray">Natural</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">Stretches</div>
      </div>
    </div>
  );
}
