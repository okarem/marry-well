import React from 'react';
import MaterialTable from 'material-table';

import './Budget.css';

const Budget = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'المجموعة', field: 'category', lookup: { 1: 'اغراض', 2: 'عاملين' } },
      { title: 'السعر', field: 'price', type: 'currency' },
      { title: 'الكمية', field: 'quantity', type: 'numeric' },
      { title: 'اسم الغرض', field: 'itemName' }
    ],
    data: [
      { itemName: 'فناجين', quantity: 15, price: 90, category: 1 },
      { itemName: 'قاعة', quantity: 30, price: 4200, category: 2 }
    ]
  });

  return (
    <div className="table">
      <MaterialTable
        title="تكاليف المستلزمات"
        localization={{
          header: {
            actions: ''
          },
          body: {
            editRow: {
              saveTooltip: 'Salvar',
              cancelTooltip: 'Cancelar',
              deleteText: 'Tem certeza que deseja deletar este registro?'
            },
            addTooltip: 'Adicionar',
            deleteTooltip: 'Deletar',
            editTooltip: 'Editar'
          }
        }}
        columns={state.columns}
        data={state.data}
        options={{
          currencySettings: {},
          actionsColumnIndex: -1,
          showTitle: false,
          searchFieldAlignment: 'left',
          paging: false,
          headerStyle: { textAlign: 'right' },
          cellStyle: { textAlign: 'right' }
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
      />
    </div>
  );
};

export default Budget;
