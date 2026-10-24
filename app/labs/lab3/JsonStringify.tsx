export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const hobbit = { name: "Bilbo", age: 111 };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
      hobbit = {JSON.stringify(hobbit)} <br />
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}
      <hr />
    </div>
  );
}
