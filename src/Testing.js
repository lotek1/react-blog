// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import "@testing-library/jest-dom";

function Testing() {
  const navn = "Dev-JJ";
  const likes = "121302342";
  const link = "https://www.dedypeskoger.no";

  return (
    <div className="App">
      <h1> {navn}</h1>
      <p>Har fått {likes} hearts</p>
      <p>
        Her er en link til <a href={link}>De Dype Skoger</a>
      </p>
      <p> {10} </p>
      <p>{"Hello Ninjagos"}</p>
      <p> {[1, 3, 5, 7]} </p>
      <p> {Math.random() * 10}</p>
    </div>
  );
}
export default Testing;
