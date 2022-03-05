import { HowItWorksData } from "../../lib/data";

const HowCard = () => {
  const item = HowItWorksData.map((item, index) => {
    const { Icon, title, content } = item;

    return (
      <div key={index}>
        <Icon />
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  });
  return <div>{item}</div>;
};

export default HowCard;
