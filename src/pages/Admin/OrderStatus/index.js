import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Gap } from '../../../components';
import { options } from '../UserInfo/tableScript';
import './orderStatus.scss'

const columns = [
  { dataField: 'id', text: 'Invoice' },
  { dataField: 'name', text: 'Name' },
  { dataField: 'animal', text: 'Animal' },
]

const data = [
  { id: 1, name: 'George', animal: 'Monkey' },
  { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
  { id: 3, name: 'Alice', animal: 'Giraffe' },
  { id: 4, name: 'Alice', animal: 'Tiger' },
  { id: 5, name: 'Jeffrey', animal: 'Giraffe' },
  { id: 6, name: 'Alice', animal: 'Giraffe' },
  { id: 7, name: 'Alice', animal: 'Tiger' },
  { id: 8, name: 'Jeffrey', animal: 'Giraffe' },
  { id: 9, name: 'Alice', animal: 'Giraffe' },
  { id: 10, name: 'Alice', animal: 'Tiger' },
  { id: 11, name: 'Jeffrey', animal: 'Giraffe' },
  { id: 12, name: 'Alice', animal: 'Giraffe' },
  { id: 13, name: 'Alice', animal: 'Tiger' },
  { id: 14, name: 'Jeffrey', animal: 'Giraffe' },
  { id: 15, name: 'Alice', animal: 'Giraffe' },
  { id: 16, name: 'Alice', animal: 'Tiger' },
  { id: 17, name: 'Jeffrey', animal: 'Giraffe' },
  { id: 18, name: 'Alice', animal: 'Giraffe' },
  { id: 19, name: 'Alice', animal: 'Tiger' },
  { id: 20, name: 'Jeffrey', animal: 'Giraffe' },
]

const Shipment = () => {
  return (
    <div>
        <Gap height={70}/>
        <div className="t-box-admin">
            <p>Order Status</p>
        </div>
        <div className="box-admin-table border-left">
            <div className="box-admin-table-main">List of All Order Status</div>
            <div className="box-admin-table-sub">
                <BootstrapTable keyField='id' data={ data } columns={ columns } pagination={ paginationFactory(options) } />   
            </div>
      </div>
    </div>
  )
}

export default Shipment
