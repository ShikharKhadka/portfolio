import styles from "../others.module.css";
const SkillComponent = ({
  label,
  className,
  percent,
  animation,
}: {
  label: string;
  className: string | undefined;
  percent: string;
  animation: boolean;
}) => {
  return (
    animation && (
      <div style={{ display: "flex" }}>
        <div className={className}>
          <div className={animation ? styles.text : ""}> {label}</div>
        </div>
        <div
          className={`${"h1"} ${"vcenter"} ${
            animation ? styles.perecentext : ""
          }`}
        >{`${percent}%`}</div>
      </div>
    )
  );
};
export default SkillComponent;
