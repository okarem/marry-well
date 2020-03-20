import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';
import ProgressBar from '../../components/progressBar/progressBar';
import './Guests.css';
import CircularDeterminate from '../../components/Progress/Progress';

const Guests = () => {
  const [progressBarTitle] = React.useState('المعازيم');
  const [progressBarImage] = React.useState('./img/guests.png');

  const [guestsDataState, setGuestsDataState] = React.useState({
    columns: [
      {
        title: 'المجموعة',
        field: 'status',
        lookup: { 1: 'عائلته', 2: 'اعزب', 3: 'خاطب' }
      },
      { title: ' الجنس', field: 'gender', lookup: { 1: 'ذكر', 2: 'انثى' } },
      { title: ' البلد', field: 'city' },
      { title: ' الاسم', field: 'name' }
    ]
  });

  React.useEffect(async () => {
    try {
      const isLoggedIn = await axios.get(`${process.env.REACT_APP_API_URL}/ifLoggedIn`, { withCredentials: true });
      if (isLoggedIn.data.status === 'success') {
        const guests = await axios.get(`${process.env.REACT_APP_API_URL}/api/getGuests`, { withCredentials: true });
        setGuestsDataState({ ...guestsDataState, data: guests.data });
      } else {
        window.location = '/';
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (guestsDataState.data === undefined) {
    return <CircularDeterminate />;
  }

  return (
    <div>
      <div>
        <ProgressBar progressBarTitle={progressBarTitle} progressBarImage={progressBarImage} />
      </div>
      <div className="guestsftable">
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
          columns={guestsDataState.columns}
          data={guestsDataState.data}
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
                  .post('http://localhost:5000/api/addGuestsItem', { newData }, { withCredentials: true })
                  .then(res => alert(res.data))
                  .catch(err => err.message);

                setTimeout(() => {
                  resolve();
                  setGuestsDataState(prevGuestsData => {
                    const data = [...prevGuestsData.data];
                    data.push(newData);
                    return { ...prevGuestsData, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                axios
                  .put('http://localhost:5000/api/updateGuestsItem', { newData }, { withCredentials: true })
                  .then(res => alert(res.data))
                  .catch(err => err.message);

                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setGuestsDataState(prevGuestsData => {
                      const data = [...prevGuestsData.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevGuestsData, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                axios
                  .delete('http://localhost:5000/api/deleteGuestsItem', { data: oldData }, { withCredentials: true })
                  .then(res => alert(res.data))
                  .catch(err => err.message);
                setTimeout(() => {
                  resolve();
                  setGuestsDataState(prevGuestsData => {
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
