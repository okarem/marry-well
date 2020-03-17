import React from "react";
import "./Guests.css";
import MaterialTable from "material-table";
import ProgressBar from "../../components/progressBar/progressBar";
const Guests = () => {
  const [progressBarTitle] = React.useState("المعازيم");
  const [progressBarImage] = React.useState("./img/guests.png");
  const [guestsData, setGuestsData] = React.useState({
    columns: [
      {
        title: "المجموعة",
        field: "category",
        lookup: { 1: "اعزب", 2: "متزوج", 3: "خاطب" }
      },
      { title: "الفئه ", field: "to", lookup: { 1: "ذكر", 2: "انثى" } },
      { title: "البلد", field: "city" },
      { title: "الاسم ", field: "Name" }
    ],
    data: [{ Name: "فاطمه", to: 2, category: 3, city: "يافه" }]
  });

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
          title="قائمة المعازيم"
          localization={{
            header: {
              actions: ""
            },
            toolbar: { searchTooltip: "بحث", searchPlaceholder: "بحث" },

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
          columns={guestsData.columns}
          data={guestsData.data}
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
        <img className="cardImage" src="./img/card.png" alt="card"></img>
      </div>
    </div>
  );
};
export default Guests;


/*
import "./Guests.css";
import React from "react";
import MaterialTable from "material-table";
import axios from "axios";
import ProgressBar from "../../components/progressBar/progressBar";
import CircularDeterminate from "../../components/Progress/Progress";

const Guests = () => {
  const [progressBarTitle] = React.useState("المعازيم");
  const [progressBarImage] = React.useState("./img/guests.png");
  const [guestsDataState, setGuestsDataState] = React.useState({
    columns: [
      {
        title: "المجموعة",
        field: "category",
        lookup: { 1: "اعزب", 2: "متزوج", 3: "خاطب" }
      },
      { title: "الفئه ", field: "to", lookup: { 1: "ذكر", 2: "انثى" } },
      { title: "البلد", field: "city" },
      { title: "الاسم ", field: "Name" }
    ],
    data: [{ Name: "فاطمه", to: 2, category: 3, city: "يافه" }]
  });

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/getguests")
      .then(res => res.data)
      .then(finalRes => {
        setguestsDataState({ ...guestsDataState, data: finalRes });
      })
      .catch(err => err.message);
  }, []);

  if (guestsDataState.data === undefined) {
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
      <div className="gueststable">
        <MaterialTable
          title="قائمة المعازيم"
          localization={{
            header: {
              actions: ""
            },
            toolbar: { searchTooltip: "بحث", searchPlaceholder: "بحث" },

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
          columns={guestsData.columns}
          data={guestsData.data}
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
                  .post("http://localhost:5000/api/addGuestsItem", { newData })
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
                  .put("http://localhost:5000/api/updateGuestsItem", { newData })
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
                  .delete("http://localhost:5000/api/deleteGuestsItem", {
                    data: oldData
                  })
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





  
*/