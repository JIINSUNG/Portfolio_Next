import { ProjectInfo } from "@/entities/projectInfo";
import { ProjectInfoSection } from "@/pages-flat/projectInfo";
import React from "react";

interface IProject {
  params: {
    id: number;
  };
}

const Page = async ({ params }: IProject) => {
  const projectInfo = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/project/${params.id}`,
    { cache: "no-store" }
  ).then((res) => res.json());
  console.log(projectInfo);
  return <ProjectInfoSection projectInfo={projectInfo} />;
};

export default Page;
