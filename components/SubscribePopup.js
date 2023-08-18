import Popup from "reactjs-popup";
import ConfirmPopup from "./ConfirmPopup";
import RejectPopup from "./RejectPopup";
import ExclamationPopup from "./ExclamationPopup";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import PopupCSS from "../styles/SubscribePopup.module.css";
import Image from "next/image";
import { useState } from "react";

export default function SubscribePopup({ children, EN }) {
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const [email, setEmail] = useState("");

  const onChange = (event) => {
    setEmail(event.target.value);
  };

  const modalSelect = () => {
    if (isEmail(email)) {
      return (
        <ConfirmPopup>
          <div
            className={PopupCSS.button}
            onClick={() => {
              console.log("Subscribed to newsletter!");
            }}
          >
            {data.modals.subscribe.buttonText}
          </div>
        </ConfirmPopup>
      );
    } else {
      return (
        <RejectPopup>
          <div
            className={PopupCSS.button}
            onClick={() => {
              console.log("Subscribed to newsletter!");
            }}
          >
            {data.modals.subscribe.buttonText}
          </div>
        </RejectPopup>
      );
    }
  };

  const data = EN ? dataEN : dataVN;
  return (
    <div>
      <Popup trigger={() => children} modal>
        {(close) => (
          <div className={PopupCSS.backgroundcontainer}>
            <div className={PopupCSS.modalcontainer}>
              <Image
                onClick={() => {
                  close();
                }}
                src="/X.png"
                width={15}
                height={17}
                className={PopupCSS.X}
              />
              <div className={PopupCSS.modaltitle}>
                {data.modals.subscribe.title}
              </div>
              <div className={PopupCSS.modaltext}>
                {data.modals.subscribe.text}
              </div>
              <div className={PopupCSS.subscribecontainer}>
                <input
                  placeholder={data.modals.subscribe.placeholder}
                  className={PopupCSS.modalinput}
                  name="email"
                  onChange={onChange}
                />
                {modalSelect()}
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
