import React from 'react';
import './Guests.css';
import MaterialTable from 'material-table';
import ProgressBar from '../../components/progressBar/progressBar';
const Guests = () => {
  const [progressBarTitle] = React.useState('المعازيم');
  const [progressBarImage] = React.useState('./img/guests.png');
  const [guestsData, setGuestsData] = React.useState({
    columns: [
      { title: 'المجموعة', field: 'category', lookup: { 1: 'اعزب', 2: 'متزوج', 3: 'خاطب'  } },
      { title: 'الفئه ', field: 'to', lookup: { 1: 'ذكر', 2: 'انثى'  } },
      { title: 'البلد', field: 'city' },
      { title: 'الاسم ', field: 'Name' },
      


    ],
    data: [{ Name: 'فاطمه', to: 2 , category: 3, city: 'يافه'}]
  });

  return (
    <div>
      <div>
        <ProgressBar progressBarTitle={progressBarTitle} progressBarImage={progressBarImage} />
      </div>
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
          columns={guestsData.columns}
          data={guestsData.data}
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
                  setGuestsData(prevGuestsData => {
                    const data = [...prevGuestsData.data];
                    data.push(newData);
                    return { ...prevGuestsData, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setGuestsData(prevGuestsData => {
                      const data = [...prevGuestsData.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevGuestsData, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setGuestsData(prevGuestsData => {
                    const data = [...prevGuestsData.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevGuestsData, data };
                  });
                }, 600);
              })
          }}
        />
      </div>
    </div>
  );
};
export default Guests;
