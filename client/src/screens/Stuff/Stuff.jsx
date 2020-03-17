import React from "react";
import MaterialTable from "material-table";
import axios from "axios";
import ProgressBar from "../../components/progressBar/progressBar";
import "./Stuff.css";
import CircularDeterminate from "../../components/Progress/Progress";

const Stuff = () => {
  const [progressBarTitle] = React.useState("الاغراض");
  const [progressBarImage] = React.useState("./img/shopping-bags.png");

  const [stuffDataState, setStuffDataState] = React.useState({
    columns: [
      {
        title: "المجموعة",
        field: "category",
        lookup: { 1: "البيت", 2: "الحفله" }
      },
      { title: "اسم الغرض", field: "itemName" }
    ],
    data: [{ itemName: "فناجين", category: 1 }]
  });

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/getStuff")
      .then(res => res.data)
      .then(finalRes => {
        setStuffDataState({ ...stuffDataState, data: finalRes });
      })
      .catch(err => err.message);
  }, []);

  if (stuffDataState.data === undefined) {
    return <CircularDeterminate />;
  }

  return (
    <div>
      <div>
        <ProgressBar
          progressBarTitle={progressBarTitle}
          progressBarImage={progressBarImage}
        />
      </div>
      <div className="table">
        <MaterialTable
          title="تكاليف المستلزمات"
          localization={{
            header: {
              actions: ""
            },
            toolbar: { searchTooltip: 'بحث', searchPlaceholder: ' بحث', 
            exportTitle: 'csv تحميل ملف ' },
            body: {
              emptyDataSourceMessage: "لا يوجد معطيات",
              addTooltip: "اضافة",
              deleteTooltip: "حذف",
              editTooltip: "تعديل",

              editRow: {
                saveTooltip: "تأكيد",
                cancelTooltip: "الغاء",
                deleteText: "هل انت متأكد من حذف هذا السطر؟"
              }
            }
          }}
          columns={stuffDataState.columns}
          data={stuffDataState.data}
          options={{
            showTitle: false,
            paging: false,
            actionsColumnIndex: -1,
            searchFieldAlignment: "right",
            exportButton: true,
            rowStyle: { backgroundColor: "#EEF0F2", color: "#353B3C" },
            searchFieldStyle: { direction: "rtl" },
            headerStyle: {
              textAlign: "center",
              backgroundColor: "#353B3C",
              color: "#C6C7C4",
              fontSize: "20px",
              fontWeight: "bold"
            },
            cellStyle: { textAlign: "center", fontSize: "16px" },
            padding: "dense"
          }}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                axios
                  .post('http://localhost:5000/api/addStuffItem', { newData })
                  
                  .then(() => {
                    return;
                  })
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
