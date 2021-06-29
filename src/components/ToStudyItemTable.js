import React, { useRef, useEffect } from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { data } from "../assets/data";
import "./ToStudyitemTable.css";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";

const useMountEffect = (fun) => useEffect(fun, []);

const styles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const disciplines = [
  {
    value: "Bachelor",
    label: "Bachelor",
  },
  {
    value: "Master",
    label: "Master",
  },
];

const countries = [
  {
    value: "IND",
    label: "IND",
  },
  {
    value: "USA",
    label: "USA",
  },
];

const programs = [
  {
    value: "Computer Science",
    label: "Computer Science",
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    classes,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.numeric ? "right" : "left"}
            padding={column.disablePadding ? "none" : "default"}
            sortDirection={orderBy === column.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : "asc"}
              onClick={createSortHandler(column.id)}
            >
              {column.label}
              {orderBy === column.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};



const columns = [
  { id: "id", label: "ID", minWidth: 50, numeric: true, disablePadding: false },
  {
    id: "discipline",
    numberic: false,
    disablePadding: true,
    label: "Discipline",
    minWidth: 100,
  },
  {
    id: "edit",
    label: "Edit",
    minWidth: 30,
    align: "right",
  },
  {
    id: "country",
    label: "Country",
    minWidth: 50,
    align: "right",
    numberic: false,
    disablePadding: true,
  },
  {
    id: "program",
    label: "Program",
    minWidth: 100,
    align: "right",
    numberic: false,
    disablePadding: true,
  },
  {
    id: "programTitle",
    label: "Program Title",
    minWidth: 170,
    align: "right",
    numberic: false,
    disablePadding: true,
  },
  {
    id: "view",
    label: "View",
    minWidth: 50,
  },
];

function createData(id, discipline, country, program, programTitle) {
  const view = `/view/${id}`;
  return { id, discipline, country, program, programTitle, view };
}

const rows = [];
for (var i in data) {
  rows.push(
    createData(
      data[i].id,
      data[i].discipline,
      data[i].country,
      data[i].program,
      data[i].programTitle
    )
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function ToStudyItemTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editForm = (data) => {
    setViewForm(true);
    executeScroll();
    console.log(data);
    setdicipline(data.discipline);
    setcountry(data.country);
    setprogram(data.program);
    setprogramTitle(data.programTitle);
    setprogramURL(data.view);
  };
  const classForForm = styles();

  const [dicipline, setdicipline] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [program, setprogram] = React.useState("");
  const [programTitle, setprogramTitle] = React.useState("");
  const [programURL, setprogramURL] = React.useState("");
  const [viewForm, setViewForm] = React.useState(false);

  const handleChange = (event) => {
    let name = event.target.name;
    if (name === "discipline") {
      setdicipline(event.target.value);
    } else if (name === "country") {
      setcountry(event.target.value);
    } else if (name === "program") {
      setprogram(event.target.value);
    } else if (name === "programTitle") {
      setprogramTitle(event.target.value);
    } else if (name === "programUrl") {
      setprogramURL(event.target.value);
    }
  };

  const formRef = useRef(null);

  const executeScroll = () => formRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

  useMountEffect(executeScroll);

  const addNew = () => {
    setViewForm(true);
    executeScroll();
    setdicipline("");
    setcountry("");
    setprogram("");
    setprogramTitle("");
    setprogramURL("");
  };

  const saveForm = () => {
    setViewForm(false);
  };
  



  return (
    <>
      <div>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <h3 style={{ color: "#44eb70", textAlign: "left" }}>
              Manage What To Study
            </h3>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              style={{ marginRight: "1rem" }}
              onClick={addNew}
            >
              Add New
            </Button>
            <Link to="/manage">
              <Button variant="contained" color="secondary">
                Second Page
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div>
        <Paper className={classes.root}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer className={classes.container}>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size="medium"
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                rowCount={rows.length}
                onRequestSort={handleRequestSort}
              />
             
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                      >
                        
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "edit" ? (
                                <Button
                                  variant="contained"
                                  onClick={(e) => editForm(row, e)}
                                >
                                  <span class="material-icons">edit</span>
                                </Button>
                              ) : column.id === "view" ? (
                                <Link to={row.view}>View</Link>
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <form
          id="edit_form"
          className={classForForm.root}
          noValidate
          autoComplete="off"
          style={{ marginTop: "4rem" }}
        >
          <table
            width="100%"
            ref={formRef}
            style={
              viewForm == true ? { display: "block" } : { display: "none" }
            }
          >
            <tr>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>
                <label className="form__label">Select Discipline</label>
              </td>
              <td>
                <TextField
                  select
                  value={dicipline}
                  onChange={handleChange}
                  name="discipline"
                >
                  {disciplines.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </td>
            </tr>
            <tr>
              <td>
                <label className="form__label">Select Trending Country</label>
              </td>
              <td>
                <TextField
                  select
                  value={country}
                  onChange={handleChange}
                  name="country"
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </td>
            </tr>
            <tr>
              <td>
                <label className="form__label">Select Trending Program</label>
              </td>
              <td>
                <TextField
                  select
                  value={program}
                  onChange={handleChange}
                  name="program"
                >
                  {programs.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </td>
            </tr>
            <tr>
              <td>
                <label className="form__label">Program Title</label>
              </td>
              <td>
                <TextField
                  id="outlined-basic"
                  className="form__textField"
                  variant="outlined"
                  name="programTitle"
                  value={programTitle}
                  onChange={handleChange}
                  defaultValue="jobin"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="form__label">Program URL</label>
              </td>
              <td>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  name="programUrl"
                  value={programURL}
                  onChange={handleChange}
                  defaultValue="jobin"
                />
              </td>
            </tr>
            <div>
              <Button variant="contained" color="primary" onClick={saveForm}>
                Save Study Items
              </Button>
            </div>
          </table>
        </form>
      </div>
    </>
  );
}
