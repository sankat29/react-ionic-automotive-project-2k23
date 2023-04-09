import React from "react";

type H1Response = (props: { title: string }) => JSX.Element;

// function capitalizeH1(payload: string) {
//   return payload.trim().toUpperCase();
// }

const capitalizeH1 = (payload: string) => payload.trim().toUpperCase();

const H1: H1Response = (props: { title: string }) => {
  return (
    <React.Fragment>
      <h1>{capitalizeH1(props.title)}</h1>
    </React.Fragment>
  );
};
// function H1(props: { title: string }): JSX.Element {
//   return (
//     <React.Fragment>
//       <h1>{capitalizeH1(props.title)}</h1>
//     </React.Fragment>
//   );
// }

export default H1;
