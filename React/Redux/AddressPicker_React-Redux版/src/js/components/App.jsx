import React, { Component } from "react";
import ReceiptType from "./ReceiptType.jsx";
import AddressPicker from "./AddressPicker.jsx";
import TaiwanPostalCode from "../TaiwanPostalCode.json";

import Button from "@material/react-button";
import { Cell, Grid, Row } from "@material/react-layout-grid";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   receipt: {
    //     receiptType: "", //發票類型: 二聯or三聯
    //     taxId: "", //統一編號
    //     receiptOptions: [], //
    //   },
    //   fullAddress: {
    //     city: "台北市",
    //     district: "中正區",
    //     postalCode: "100",
    //     address: "",
    //   },
    // };
  }
  handler = (name, value) => {
    this.setState({ [name]: value }, () => {
      //   console.log(this.state);
    });
  };
  checkReceiptTypeIsReady = () => {
    const { receipt } = this.props;
    let result = false;
    if (receipt.receiptType == 2) {
      result = true;
    } else if (
      receipt.receiptType == 3 && //選擇公司，且有填寫統一編號
      receipt.taxId != ""
    ) {
      result = true;
    }
    return result;
  };
  checkAddressPickerIsReady = () => {
    const { fullAddress } = this.props;
    let result = true;
    let fullAddressArray = Object.keys(fullAddress);
    fullAddressArray.forEach((element) => {
      //   console.log(this.state.fullAddress[element]);
      if (fullAddress[element] == "") result = false;
    });
    return result;
  };

  isReady = () => {
    return this.checkReceiptTypeIsReady() && this.checkAddressPickerIsReady();
  };

  // {/* destop:12 tablet:8 phone:4 */}
  render = () => {
    console.log("App render");
    // console.log(this.props);
    return (
      <form>
        <Grid>
          <Row>
            <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
            <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6}>
              <ReceiptType
              // handler={this.handler}
              // receipt={this.state.receipt}
              />
              <br />
            </Cell>
            <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
          </Row>
          <Row>
            <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
            <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6}>
              <AddressPicker
              // handler={this.handler}
              // fullAddress={this.state.fullAddress}
              // TaiwanPostalCodes={TaiwanPostalCode}
              />
              <br />
            </Cell>
            <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
            <br />
          </Row>
          <Row>
            <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
            <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6}>
              <Button outlined type="submit" disabled={!this.isReady()}>
                Submit
              </Button>
            </Cell>
            <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1}></Cell>
          </Row>
        </Grid>
      </form>
    );
  };
}

import { connect } from "react-redux";
const mapStatetoProps = (state, ownprops) => {
  return {
    fullAddress: state.fullAddress,
    receipt: state.receipt,
  };
};

export default connect(mapStatetoProps, null)(App);

// export default App;
