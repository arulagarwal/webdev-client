export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let traveler = "Arul";
  const greeting = `Welcome to Rivendell, ${traveler}`;
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}           <br />
      traveler = {traveler}             <br />
      greeting = {greeting}             <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
