import React from "react";
// next imports
import Link from "next/link";
import { withRouter } from "next/router";
import { Children } from "react";

const PreFetchLink = withRouter(({ router, children, ...props }: any) => (
  <Link {...props}>
    <a
      target={props.target ? props.target : "_self"}
      className={
        props.className + (router.pathname && router.pathname.includes(props.href) ? ` active` : ``)
      }
    >
      {React.cloneElement(Children.only(children), {
        onMouseEnter: () => {
          router.prefetch(props.href);
        },
      })}
    </a>
  </Link>
));

export default PreFetchLink;
