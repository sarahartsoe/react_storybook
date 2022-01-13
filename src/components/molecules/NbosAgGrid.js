import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
// import { format } from 'date-fns';

export const NbosAgGrid = ({ opportunitiesDetail, top5, show5 }) => {
  // const dateClosed = new Date('2021-01-26T08:53:59Z');
  // const formattedDate = format(dateClosed, 'YYYY/MM/DD');

  return (
    <div className="ag-theme-material" style={{ height: 400, width: 1655 }}>
      <AgGridReact rowData={show5 ? top5 : opportunitiesDetail.opportunities}>
        <AgGridColumn
          headerName="Relationship"
          sortable={true}
          field="client_name"
        ></AgGridColumn>
        <AgGridColumn
          headerName="Product Type"
          sortable={true}
          field="product_type"
        ></AgGridColumn>
        <AgGridColumn
          headerName="Sales Stage"
          sortable={true}
          field="sales_stage"
        ></AgGridColumn>
        <AgGridColumn
          headerName="Revenue"
          field="revenue"
          sort="desc"
          sortable={true}
        ></AgGridColumn>
        <AgGridColumn
          headerName="Date Closed"
          sortable={true}
          field="date_closed"
        ></AgGridColumn>
        <AgGridColumn
          headerName="Details"
          sortable={true}
          field="details"
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
