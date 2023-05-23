import { ReactComponent as OpenArrow } from "../../assets/open_arrow.svg"
import styles from './PackageCard.module.css';
function Package({ name, version }) {
  return (
    <div className={styles.package}>
      <div className={styles.package_card}>{name}</div>
      <div className={styles.package_content}>
        <div className={styles.package_version}>{version}</div>
        <OpenArrow />
      </div>
    </div>
  );
}

export default Package;
