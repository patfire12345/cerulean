import { useState } from "react";
import Popup from "reactjs-popup";
import PopupCSS from "../styles/SubscribePopup.module.css";
import Image from "next/image";

export default function SubscribePopup({ children }) {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Popup trigger={children} open={open} modal>
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
                STAY UP TO DATE WITH OUR WORK!
              </div>
              <div className={PopupCSS.modaltext}>
                Want to know what we're up to? Sign up for our email list here!
              </div>
              <div className={PopupCSS.subscribecontainer}>
                <input
                  placeholder="Email address"
                  className={PopupCSS.modalinput}
                />
                <div
                  className={PopupCSS.button}
                  onClick={() => {
                    console.log("Subscribed to newsletter!");
                    close();
                  }}
                >
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
