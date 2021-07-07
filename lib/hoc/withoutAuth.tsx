import React from "react";
// server cookie validations
import { getServerAuthenticationCookie } from "@lib/cookie";
// redirect
import redirect from "@lib/redirect";

const withoutAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx: any) => {
    let tokenDetails: any = getServerAuthenticationCookie(ctx);

    if (tokenDetails && tokenDetails.user) {
      if (tokenDetails.user.onboard) {
        redirect(ctx, "/admin/dashboard");
        return {};
      } else {
        redirect(ctx, "/");
        return {};
      }
    } else {
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));
      return { ...componentProps, tokenDetails };
    }
  };

  return Wrapper;
};

export default withoutAuth;
