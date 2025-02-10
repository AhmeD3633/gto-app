import Image from "next/image";
import styles from "./style.module.css";
import editIcon from "@/../public/assets/Images/editIcon.svg";

const ProfileTable = () => {
  const profileData = [
    { label: "Name", value: "Mr. Ahmed Elsherbiny" },
    { label: "Mobile", value: "+201064270737" },
    { label: "E-mail", value: "ahmedelsherbiny899@gmail.com" },
    { label: "Country", value: "Egypt" },
    { label: "Residence", value: "Egypt" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tbody>
            {profileData.map((item, index) => (
              <tr key={index} className={styles.row}>
                <td className={styles.cellLabel}>{item.label}</td>
                <td className={styles.cellValue}>{item.value}</td>
                <td className={styles.cellIcon}>
                  <Image
                    src={editIcon}
                    alt="Edit"
                    width={25}
                    height={25}
                    
                    className={styles.editIcon}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileTable;
