import Barcode from "react-barcode";

export function DefaultList() {
  return (
    <ul>
      <li>
        <Barcode value={"exemplo-de-codigo"}></Barcode>
      </li>
    </ul>
  );
}
