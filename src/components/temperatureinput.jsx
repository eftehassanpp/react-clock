const scaleName = {
  f: 'Fharenheit',
  c: 'Celcius',
};
export default function TemperatureInput({
  temperatureValue,
  scale,
  onChangeHandler,
}) {
  return (
    <fieldset>
      <legend>Input Temperature value in {scaleName[scale]}</legend>
      <input
        type="number"
        value={temperatureValue}
        onChange={(e) => onChangeHandler(e, scale)}
      />
    </fieldset>
  );
}
