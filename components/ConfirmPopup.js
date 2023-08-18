import Popup from "reactjs-popup";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import PopupCSS from "../styles/ConfirmPopup.module.css";
import Image from "next/image";

export default function ConfirmPopup({ children, EN }) {
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
              <div className={PopupCSS.imagecontainer}>
                <Image width={176} height={115} src="/mail.png" />
                <Image
                  width={39}
                  height={39}
                  src="/checkmark.png"
                  className={PopupCSS.image}
                />
              </div>
              <div className={PopupCSS.modaltitle}>
                {data.modals.confirm.title}
              </div>
              <div className={PopupCSS.modaltext}>
                {data.modals.confirm.text}
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
