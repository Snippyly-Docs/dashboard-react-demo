
import styles from './Navbar.module.css';

import CalendarIcon from '../../icons/calendar.svg';
import DownloadIcon from '../../icons/download.svg';
import PieIcon from '../../icons/pie.svg';
import ImgIcon from '../../icons/img.svg';
import LightningIcon from '../../icons/lightning.svg';
import SettingsIcon from '../../icons/settings.svg';

const Navbar = (props: any) => {

  return (
    <>
      <div className={styles['top-part']}>
        <img src={props.user.photoUrl} className={styles['avatar']} />
        <img src={CalendarIcon} />
        <img src={DownloadIcon} />
        <img src={LightningIcon} />
        <img src={PieIcon} />
        <img src={ImgIcon} />
      </div>
      <div className={styles['bottom-part']}>
        <img src={SettingsIcon} />
      </div>
    </>
  );

}

export default Navbar;