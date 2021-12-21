import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const NbosAgGrid = () => {
  const rowData = [
    {
      relationship: 'Relationship 1',
      product: 'Loan',
      sales: 'Oppurtunity',
      revenue: '$4.81 MM',
      date: '1/1/2021',
      details: 'Details',
    },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1655 }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn field="relationship"></AgGridColumn>
        <AgGridColumn field="product"></AgGridColumn>
        <AgGridColumn field="sales"></AgGridColumn>
        <AgGridColumn field="revenue"></AgGridColumn>
        <AgGridColumn field="date"></AgGridColumn>
        <AgGridColumn field="details"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
