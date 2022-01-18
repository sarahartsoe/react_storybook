import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { format } from 'date-fns';
import { formatCurrency } from '../../utilities/utilities.js';

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
  };

  const cellStyle = {
    textAlign: 'left',
  };

  return (
    <div
      className="ag-theme-material"
      style={{ height: 300, width: '100%' }}
      gridOptions={gridOptions}
    >
      <AgGridReact rowData={opportunitiesDetail} defaultColDef={defaultColDef}>
        <AgGridColumn
          className="tw-place-content-start tw-text-left rowAlign"
          headerName="Relationship"
          sortable={true}
          field="client_name"
          style={{ width: '99.9%' }}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          className="tw-place-content-start tw-text-left rowAlign"
          headerName="Product Type"
          sortable={true}
          field="product_type"
          style={{ width: '99.9%', align: 'left' }}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          className="tw-place-content-start tw-text-left rowAlign"
          headerName="Sales Stage"
          sortable={true}
          field="sales_stage"
          style={{ width: '99.9%' }}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          className="tw-place-content-start tw-text-left rowAlign"
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
          className="tw-place-content-start tw-text-left rowAlign"
          headerName="Date Closed"
          sortable={true}
          field="date_closed"
          style={{ width: '99.9%' }}
          valueFormatter={formatter}
          cellStyle={cellStyle}
        ></AgGridColumn>
        <AgGridColumn
          className="tw-place-content-start tw-text-left rowAlign"
          headerName=""
          sortable={true}
          field="details"
          style={{ width: '99.9%' }}
          cellStyle={cellStyle}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
