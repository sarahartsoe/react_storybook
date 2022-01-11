import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { format } from 'date-fns';

export const NbosAgGrid = ({ opportunitiesDetail }) => {
  // const dateClosed = new Date('2021-01-26T08:53:59Z');
  // const formattedDate = format(dateClosed, 'YYYY/MM/DD');

  // colDefs = [
  //   { field: 'relationship' },
  //   { field: 'productType' },
  //   { field: 'salesStage' },
  //   { field: 'revenue' },
  //   { field: 'dateClosed' },
  //   { field: 'details' },
  // ];

  // const rowData = [
  //   {
  //     headerName: 'Relationship',
  //     relationship: opportunitiesDetail.clientName,
  //     productType: opportunitiesDetail.productType,
  //     salesStage: opportunitiesDetail.salesStage,
  //     revenue: opportunitiesDetail.revenue,
  //     dateClosed: opportunitiesDetail.formattedDate,
  //     details: 'Details',
  //   },
  //   {
  //     headerName: 'Relationship',
  //     relationship: opportunitiesDetail.clientName,
  //     productType: opportunitiesDetail.productType,
  //     salesStage: opportunitiesDetail.salesStage,
  //     revenue: opportunitiesDetail.revenue,
  //     dateClosed: opportunitiesDetail.dateClosed,
  //     details: 'Details',
  //   },
  //   {
  //     headerName: 'Relationship',
  //     relationship: opportunitiesDetail.clientName,
  //     productType: opportunitiesDetail.productType,
  //     salesStage: opportunitiesDetail.salesStage,
  //     revenue: opportunitiesDetail.revenue,
  //     dateClosed: opportunitiesDetail.dateClosed,
  //     details: 'Details',
  //   },
  //   {
  //     headerName: 'Relationship',
  //     relationship: opportunitiesDetail.clientName,
  //     productType: opportunitiesDetail.productType,
  //     salesStage: opportunitiesDetail.salesStage,
  //     revenue: opportunitiesDetail.revenue,
  //     dateClosed: opportunitiesDetail.dateClosed,
  //     details: 'Details',
  //   },
  //   {
  //     headerName: 'Relationship',
  //     relationship: opportunitiesDetail.clientName,
  //     productType: opportunitiesDetail.productType,
  //     salesStage: opportunitiesDetail.salesStage,
  //     revenue: opportunitiesDetail.revenue,
  //     dateClosed: opportunitiesDetail.dateClosed,
  //     details: 'Details',
  //   },
  // ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1655 }}>
      <AgGridReact rowData={opportunitiesDetail.oppurtunities}>
        <AgGridColumn headerName="Relationship" sortable={true}></AgGridColumn>
        <AgGridColumn headerName="Product Type" sortable={true}></AgGridColumn>
        <AgGridColumn headerName="Sales Stage" sortable={true}></AgGridColumn>
        <AgGridColumn
          headerName="Revenue"
          sore="desc"
          sortable={true}
        ></AgGridColumn>
        <AgGridColumn headerName="Date Closed" sortable={true}></AgGridColumn>
        <AgGridColumn headerName="Details" sortable={true}></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
