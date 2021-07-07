import React from "react";
// react bootstrap
import { Toast } from "react-bootstrap";
// material icons
import { Close } from "@styled-icons/evaicons-solid";
// global context provider
import { globalContext } from "@contexts/global";

const ToastAlert = (props: any) => {
  const [globalState, globalDispatch] = React.useContext(globalContext);

  const toggleShowAlert = (value: any) => {
    globalDispatch({ type: "REMOVE_TOAST_ALERT", payload: value });
  };

  React.useEffect(() => {
    if (props.data) {
      setTimeout(
        () => {
          toggleShowAlert(props.data);
        },
        props.data.timer ? props.data.timer * 1000 : 3000
      );
    }
  }, [props.data]);

  return (
    <div>
      <Toast onClose={() => toggleShowAlert(props.data)} style={{ background: "#fff" }}>
        <div
          className="header"
          style={{
            padding: "8px 12px",
            backgroundColor:
              props.data.kind === "success"
                ? "#d4edda"
                : props.data.kind === "warning"
                ? "#fff3cd"
                : "#f8d7da",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <strong
            className={
              `mr-auto ` +
              (props.data.kind && props.data.kind === "success"
                ? "text-success "
                : props.data.kind === "warning"
                ? "text-warning "
                : "text-danger")
            }
            style={{ textTransform: "capitalize" }}
          >
            {props.data.kind}
          </strong>
          <div
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={() => toggleShowAlert(props.data)}
          >
            <Close width="20" />
          </div>
        </div>
        <Toast.Body>{props.data.description}</Toast.Body>
      </Toast>
    </div>
  );
};

export default ToastAlert;
