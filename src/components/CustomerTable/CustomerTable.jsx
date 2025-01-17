import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { tableCellClasses } from "@mui/material/TableCell";
import s from "./admin.module.css";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Pagination } from "@mui/material";
import {fetchallCustomers} from "../api/customerTable";
import { notificationHandler } from "../../utils/Notification";
import Loder from "../../Loder/Loder";
import { BiSearch } from "react-icons/bi";
import DataNotFound from "../ErrorPage/DataNotFound";

const CustomerTable = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [allCustomers, setallCustomers] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  const [pageLength, setpageLength] = useState();

// const fetchAllLocationsFunc = async () => {
//     try {
//       const temp = {
//         page: 1,
//         limit: 10,
//         search: "",
//     };
//         let res = await locationList_api(temp);
//         if (res.data.status) {
//           setallLocation(res?.data?.data?.location);
//         } else {
//             console.log("status false!");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };


  useEffect(() => {
    fetchallCustomersFunc();
  }, [pageCount,]);

  async function fetchallCustomersFunc(data) {
    setisLoading(true);
    try {
    //   const temp = {
    //     page: 1,
    //     limit: 10,
    //     search: "",
    // };
      let res = await fetchallCustomers();
      console.log(res, "res")
      if (res?.status==200) {
       setallCustomers(res?.data?.leads)
       setisLoading(false);
      } else {
        setisLoading(false);
        console.log("status false!");
      }

    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  }


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "var(--clr-theme)",
      color: theme.palette.common.white,
      fontWeight: "bold",
      borderRight: "1px solid #fff",
      overflow: "hidden",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border: "none",
      borderLeft: "2px solid #00000011",
      "&:last-child": {
        borderRight: "2px solid #00000011",
      },
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    borderBottom: "2px solid #00000011",
  }));

  // async function deleteuserFunc() {
  //   setisLoading(true);
  //   let temp = {
  //     id: deleteId,
  //   };
  //   try {
  //     let res = await user_delete_api(temp);
  //     if (res.data.status) {
  //       setisLoading(false);
  //       setdeletePopup(false);
  //       fetchallCustomersFunc();
  //       notificationHandler({ type: "success", msg: res.data.message });
  //     } else {
  //       setisLoading(false);
  //       notificationHandler({ type: "danger", msg: res.data.message });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     notificationHandler({ type: "danger", msg: error.message });
  //   }
  // }

  return (
    <div className="">
      <div className="beat_heading">
        <div className={s["user-list-heading"]}>
          <div className="user-list-title">
            <h3>Customer List</h3>
          </div>

          {/* <div className={s["user-list-search"]}>
            <div
              className={s["search-box"]}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span style={{ paddingRight: "0.5rem" }}>
                <BiSearch size={23} />
              </span>
              <input
                type="text"
                spellCheck="false"
                onChange={(e) => {
                  setpageCount(1);
                  setactive(null);
                  setsearch(e.target.value);
                }}
                placeholder="Search users by name..."
              />
            </div>
          </div> */}
        </div>
        {/* <div style={{ display: "flex" }}>
          <div className="search-123">
            <select className="search-inp1" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Filter by Locations</option>
              {
                allLocation?.map((elem, id) => {
                  return (
                    <option key={id} value={elem._id}>{elem?.location}</option>

                  )
                })
              }
            </select>
          </div>
          <div className="search-123">
            <div style={{ display: "flex" }}>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="search-inp1" />
              <input type="date" value={endDate} onChange={(e) => setendDate(e.target.value)} className="search-inp1" />
              <button className="search-inp1" onClick={() => fetchallCustomersFunc()}>Apply</button>
              <button className="search-inp1" style={{ border: "1px solid #fff" }} onClick={() => fetchallCustomersFunc("reset")}>Reset Filter</button>

            </div>
          </div>

        </div> */}
      </div>
      <div className="beat_table">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S. No.</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">
                Name
              </StyledTableCell>
              <StyledTableCell align="center">Phone No.</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">State</StyledTableCell>
              <StyledTableCell align="center">destination Location</StyledTableCell>
              <StyledTableCell align="center">Package</StyledTableCell>
              <StyledTableCell align="center">No. Of Person</StyledTableCell>
              {/* <StyledTableCell align="center">Action</StyledTableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {allCustomers?.map((row, id) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{id + 1} </StyledTableCell>
                <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
                <StyledTableCell>{row.name} </StyledTableCell>
               
                <StyledTableCell
                  style={{ cursor: "pointer" }}
                >
                  {row.mobile}
                </StyledTableCell>
                
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.state}</StyledTableCell>
                <StyledTableCell align="center">{row.destination}</StyledTableCell>
                <StyledTableCell align="center">{row.package}</StyledTableCell>
                <StyledTableCell align="center">{row.noOfPerson}</StyledTableCell>
               
               
                  {/* <StyledTableCell align="center">
                    <div
                      style={{ cursor: "pointer" }}
                      className={
                        row.isAssigned === false
                          ? s.inactive_admin
                          : s.active_admin
                      }
                    >
                      {`${row.isAssigned == true ? "Assigned" : "Unssigned"}`}
                    </div>
                  </StyledTableCell> */}
              
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        {allCustomers?.length <= 0 && <DataNotFound />}
        {allCustomers?.length > 0 && (
          <div className={s["pagination"]}>
            <Pagination
              count={pageLength}
              size="large"
              style={{ color: "#D21903" }}
              onChange={(e, value) => setpageCount(value)}
              page={pageCount}
            />
          </div>
        )}
      </div>
      {/* <DeletePopup
        open={deletePopup}
        name={deletename}
        close={() => setdeletePopup(!deletePopup)}
        onsubmit={() => {
          deleteuserFunc();
        }}
      /> */}
      <Loder loading={isLoading} />
    </div>
  );
};

export default CustomerTable;
