import React from 'react';
import MaterialTable from 'material-table';

import './Budget.css';

const Budget = () => {
  const [budgetData, setBudgetData] = React.useState({
    columns: [
      { title: 'المجموعة', field: 'category', lookup: { 1: 'اغراض', 2: 'عاملين' } },
      { title: 'السعر', field: 'price', type: 'currency' },
      { title: 'الكمية', field: 'quantity', type: 'numeric' },
      { title: 'اسم الغرض', field: 'itemName' }
    ],
    data: [
      { itemName: 'فناجين', quantity: 15, price: 90, category: 1 },
      { itemName: 'قاعة', quantity: 30, price: 4200, category: 2 },
      { itemName: 'كنبات', quantity: 20, price: 130, category: 1 },
      { itemName: 'ملابس', quantity: 45, price: 90, category: 1 },
      { itemName: 'ادوات مطبخ', quantity: 15, price: 90, category: 1 }
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
        columns={budgetData.columns}
        data={budgetData.data}
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
              setTimeout(() => {
                resolve();
                setBudgetData(prevBudgetData => {
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
                  setBudgetData(prevBudgetData => {
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
                setBudgetData(prevBudgetData => {
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
