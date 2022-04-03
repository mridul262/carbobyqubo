import * as React from "react";
import axios from "axios";
import { Dropdown, Input } from 'semantic-ui-react'
import { useState } from "react";
import Box from "@mui/material/Box";
import styles from './index.module.scss'
import { createNameClaim } from "@celo/contractkit/lib/identity/claims/claim";

interface Props {
  products: {name: string, price: number, currency: string, desc: string}[]
}
export default function ProductsDisplay(props: Props) {
  const { products } = props
  const [productsToSign, setProductsToSign] = useState([])

  const getProducts = async () => {
    /* add body to get request */
    const response = await axios.get("http://carbo-backend.herokuapp.com/get_product_id_for_merchant?merchant_id=1");
    console.log(response.data);
    // setProductsToSign(response.data)
  }
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  React.useEffect(() => {
    getProducts()
    setProductsToSign([
      {
        key: 'Product',
        value: '1',
        text: 'Product'
      }
    ])
  }, [])
  
  return (
      <div className={styles.productsDisplay}>
        <div className={styles.productsDisplayWrapper}>
          <p className={styles.cubo}>Carbo</p>
          <span className={styles.merchantName}>SIGNING FOR</span>
          <span className={styles.totalPrice}>XYZ Merchants</span>
          <Dropdown
            labeled
            label="Products"
            placeholder='Products'
            fluid
            search
            selection
            options={productsToSign}
            className={styles.dropdown}
            onChange={
              (event, data) => {
                // setEnergyType(data.value?.toString() || '');
              }}
          />
        </div>
      </div>
  );
}
