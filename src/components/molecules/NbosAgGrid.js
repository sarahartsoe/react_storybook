import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
// import { format } from 'date-fns';
import { formatCurrency } from '../../utilities/utilities.js';

export const NbosAgGrid = ({ opportunitiesDetail }) => {
  // const dateClosed = new Date('2021-01-26T08:53:59Z');
  // const formattedDate = format(dateClosed, 'YYYY/MM/DD');

  const gridOptions = {
    domLayout: 'autoHeight',
  };

  const defaultColDef = {
    resizable: true,
    flex: 1,
  };

  return (
    <div
      className="ag-theme-material"
      style={{ height: 300, width: '100%' }}
      gridOptions={gridOptions}
    >
      <AgGridReact rowData={opportunitiesDetail} defaultColDef={defaultColDef}>
        <AgGridColumn
          headerName="Relationship"
          sortable={true}
          field="client_name"
          style={{ width: '99.9%' }}
        ></AgGridColumn>
        <AgGridColumn
          headerName="Product Type"
          sortable={true}
          field="product_type"
          style={{ width: '99.9%' }}
        ></AgGridColumn>
        <AgGridColumn
          headerName="Sales Stage"
          sortable={true}
          field="sales_stage"
          style={{ width: '99.9%' }}
        ></AgGridColumn>
        <AgGridColumn
          headerName="Revenue"
          field="revenue"
          sort="desc"
          sortable={true}
          style={{ width: '99.9%' }}
          valueFormatter={params => {
            return formatCurrency(params.value.toString());
          }}
        ></AgGridColumn>
        <AgGridColumn
          headerName="Date Closed"
          sortable={true}
          field="date_closed"
          style={{ width: '99.9%' }}
        ></AgGridColumn>
        <AgGridColumn
          headerName=""
          sortable={true}
          field="details"
          style={{ width: '99.9%' }}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
