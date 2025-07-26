import React from "react";

import TemplateheaderAtom from "../../atoms/template-header/template-header.atom";
import TableMolecule from "../../molecules/table/table.molecule";

const DashboardCategoriesTemplate = () => {
  return (
    <div className={`flex col 32`}>
      <TemplateheaderAtom content="Manage Categories" />
      <TableMolecule />
    </div>
  );
};

export default DashboardCategoriesTemplate;
