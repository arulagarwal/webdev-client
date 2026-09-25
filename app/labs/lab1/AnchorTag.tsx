export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/arulagarwal/webdev-client" id="wd-github">
        GitHub
      </a>
      <br />
      A site I visit often:{" "}
      <a href="https://www.crunchyroll.com/" id="wd-your-link">
        Crunchyroll
      </a>
      <br />
      My GitHub profile:{" "}
      <a
        href="https://github.com/arulagarwal"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        github.com/arulagarwal
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}
