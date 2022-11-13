//styles
import styles from './StatusIcon.module.scss';

//components
import {FaHeartbeat} from "react-icons/fa";
import {GiTombstone} from "react-icons/gi";
import {VscWorkspaceUnknown} from "react-icons/vsc";

interface StatusIconProps {
  status: 'Alive' | 'Dead' | 'unknown';
  className?: string;
}

const StatusIcon: React.FC<StatusIconProps> = ({status, className}) => {
  return (
    <div className={`${styles.statusIcon} ${className ? className : ''}`}>
      {
        status === 'Alive'
        ? <FaHeartbeat color='red' />
        : status === 'Dead'
          ? <GiTombstone />
          : <VscWorkspaceUnknown />
      }
    </div> 
  )
}

export default StatusIcon