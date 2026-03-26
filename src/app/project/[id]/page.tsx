import { ProjectInfo } from "@/entities/projectInfo";
import { ProjectInfoSection } from "@/pages-flat/projectInfo";
import projectDetailData from "@/shared/assets/projectDetail";
import React from "react";
import { notFound } from "next/navigation";

interface IProject {
  params: {
    id: string;
  };
}

const Page = async ({ params }: IProject) => {
  const projectId = parseInt(params.id);
  const projectInfo = projectDetailData[projectId - 1];

  if (!projectInfo) {
    notFound();
  }

  return <ProjectInfoSection projectInfo={projectInfo} />;
};

export default Page;
