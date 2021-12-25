import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';
import { Button, Gap } from '../../../components';
import { options } from '../UserInfo/tableScript';
import swal from '@sweetalert/with-react'
import './product.scss'

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah Anda yakin akan menghapus data ini?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Data berhasil di hapus", {
        icon: "success",
      });
    } else {
      swal("Upps, data gagal di hapus");
    }
  });
}

const detailClick = (dispatch, id) =>{
  swal(
    <div>
      <h5 class="t-main-popup">Edit Product {id}</h5>
      <div class="box-popup">
        <p class="t-sub-popup remove-btm">Nama Produk</p>
        <p class="t-sub-sub-popup remove-btm">Deep Cleaning Shoe Man Express</p>
      </div>
      <div class="box-popup">
        <p class="t-sub-popup remove-btm">Deskripsi</p>
        <p class="t-sub-sub-popup remove-btm">Farhan syahreza putra farhan syahreza putra farhan syahreza putra farhan syahreza putra farhan syahreza putra farhan syahreza putra</p>
      </div>
      <div class="box-popup">
        <p class="t-sub-popup remove-btm">Harga</p>
        <p class="t-sub-sub-popup remove-btm">Rp 35000</p>
      </div>
      <div class="box-popup">
        <p class="t-sub-popup remove-btm">Durasi</p>
        <p class="t-sub-sub-popup remove-btm">3 Hari</p>
      </div>
    </div>
  )
}

const editClick = (dispatch, id) =>{
  swal(
    <div>
      <h5 class="t-main-popup">Detail Product {id}</h5>
      <div class="box-popup">
        <form>
          <p class="t-sub-popup remove-btm">Nama Produk</p>
          <input class="t-sub-sub-popup" type="text" value="John"></input>
          <p class="t-sub-popup remove-btm">Deskripsi</p>
          <input class="t-sub-sub-popup" type="text" value="John"></input>
          <p class="t-sub-popup remove-btm">Harga</p>
          <input class="t-sub-sub-popup" type="text" value="John"></input>
          <p class="t-sub-popup remove-btm">Durasi</p>
          <input class="t-sub-sub-popup" type="text" value="John"></input>
        </form>
      </div>
    </div>
  )
}

const Product = (props) => {
  const columns = [
  { 
    dataField: 'id',
    text: 'User Id' 
  },
  { 
    dataField: 'name', 
    text: 'Name' 
  },
  { 
    dataField: 'animal', 
    text: 'Animal' 
  },
  { 
    dataField: 'link', 
    text: 'Action',
    formatter: (rowContent, row) => {
      return(
        <div className="btn-detail">
          <Button title="Detail" className="btn-detail-table" onClick={() => detailClick(props.dispatch, row.id)}></Button>
          <Button title="Edit" className="btn-detail-table" onClick={() => editClick(props.dispatch, row.id)}></Button>
          <Button title="Hapus" className="btn-detail-table" onClick={() => handleClick(props.dispatch, row.id)}></Button>
        </div>
      )
    }
  }
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

  return (
    <div>
        <Gap height={70}/>
        <div className="t-box-admin">
            <p>Product</p>
        </div>
        <div className="box-admin-table border-left">
            <div className="box-admin-table-main">List of All Product</div>
            <div className="box-admin-table-sub">
                <BootstrapTable keyField='id' data={ data } columns={ columns } pagination={ paginationFactory(options) } />   
            </div>
      </div>
    </div>
  )
}

export default Product
