import React from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import ProgressBar from '../../components/progressBar/progressBar';
import CircularDeterminate from '../../components/Progress/Progress';
import './Budget.css';

const Budget = () => {
  const [progressBarTitle] = React.useState('تكاليف');
  const [progressBarImage] = React.useState('./img/cost.png');
  const [budgetDataState, setBudgetDataState] = React.useState({
    columns: [
      {
        title: 'المجموعة',
        field: 'category',
        lookup: { 1: 'Drinks', 2: 'عاملين', 3: 'Food', 4: 'Accessories' }
      },
      { title: 'السعر', field: 'price', type: 'currency', currencySetting: { currencyCode: 'ILS' } },
      { title: 'الكمية', field: 'quantity', type: 'numeric' },
      { title: 'اسم الغرض', field: 'item' }
    ]
  });

  React.useEffect(async () => {
    try {
      const isLoggedIn = await axios.get(`${process.env.REACT_APP_API_URL}/ifLoggedIn`, { withCredentials: true });
      if (isLoggedIn.data.status === 'success') {
        const budget = await axios.get(`${process.env.REACT_APP_API_URL}/api/getBudget`, { withCredentials: true });
        setBudgetDataState({ ...budgetDataState, data: budget.data });
      } else {
        window.location = '/';
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (budgetDataState.data === undefined) {
    return <CircularDeterminate />;
  }

  return (
    <div>
      <ProgressBar progressBarTitle={progressBarTitle} progressBarImage={progressBarImage} />

      <div className="budgetTable">
        <MaterialTable
          title=""
          localization={{
            header: { actions: '' },
            toolbar: { searchTooltip: 'بحث', searchPlaceholder: ' بحث', exportTitle: 'csv تحميل ملف ' },
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
            exportButton: true,
            rowStyle: { backgroundColor: '#EEF0F2', color: '#353B3C' },
            searchFieldStyle: { direction: 'rtl' },
            headerStyle: { textAlign: 'center', backgroundColor: '#353B3C', color: '#C6C7C4', fontSize: '20px', fontWeight: 'bold' },
            cellStyle: { textAlign: 'center', fontSize: '16px' },
            padding: 'dense'
          }}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                axios
                  .post('http://localhost:5000/api/addBudgetItem', { newData }, { withCredentials: true })
                  .then(res => alert(res.data))
                  .catch(err => err.message);

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
                axios
                  .put('http://localhost:5000/api/updateBudgetItem', { newData })
                  .then(res => alert(res.data))
                  .catch(err => err.message);
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
                axios
                  .delete('http://localhost:5000/api/deleteBudgetItem', { data: oldData })
                  .then(res => alert(res.data))
                  .catch(err => err.message);
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
    </div>
  );
};

export default Budget;
