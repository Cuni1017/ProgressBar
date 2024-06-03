import React, { createRef } from "react";
import TaiwanPostalCode from "../TaiwanPostalCode.json"; //改在父層引入在傳進來當props

// console.log(TaiwanPostalCode);

import {
  Body1,
  Body2,
  Button,
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  Subtitle1,
  Subtitle2,
} from "@material/react-typography";
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons,
} from "@material/react-card";
import TextField, { HelperText, Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import Select, { Option } from "@material/react-select";

class AddressPicker extends React.Component {
  constructor(props) {
    super(props); //將state寫在父層，才不用一直重新render
    // this.prostalCode = this.props.TaiwanPostalCodes;
    this.prostalCode = TaiwanPostalCode;
    this.cities = Object.keys(this.prostalCode);

    // this.div = createRef(); //此為解決送出去的select的name會變成enhanced的解決方案二
  }

  //  此為解決送出去的select的name會變成enhanced的解決方案二
  //   componentDidMount = () => {
  //     let enhanced_selects = this.div.current.querySelectorAll(
  //       "input[name='enhanced-select']"
  //     );
  //     // enhanced_selects.forEach((select) => {
  //     //   console.log(select.getAttribute("name"));
  //     // });
  //     enhanced_selects[0].name = "city";
  //     enhanced_selects[1].name = "district";
  //     // console.log(enhanced_selects);
  //   };

  handlerRelated = (name, value) => {
    let mergeObject = {};
    const { fullAddress, handler } = this.props;
    if (name == "city" && fullAddress.city != value) {
      //當更換city時，district和postalCode全部清空
      mergeObject["district"] = "";
      mergeObject["postalCode"] = "";
      //   console.log(mergeObject);
    } else if (name == "district" && fullAddress.district != value) {
      const cityData = this.prostalCode[fullAddress.city]; // XX市底下的Object{}
      const postalCode = cityData[value];
      mergeObject["postalCode"] = postalCode;
    }
    return mergeObject;
  };

  // https://github.com/material-components/material-components-web-react/tree/master/packages/select
  // 使用enhanced的select必須用這個
  onEnhancedChange = (name, index, item) => {
    // console.log(name);
    // console.log(index);
    // console.log(item);

    const { fullAddress } = this.props;
    let value = item.getAttribute("data-value");
    const mergeObject = this.handlerRelated(name, value);

    const { setFullAddress } = this.props;
    setFullAddress({ ...fullAddress, ...mergeObject, [name]: value });
    // this.setState({ value: item.getAttribute("data-value")
  };

  inputHandler = (e) => {
    const { name, value } = e.target; // 抓觸發的name跟value
    const { fullAddress } = this.props; //抓App傳過來的state
    const mergeObject = this.handlerRelated(name, value);
    // console.log(fullAddress);
    // console.log(mergeObject);

    const { setFullAddress } = this.props;
    setFullAddress({ ...fullAddress, ...mergeObject, [name]: value });
  };

  clearAddress = (e) => {
    const name = "address";
    const value = "";
    const { fullAddress } = this.props; //抓App傳過來的state
    const mergeObject = this.handlerRelated(name, value);

    const { setFullAddress } = this.props;
    setFullAddress({ ...fullAddress, ...mergeObject, [name]: value });
  };

  // mergeObject示範 ES6
  // let a = { a: 1 };
  // let b = { ...a, b: 2 };
  // let aa = { a: 3, ...b }; //後面的會蓋掉前面 => aa = {a: 1, b: 2}

  getCityOptions = (cities) => {
    return cities.map((city) => {
      return (
        <Option key={city} value={city}>
          {city}
        </Option>
        // <option key={city} value={city}>
        //   {/* 加入key讓他不用判斷是否需要重新render，較不耗效能 */}
        //   {city}
        // </option>
      );
    });
  };

  getDistrictOptions = (districts) => {
    return districts.map((district) => {
      return (
        <Option key={district} value={district}>
          {district}
        </Option>
      );
    });
  };

  render = () => {
    console.log("AddressPicker render");
    // console.log(this.prostalCode);
    const { fullAddress, handler } = this.props;
    // console.log(this.props);
    const cityOptions = this.getCityOptions(this.cities);
    const cityData = this.prostalCode[fullAddress.city]; // XX市底下的Object{}
    const districts = Object.keys(cityData); // XX市底下的Object[XX市] => 值:{XX區,XX區,...}
    const districtsOptions = this.getDistrictOptions(districts);
    // console.log(cityData);
    // console.log(districts);
    return (
      <div ref={this.div}>
        <Card>
          <CardPrimaryContent>
            <div style={{ padding: "1rem" }}>
              <Headline6 tag="p">寄送地址</Headline6>
              <Select
                label="城市"
                name="city"
                value={fullAddress.city}
                onEnhancedChange={this.onEnhancedChange.bind(this, "city")} //如果使用enhanced就要用這個，因為結構會改變
                // onChange={this.inputHandler} //不能用這個
                enhanced //如果原本沒有值，label(城市)會跟值(台北市)重疊，市/區同理
                outlined
              >
                {cityOptions}
              </Select>
              <input type="hidden" name="city" value={fullAddress.city} />
              <br />
              <br />
              <Select
                label="市/區"
                name="district"
                value={fullAddress.district}
                //因為傳回的東西找不到name，所以用bind(this, city)多傳一個name回去
                onEnhancedChange={this.onEnhancedChange.bind(this, "district")}
                // onChange={this.inputHandler}
                enhanced
                outlined
              >
                {districtsOptions}
              </Select>
              <input
                type="hidden"
                name="district"
                value={fullAddress.district}
              />
              <br />
              <br />
              <TextField outlined label="郵遞區號">
                <Input
                  name="postalCode"
                  value={fullAddress.postalCode}
                  disabled
                />
              </TextField>
              {/* 因為使用Material會改變我們的結構，送出去的值的key會跟原本寫的不一樣
              解決方案為，給一個input:hidden name和value都和所需的值一樣就可以 */}
              <input
                type="hidden"
                name="postalCode"
                value={fullAddress.postalCode}
              />
              <br />
              <TextField
                outlined
                label="地址"
                helperText={<HelperText>請輸入正確地址用以寄送商品</HelperText>}
                // leadingIcon={<MaterialIcon role="button" icon="home" />}
                onTrailingIconSelect={this.clearAddress}
                trailingIcon={
                  <MaterialIcon
                    role="button"
                    icon="delete"
                    style={{
                      position: "absolute",
                      right: "10px",
                    }}
                  />
                }
                style={{
                  marginTop: "1rem",
                  padding: "0 1rem",
                }}
              >
                <Input
                  type="text"
                  name="address"
                  onChange={this.inputHandler}
                  value={fullAddress.address}
                />
              </TextField>
            </div>
          </CardPrimaryContent>
        </Card>
      </div>
    );
  };
}

import { connect } from "react-redux";

const mapStatetoProps = (state, ownProps) => {
  return {
    fullAddress: state.fullAddress,
  };
};

import { setFullAddress } from "../redux/slices/fullAddressSlice";
const mapDispatchtoProps = {
  setFullAddress,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(AddressPicker);

// export default AddressPicker;
