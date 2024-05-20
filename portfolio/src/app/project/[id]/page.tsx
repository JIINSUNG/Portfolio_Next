import { ProjectInfo } from "@/entities/projectInfo";
import React from "react";

interface IProject {
  params: {
    id: number;
  };
}

const Page = async ({ params }: IProject) => {
  const projectInfo = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/project`
  ).then((res) => res.json());

  return (
    <>
      <ProjectInfo projectId={params.id} projectInfo={projectInfo} />
    </>
  );
};

export default Page;
