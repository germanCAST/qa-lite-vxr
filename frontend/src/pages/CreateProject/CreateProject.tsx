import React from "react";
import CreateProjectForm from "../../components/CreateProject/CreateProjectForm";

const CreateProject: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto">
      <CreateProjectForm></CreateProjectForm>
    </main>
  );
};

export default CreateProject;
