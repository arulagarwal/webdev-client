export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  const homeName = "Bag End";
  const bilboAge = 111;
  const isHomeName = typeof homeName;
  const isBilboAge = typeof bilboAge;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  const isSampleCount = typeof sampleCount;
  const isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      homeName = {homeName}                       <br />
      bilboAge = {bilboAge}                       <br />
      isHomeName = {isHomeName}                   <br />
      isBilboAge = {isBilboAge}                   <br />
      sampleCount = {sampleCount}                 <br />
      isSampleCount = {isSampleCount}             <br />
      sampleLabel = {sampleLabel}                 <br />
      isSampleLabel = {isSampleLabel}
      <hr />
    </div>
  );
}
