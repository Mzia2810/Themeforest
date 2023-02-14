import React, { useEffect, useState, useMemo } from "react"
import PropTypes from "prop-types"
import withRouter from "components/Common/withRouter"
import { isEmpty } from "lodash"

import { Button, Card, CardBody } from "reactstrap"
import { getOrders as onGetOrders } from "store/actions"

import EcommerceOrdersModal from "../Ecommerce/EcommerceOrders/EcommerceOrdersModal"
import { latestTransaction } from "../../common/data/dashboard"

import {
  OrderId,
  BillingName,
  Date,
  Total,
  PaymentStatus,
  PaymentMethod,
} from "./LatestTranactionCol"

import TableContainer from "../../components/Common/TableContainer"

const LatestTranaction = ({ props, apiData }) => {
  const [newapi, setNewApi] = useState([])

  // console.log('Transaction data : ',apiData);

  const [modal1, setModal1] = useState(false)

  const toggleViewModal = () => setModal1(!modal1)

  const columns = useMemo(
    () => [
      // {
      //   Header: "#",
      //   filterable: false,
      //   disableFilters: true,
      //   Cell: cellProps => {
      //     return <input type="checkbox" className="form-check-input" />;
      //   },
      // },
      {
        Header: "Order ID",
        accessor: "orderId",
        filterable: false,
        disableFilters: true,
        Cell: cellProps => {
          return <OrderId {...cellProps} />
        },
      },
      {
        Header: "Missing First Name",
        accessor: "billingName",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <BillingName {...cellProps} />
        },
      },
      {
        Header: "Affiliate",
        accessor: "orderdate",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Date {...cellProps} />
        },
      },
      {
        Header: "Missing Last Name",
        accessor: "total",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <Total {...cellProps} />
        },
      },
      {
        Header: "Missing Phone Number",
        accessor: "paymentStatus",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <PaymentStatus {...cellProps} />
        },
      },
      // {
      //   Header: "ID",
      //   accessor: "paymentMethod",
      //   disableFilters: true,
      //   Cell: cellProps => {
      //     return <PaymentMethod {...cellProps} />
      //   },
      // },
      {
        Header: "View Details",
        disableFilters: true,
        accessor: "view",
        Cell: cellProps => {
          return (
            <Button
              type="button"
              color="primary"
              className="btn-sm btn-rounded"
              onClick={toggleViewModal}
            >
             Download CSV
            </Button>
          )
        },
      },
    ],
    []
  )

  useEffect(() => {
    let d = []
    apiData.map(item => {
      let newobj = {
        orderId: item.idnumber,  
        billingName: item.Missing_First_Name,
        orderdate:item.affiliate,
        total: item.Missing_Last_Name,
        paymentStatus:  item.Missing_Phone_Number,
      //  methodIcon: item.idnumber,
        
        // paymentMethod: item.id,
      }
      d.push(newobj)
    })
    setNewApi(d)
  }, [])

  return (
    <React.Fragment>
      <EcommerceOrdersModal isOpen={modal1} toggle={toggleViewModal} />
      <Card>
        <CardBody>
          <div className="mb-4 h4 card-title">Latest Transaction</div>
          <TableContainer
            columns={columns}
            data={newapi}
            isGlobalFilter={false}
            isAddOptions={false}
            customPageSize={25}
          />
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

LatestTranaction.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
}

export default withRouter(LatestTranaction)
