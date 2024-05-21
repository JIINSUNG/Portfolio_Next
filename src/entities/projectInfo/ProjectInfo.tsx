import React from "react";
import styles from "./ProjectInfo.module.css";

interface ProjectInfo {
  projectId: number;
  projectInfo: any;
}

const ProjectInfo = ({ projectId, projectInfo }: ProjectInfo) => {
  return <div className={styles.info}></div>;
};

export default ProjectInfo;
