import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

import './Budget.css';

const Budget = () => {
  const [budgetDataSource, setBudgetDataSource] = React.useState([]);
  const [budgetDataState, setBudgetDataState] = React.useState({
    columns: [
      { title: 'المجموعة', field: 'category', lookup: { 1: 'اغراض', 2: 'عاملين' } },
      { title: 'السعر', field: 'price', type: 'currency' },
      { title: 'الكمية', field: 'quantity', type: 'numeric' },
      { title: 'اسم الغرض', field: 'itemName' }
    ]
  });

  React.useEffect(() => {
    axios
      .get('http://localhost:5000/api/getBudget')
      .then(res => res.data)
      .then(finalRes => {
        setBudgetDataState({ ...budgetDataState, data: finalRes });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="table">
      <MaterialTable
        title="تكاليف المستلزمات"
        localization={{
          header: {
            actions: ''
          },
          toolbar: { searchTooltip: 'بحث', searchPlaceholder: 'بحث' },

          body: {
            emptyDataSourceMessage: 'لا يوجد معطيات',
            addTooltip: 'اضافة',
            deleteTooltip: 'حذف',
            editTooltip: 'تعديل',

            editRow: {
              saveTooltip: 'تأكيد',
              cancelTooltip: 'الغاء',
              deleteText: 'هل انت متأكد من حذف هذا السطر؟'
            }
          }
        }}
        columns={budgetDataState.columns}
        data={budgetDataState.data}
        options={{
          showTitle: false,
          paging: false,
          actionsColumnIndex: -1,
          searchFieldAlignment: 'right',
          searchFieldStyle: { textAlign: 'right' },
          headerStyle: { textAlign: 'right' },
          cellStyle: { textAlign: 'right' }
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              axios
                .post('http://localhost:5000/api/addBudgetItem', { newData })
                .then(res => console.log(res))
                .catch(err => console.log(err));

              setTimeout(() => {
                resolve();
                setBudgetDataState(prevBudgetData => {
                  const data = [...prevBudgetData.data];
                  data.push(newData);
                  return { ...prevBudgetData, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setBudgetDataState(prevBudgetData => {
                    const data = [...prevBudgetData.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevBudgetData, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setBudgetDataState(prevBudgetData => {
                  const data = [...prevBudgetData.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevBudgetData, data };
                });
              }, 600);
            })
        }}
      />
    </div>
  );
};

export default Budget;
