import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import ProgressBar from '../../components/progressBar/progressBar';
import './Stuff.css';


const Stuff = () => {
  const [progressBarTitle] = React.useState('الاغراض');
  const [progressBarImage] = React.useState('./img/shopping-bags.png');

  const [stuffData, setStuffData] = React.useState({
    columns: [
      { title: 'المجموعة', field: 'category', lookup: { 1: 'البيت', 2: 'الحفله' } },
      { title: 'اسم الغرض', field: 'itemName' }
    ],
    data: [{ itemName: 'فناجين', category: 1 }]
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
          columns={stuffData.columns}
          data={stuffData.data}
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
                setTimeout(() => {
                  resolve();
                  setStuffData(prevStuffData => {
                    const data = [...prevStuffData.data];
                    data.push(newData);
                    return { ...prevStuffData, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setStuffData(prevStuffData => {
                      const data = [...prevStuffData.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevStuffData, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setStuffData(prevStuffData => {
                    const data = [...prevStuffData.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevStuffData, data };
                  });
                }, 600);
              })
          }}
        />
      </div>
    </div>
  );
};
export default Stuff;
