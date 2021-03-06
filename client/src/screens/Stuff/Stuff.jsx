import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import ProgressBar from '../../components/progressBar/progressBar';
import './Stuff.css';
import CircularDeterminate from '../../components/Progress/Progress';

const Stuff = () => {
  const [progressBarTitle] = React.useState('الاغراض');
  const [progressBarImage] = React.useState('./img/shopping-bags.png');

  const [stuffDataState, setStuffDataState] = React.useState({
    columns: [
      {
        title: 'المجموعة',
        field: 'itemcategory',
        lookup: { 1: 'البيت', 2: 'الحفله' }
      },
      { title: 'اسم الغرض', field: 'itemdesc' }
    ]
  });

  // React.useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/getStuff")
  //     .then(res => res.data)
  //     .then(finalRes => {
  //       setStuffDataState({ ...stuffDataState, data: finalRes });
  //     })
  //     .catch(err => err.message);
  // }, []);
  React.useEffect(async () => {
    try {
      const isLoggedIn = await axios.get(`${process.env.REACT_APP_API_URL}/ifLoggedIn`, { withCredentials: true });
      if (isLoggedIn.data.status === 'success') {
        const stuff = await axios.get(`${process.env.REACT_APP_API_URL}/api/getStuff`, { withCredentials: true });
        setStuffDataState({ ...stuffDataState, data: stuff.data });
      } else {
        window.location = '/';
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (stuffDataState.data === undefined) {
    return <CircularDeterminate />;
  }

  return (
    <div>
      <div>
        <ProgressBar progressBarTitle={progressBarTitle} progressBarImage={progressBarImage} />
      </div>
      <div className="stufftable">
        <MaterialTable
          title="تكاليف المستلزمات"
          localization={{
            header: {
              actions: ''
            },
            toolbar: {
              searchTooltip: 'بحث',
              searchPlaceholder: ' بحث',
              exportTitle: 'csv تحميل ملف '
            },
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
          columns={stuffDataState.columns}
          data={stuffDataState.data}
          options={{
            showTitle: false,
            paging: false,
            actionsColumnIndex: -1,
            searchFieldAlignment: 'right',
            exportButton: true,
            rowStyle: { backgroundColor: '#EEF0F2', color: '#353B3C' },
            searchFieldStyle: { direction: 'rtl' },
            headerStyle: {
              textAlign: 'center',
              backgroundColor: '#353B3C',
              color: '#C6C7C4',
              fontSize: '20px',
              fontWeight: 'bold'
            },
            cellStyle: { textAlign: 'center', fontSize: '18px' },
            padding: 'dense'
          }}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                axios
                  .post('http://localhost:5000/api/addStuffItem', { newData }, { withCredentials: true })
                  .then(res => alert(res.data))
                  .catch(err => err.message);

                setTimeout(() => {
                  resolve();
                  setStuffDataState(prevStuffData => {
                    const data = [...prevStuffData.data];
                    data.push(newData);
                    return { ...prevStuffData, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                axios
                  .put('http://localhost:5000/api/updateStuffItem', { newData }, { withCredentials: true })
                  .then(res => alert(res.data))
                  .catch(err => err.message);

                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setStuffDataState(prevStuffData => {
                      const data = [...prevStuffData.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevStuffData, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                axios
                  .delete(
                    'http://localhost:5000/api/deleteStuffItem',
                    {
                      data: oldData
                    },
                    { withCredentials: true }
                  )
                  .then(res => alert(res.data))
                  .catch(err => err.message);
                setTimeout(() => {
                  resolve();
                  setStuffDataState(prevStuffData => {
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
