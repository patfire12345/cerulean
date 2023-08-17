import Popup from "reactjs-popup";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import PopupCSS from "../styles/ConfirmPopup.module.css";
import Image from "next/image";

export default function ExclamationPopup({ children, EN }) {
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
                  src="/exclamation.png"
                  style={{
                    position: "relative",
                    right: "19.5px",
                    top: "19.5px",
                  }}
                />
              </div>
              <div className={PopupCSS.modaltitle}>Hi there,</div>
              <div className={PopupCSS.modaltext}>
                This email address is already subscribed to our newsletter.
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
