import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { format } from 'date-fns';
import { formatCurrency } from '../../utilities/utilities.js';
import './metrics.css';

export const NbosAgGrid = ({ opportunitiesDetail }) => {
  const formatter = a => {
    const date =
      a.value !== undefined ? format(new Date(a.value), 'yyyy/MM/dd') : '';
    return date;
  };

  const gridOptions = {
    domLayout: 'autoHeight',
  };

  const defaultColDef = {
    resizable: true,
    flex: 1,
    type: 'leftAligned',
    headerClass: 'header-black',
  };

  const cellStyle = {
    textAlign: 'left',
  };

  return (
    <div
      className="ag-theme-material"
      style={{ height: 363, width: '100%' }}
      gridOptions={gridOptions}
    >
      <AgGridReact
        pagination={true}
        paginationAutoPageSize={true}
        rowData={opportunitiesDetail}
        defaultColDef={defaultColDef}
        rowHeight={50}
      >
        <AgGridColumn
          headerName="Relationship"
          sortable={true}
          field="client_name"
          style={{ width: '99.9%' }}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          headerName="Product Type"
          sortable={true}
          field="product_type"
          style={{ width: '99.9%', align: 'left' }}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          headerName="Sales Stage"
          sortable={true}
          field="sales_stage"
          style={{ width: '99.9%' }}
          cellStyle={cellStyle}
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
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          headerName="Date Closed"
          sortable={true}
          field="date_closed"
          style={{ width: '99.9%' }}
          valueFormatter={formatter}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          headerName=""
          sortable={true}
          field="details"
          style={{ width: '99.9%', color: 'blue' }}
          cellStyle={cellStyle}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
