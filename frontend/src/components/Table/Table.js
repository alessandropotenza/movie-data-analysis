import "./Table.css";
import DataTable from "react-data-table-component";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const sortIcon = <ArrowDownward />;

const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

const Table = (props) => {
  const noData = props.data.length === 0;
  const formattedTime = parseFloat(props.time / 1000).toFixed(3);
  const ranIn = `Query ran in ${formattedTime} seconds${
    formattedTime > 10 ? " (Yikes...)" : ""
  }`;

  const customStyles = {
    pagination: {
      style: {
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      },
    },
    header: {
      style: {
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#303030",
      },
    },
    height: {
      style: {
        height: "40vh",
      },
    },
    contextMenu: {
      style: {
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      },
    },
    table: {
      style: noData
        ? {
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            overflow: "hidden",
          }
        : null,
    },
  };
  return (
    <DataTable
      {...props}
      pagination
      paginationRowsPerPageOptions={[10, 100, 250, 500]}
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      theme="dark"
      highlightOnHover
      customStyles={customStyles}
      fixedHeader
      fixedHeaderScrollHeight="60vh"
      pointerOnHover
      subHeader
      subHeaderAlign="left"
      subHeaderComponent={<p className="subheader">{ranIn}</p>}
      onRowClicked={(row) => props.onRowClicked(row)}
    />
  );
};

export default Table;
