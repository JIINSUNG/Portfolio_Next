import React from "react";
import styles from "./ProjectInfo.module.css";

interface ProjectInfo {
  projectId: number;
  projectInfo: any;
}

const ProjectInfo = ({ projectId, projectInfo }: ProjectInfo) => {
  return <section className={styles.section}></section>;
};

export default ProjectInfo;
