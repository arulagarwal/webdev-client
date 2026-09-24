export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      My favorite recipe, spaghetti aglio e olio:
      <ol id="wd-your-favorite-recipe">
        <li>
          Cook spaghetti in salted water until al dente, saving a cup of the
          pasta water.
        </li>
        <li>Warm olive oil in a pan over medium-low heat.</li>
        <li>
          Add sliced garlic and red pepper flakes, and cook until the garlic is
          light golden.
        </li>
        <li>Toss the drained spaghetti in the pan with a splash of pasta water.</li>
        <li>Finish with chopped parsley and serve.</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>The Lord of the Rings by J. R. R. Tolkien</li>
        <li>Project Hail Mary by Andy Weir</li>
        <li>Percy Jackson and the Olympians by Rick Riordan</li>
        <li>Lord of Mysteries by Cuttlefish That Loves Diving</li>
      </ul>
      HTML tags from this chapter
      <ul id="wd-ai-html-tags">
        <li>h1 to h6: headings, from largest to smallest</li>
        <li>p: a paragraph with vertical space above and below it</li>
        <li>ol: an ordered list that the browser numbers for you</li>
        <li>ul: an unordered list of bulleted items</li>
        <li>table: rows and columns of tabular data</li>
        <li>img: an image loaded from a local or remote source</li>
        <li>a: a hyperlink to another page or a spot on the same page</li>
      </ul>
    </div>
  );
}