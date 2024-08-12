import React from "react";

type Props = {
  title: string;
  children: React.JSX.Element;
  id: string;
};
export const PageSection = (props: Props) => {
  return (
    <div
      className="w-full"
      id={props.id}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h5 className="">{props.title}</h5>
      <div> {props.children}</div>
    </div>
  );
};
