import React, { useState } from "react";
import Card from "../../Card";
import Pagination from "./Pagination";

const ProjectViewMobile = props => {
  const [selectedProj, setSelectedProj] = useState(0);

  return (
    <React.Fragment>
      <Pagination 
        data={props.data}
        selected={selectedProj}
      />
    </React.Fragment>
  );
}

export default ProjectViewMobile;