import { useContext, useState } from "react";
// next imports
import Link from "next/link";
import { useRouter } from "next/router";
// next seo
import { NextSeo } from "next-seo";
// react bootstrap
import { Button, Form } from "react-bootstrap";
// api services
import { SignUp } from "lib/services/AuthenticationService";
// cookie services
import { setAuthenticationToken } from "lib/cookie";
// hoc
import withoutAuth from "lib/hoc/withoutAuth";
// global context provider
import { globalContext } from "@contexts/global";

const SignUpPage = () => {
  const [globalState, globalDispatch] = useContext(globalContext);

  const title = "Sign-Up | Level";
  const router = useRouter();

  const [buttonLoader, setButtonLoader] = useState<any>(false);
  const [formDetails, setFormDetails] = useState<any>({
    email: "",
    password: "",
  });
  const handleFormDetails = (key: any, value: any) => {
    setFormDetails({ ...formDetails, [key]: value });
  };

  const formSubmit = (event: any) => {
    event.preventDefault();
    setButtonLoader(true);
    const payload = {
      email: formDetails.email,
      password: formDetails.password,
    };
    SignUp(payload)
      .then((response) => {
        setCookie(response);
        setButtonLoader(false);
        globalDispatch({
          type: "ADD_TOAST_ALERT",
          payload: {
            kind: "success",
            description: "User created successfully.",
          },
        });
      })
      .catch((error) => {
        console.log(error);
        setButtonLoader(false);
        if (error && error.detail) {
          globalDispatch({
            type: "ADD_TOAST_ALERT",
            payload: { kind: "warning", description: error.detail },
          });
        } else {
          globalDispatch({
            type: "ADD_TOAST_ALERT",
            payload: { kind: "warning", description: "Error." },
          });
        }
      });
  };

  const setCookie = (tokenDetails: any) => {
    setAuthenticationToken(tokenDetails);
    router.push("/");
  };

  return (
    <>
      <NextSeo title={title} />
      <div style={{ height: "85vh" }}>
        <div className="container h-100">
          <div className="row justify-content-center h-100">
            <div className="col-md-6 align-self-center">
              <img className="img-fluid" src="/authenticate.svg" width="400" />
            </div>

            <div className="col-md-6 align-self-center">
              <div className="card border-0 shadow px-4 py-4">
                <div className="card-body">
                  <h5 className="mb-3">Create Your Free Account</h5>
                  <Form onSubmit={formSubmit}>
                    <Form.Group controlId="signup-email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        required
                        value={formDetails.email}
                        onChange={(e) =>
                          handleFormDetails("email", e.target.value)
                        }
                      />
                    </Form.Group>

                    <Form.Group controlId="singup-password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={formDetails.password}
                        onChange={(e) =>
                          handleFormDetails("password", e.target.value)
                        }
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="mt-3 w-100 text-white"
                    >
                      {buttonLoader ? "creating account ..." : "Create Account"}
                    </Button>
                  </Form>
                </div>
                <div className="card-footer bg-white text-muted mt-2">
                  <small>
                    We'll never share your email with anyone else. By continuing
                    you accept the Terms of Use and Privacy Policy.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withoutAuth(SignUpPage);
