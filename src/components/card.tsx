import * as React from "react";

type CardProps = {
  title: string;
  subtitle: string;
  body: React.ReactNode;
  footer: React.ReactNode;
};

const Card = (props: CardProps) => {
  const { title, subtitle, body, footer } = props;

  return (
    <div className="card border-solid">
      <h5>{title}</h5>
      <p>{subtitle}</p>
      <p>{body}</p>
      <p>{footer}</p>
    </div>
  );
};

export default Card;
