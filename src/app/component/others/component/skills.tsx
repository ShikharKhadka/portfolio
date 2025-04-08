import styles from "../others.module.css";
const SkillComponent = ({
  label,
  className,
  percent,
}: {
  label: string;
  className: string | undefined;
  percent: string;
}) => {
  return (
    <div style={{ display: "flex" }}>
      <div className={className}>
        <div className={styles.text}> {label}</div>
      </div>
      <div
        className={`${"h1"} ${"vcenter"} ${styles.perecentext}`}
      >{`${percent}%`}</div>
    </div>
  );
};
export default SkillComponent;
