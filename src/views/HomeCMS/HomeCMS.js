import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { data } from "../../assets/data";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import ReachUs from "../../views/HomeCMS/ReachUs/ReachUs.js";
import TrendingPrograms from "../../views/TrendingPrograms/TrendingPrograms";
import TrendingCountries from "../../views/TrendingCountries/TrendingCountries";
import TrendingInstitutions from "../../views/TrendingInstitutions/TrendingInstitutions";


const styles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "50ch",
    },
    "& .MuiTableCell-root": {
      padding:"1px 10px",
    },
  },
}));



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

const useStyles = makeStyles({
  root: {
   // width: "100%",
    marginLeft:"10px",
    marginRight:"0px",
    marginTop:"10px",
    marginBottom:"10px",
  },
  container: {
  },
});

export default function HomeCMS() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editForm = (data) => {
    console.log(data);
    setdicipline(data.discipline)
    setcountry(data.country)
    setprogram(data.program)
    setprogramTitle(data.programTitle)
    setprogramURL(data.view)
  };
  const classForForm = styles();

  const ErxaheaderColor = "#021c49"
  const [dicipline, setdicipline] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [program, setprogram] = React.useState("");
  const [programTitle, setprogramTitle] = React.useState('')
  const [programURL, setprogramURL] = React.useState('')

  const handleChange = (event) => {
    let name = event.target.name;
    if (name === "discipline") {
      this.setState({ discipline: event.target.name });
      console.log(this.state.text);
      setdicipline(event.target.value);
    } else if (name === "country") {
      setcountry(event.target.value);
    } else if (name === "program") {
      setprogram(event.target.value);
    }else if(name === "programTitle"){
      setprogramTitle(event.target.value)
    }else if(name === 'programUrl'){
      setprogramURL(event.target.value)
    }
  };

  return (
    <div style={{marginTop:"-30px"}}>
      <CustomTabs
            title="Home CMS:"
            tabs={[
              {
                tabName: "Reach Us",
                tabContent: (
                    <ReachUs />
                )
              },
              {
                tabName: "Trending Programs",
                tabContent: (
                  <TrendingPrograms />
                )
              },
              {
                tabName: "Trending Countries",
                tabContent: (
                  <TrendingCountries />
                )
              },{
                tabName: "Trending Banners",
                tabContent: (
                  <TrendingCountries />
                )
              },
              {
                tabName: "Trending Institutions",
                tabContent: (
                  <TrendingInstitutions />
                )
              }
            ]}
          />




    </div>
  );
}
