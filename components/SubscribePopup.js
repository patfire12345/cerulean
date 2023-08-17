import Popup from "reactjs-popup";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import PopupCSS from "../styles/SubscribePopup.module.css";
import Image from "next/image";

export default function SubscribePopup({ children, EN }) {
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
              <div className={PopupCSS.modaltitle}>{data.subscribe.title}</div>
              <div className={PopupCSS.modaltext}>{data.subscribe.text}</div>
              <div className={PopupCSS.subscribecontainer}>
                <input
                  placeholder={data.subscribe.placeholder}
                  className={PopupCSS.modalinput}
                />
                <div
                  className={PopupCSS.button}
                  onClick={() => {
                    console.log("Subscribed to newsletter!");
                    close();
                  }}
                >
                  {data.subscribe.buttonText}
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
