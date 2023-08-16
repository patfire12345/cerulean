import Popup from "reactjs-popup";

export default function SubscribePopup({ children }) {
  return (
    <div>
      <Popup trigger={children} modal>
        Hello
      </Popup>
    </div>
  );
}
