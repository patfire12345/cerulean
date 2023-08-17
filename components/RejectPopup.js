import Popup from "reactjs-popup";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import PopupCSS from "../styles/ConfirmPopup.module.css";
import Image from "next/image";

export default function RejectPopup({ children, EN }) {
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
                className={PopupCSS.Xreject}
              />
              <div className={PopupCSS.imagecontainer}>
                <Image width={176} height={115} src="/mail.png" />
                <Image
                  width={39}
                  height={39}
                  src="/reject.png"
                  className={PopupCSS.image}
                />
              </div>
              <div className={PopupCSS.modaltitle}>Oops...</div>
              <div className={PopupCSS.modaltext}>
                We cannot find your email.
              </div>
              <div
                className={PopupCSS.button}
                onClick={() => {
                  close();
                }}
              >
                Try again
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
