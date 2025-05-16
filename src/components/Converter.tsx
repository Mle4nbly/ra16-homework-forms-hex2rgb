import { useState } from "react";

export const Converter = () => {
  const [hexValue, setHexValue] = useState("");
  const [rgbValue, setRgbValue] = useState("rgb(255, 255, 255)");
  const [isValid, setValidity] = useState(true);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setHexValue(value);
    e.preventDefault();

    if (value.length === 7) {
      const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

      if (hexRegex.test(value)) {
        const validHex =
          value.length === 7
            ? value
            : `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;

        const r = parseInt(validHex.slice(1, 3), 16);
        const g = parseInt(validHex.slice(3, 5), 16);
        const b = parseInt(validHex.slice(5, 7), 16);

        setRgbValue(`rgb(${r}, ${g}, ${b})`);
        setValidity(true);
      } else {
        setRgbValue("Ошибка!");
        setValidity(false);
      }
    }
  };

  return (
    <form
      className="converter"
      style={{
        backgroundColor: isValid ? rgbValue : "#e94b35",
      }}
    >
      <input
        className="input_field"
        value={hexValue}
        type="text"
        onChange={changeHandler}
        placeholder="Введите hex"
      />
      <div className="rgb_field">{rgbValue ? rgbValue : "Ошибка!"}</div>
    </form>
  );
};
