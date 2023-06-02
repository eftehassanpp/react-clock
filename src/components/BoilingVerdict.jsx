export default function BoilingVerdict({ temperature = 0 }) {
  return temperature >= 100 ? (
    <p>Water Would Boil</p>
  ) : (
    <p>Water Would Not Boil</p>
  );
}
