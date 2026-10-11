const STARSHIP =
  "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";
const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-my-bg-color wd-fg-color-olive">
          Hobbiton
        </div>
        <p>
          Hobbiton sits in a quiet corner of the Shire, all rolling green hills,
          round doors, and gardens that run down to the lanes. Hobbits there like
          their meals often, their pantries full, and their news unchanged. Most
          of them think adventures only make you late for dinner. Bilbo Baggins
          proved them wrong when he walked out of Bag End with thirteen dwarves
          and a wizard, and came home with a ring in his pocket that would one
          day send his nephew Frodo all the way to Mordor.
        </p>
        <div className="wd-float-done" />
      </div>
      <div>
        <div id="wd-ai-float" className="wd-float-right wd-bg-color-green wd-fg-color-white">
          Sample float
        </div>
        <p>{LOREM}</p>
        <div className="wd-float-done" />
      </div>
    </div>
  );
}
