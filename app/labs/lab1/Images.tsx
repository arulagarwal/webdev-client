export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      A sample image from NASA:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Buzz Aldrin walking on the Moon during Apollo 11"
        src="https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~medium.jpg"
      />
      <br />
      An image that matters to me:
      <br />
      <img
        id="wd-your-image"
        src="/images/jackson-square-snow.webp"
        height="250px"
        alt="Snow covered trees lining a SW corridor park near Jackson Square, Boston"
      />
      <br />
      After a snowstorm in January 2026, Jackson Square, Boston
    </div>
  );
}