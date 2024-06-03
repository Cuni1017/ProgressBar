import React from "react";
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons,
} from "@material/react-card";

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

import Radio, { NativeRadioControl } from "@material/react-radio";
import Checkbox from "@material/react-checkbox";
import TextField, { HelperText, Input } from "@material/react-text-field";

class ReceiptType extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    document.getElementById("byMail").value = "byMail";
    document.getElementById("promptRegistered").value = "promptRegistered";
  };

  // 新寫法 讓state在父層就被設好，並傳入用props寫
  removeValueFromArray = (array, value) => {
    // Array.prototype.filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
    return array.filter((element) => {
      return element != value;
    });
  };

  inputHandler = (e) => {
    const { name, value } = e.target; // 抓觸發的name跟value
    const { receipt, handler } = this.props; //抓App傳過來的state
    handler("receipt", { ...receipt, [name]: value });
  };
  checkBoxHandler = (e) => {
    const checkBoxParent = e.target.closest(".mdc-checkbox");

    const newValue = e.target.value;
    // Element.getAttribute() 函式會回傳該網頁元素的屬性。 如果該屬性不存在，其回傳值會是null或 "" (空字串)
    const name = checkBoxParent.getAttribute("attributeName"); //receiptOptions
    const { receipt, handler } = this.props;
    let values = receipt[name];

    if (values.includes(newValue)) {
      values = this.removeValueFromArray(values, newValue);
    } else {
      values.push(newValue);
    }
    // 如果實體寄送沒被checked，限時掛號也不能被checked
    if (name == "receiptOptions" && !values.includes("byMail")) {
      values = [];
    }
    handler("receipt", { ...receipt, [name]: values });
  };
  //   舊寫法 會導致網頁一直重新render
  //   handler = (e) => {
  //     const { name, value } = e.target;
  //     this.setState({ [name]: value }, () => {
  //       let result = this.checkIsReady();
  //       this.props.updateIsReceiptTypeReady(result);
  //       //   console.log(this.state);
  //     });
  //   };
  //   //傳array找裡面有沒有指定的value，有的話就刪除
  // removeValueFromArray = (array, value) => {
  //   // Array.prototype.filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
  //   return array.filter((element) => {
  //     return element != value;
  //   });
  // };

  //   checkBoxHandler = (e) => {
  //     const newValue = e.target.value;
  //     // Element.getAttribute() 函式會回傳該網頁元素的屬性。 如果該屬性不存在，其回傳值會是null或 "" (空字串)
  //     const name = e.target.getAttribute("attributeName"); //receiptOptions
  //     let values = this.state[name]; //[] from state : [byMail,promptRegistered]

  //     if (values.includes(newValue)) {
  //       values = this.removeValueFromArray(values, newValue);
  //     } else {
  //       values.push(newValue);
  //     }
  //     // 如果實體寄送沒被checked，限時掛號也不能被checked
  //     if (name == "receiptOptions" && !values.includes("byMail")) {
  //       values = [];
  //     }
  //     this.setState({ [name]: values }, () => {
  //       //   console.log(this.state);
  //     });
  //   };

  render() {
    // console.log(this.props);
    const { receipt, handler } = this.props;
    const { receiptType, taxId, receiptOptions } = receipt;
    return (
      <div>
        <Card>
          <CardPrimaryContent>
            <div style={{ padding: "1rem" }}>
              <Headline6 tag="p">發票類型</Headline6>
              <Body2 tag="div">
                <br />
                <Radio label="個人" key="personal">
                  <NativeRadioControl
                    type="radio"
                    name="receiptType"
                    value="2"
                    id="personal"
                    checked={receiptType == "2"}
                    onChange={this.inputHandler}
                  />
                </Radio>
                <br />
                <Radio label="公司" key="company">
                  <NativeRadioControl
                    type="radio"
                    name="receiptType"
                    value="3"
                    id="company"
                    checked={receiptType == "3"}
                    onChange={this.inputHandler}
                  />
                </Radio>
                <TextField
                  outlined
                  label="統一編號"
                  style={{ marginLeft: "1rem" }}
                >
                  <Input
                    type="text"
                    name="taxId"
                    value={taxId}
                    onChange={this.inputHandler}
                  />
                </TextField>
                <br />
                <br />
                <Headline6 tag="p">郵寄選項</Headline6>
                <br />
                <React.Fragment>
                  <Checkbox
                    name="receiptOptions[]"
                    attributeName="receiptOptions" //自己設的
                    nativeControlId="byMail"
                    // value="byMail" //因為套用MDC，用componentDidMount的方式去賦予value就好，否則有勾選的話，送出去的值會是on
                    checked={receiptOptions.includes("byMail")}
                    // Array.prototype.includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
                    onChange={this.checkBoxHandler}
                  />
                  <label htmlFor="byMail">實體寄送(+ $30)</label>
                </React.Fragment>
                <br />
                <React.Fragment>
                  <Checkbox
                    name="receiptOptions[]"
                    attributeName="receiptOptions"
                    nativeControlId="promptRegistered"
                    // value="promptRegistered" //同byMail
                    checked={receiptOptions.includes("promptRegistered")}
                    onChange={this.checkBoxHandler}
                    disabled={!receiptOptions.includes("byMail")}
                  />
                  <label htmlFor="promptRegistered">
                    限時掛號(再 + $30 = $60)
                  </label>
                </React.Fragment>
              </Body2>
            </div>
          </CardPrimaryContent>
        </Card>
      </div>
    );
  }
}

// class ReceiptType extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       receiptType: 2, //發票類型: 二聯or三聯
//       taxId: "", //統一編號
//       receiptOptions: [], //
//     };
//   }

//   handler = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value }, () => {
//       //   console.log(this.state);
//     });
//   };

//   removeValueFromArray = (array, value) => {
//     // Array.prototype.filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
//     return array.filter((element) => {
//       return element != value;
//     });
//   };

//   checkBoxHandler = (e) => {
//     const newValue = e.target.value;
//     // Element.getAttribute() 函式會回傳該網頁元素的屬性。 如果該屬性不存在，其回傳值會是null或 "" (空字串)
//     const name = e.target.getAttribute("attributeName"); //receiptOptions
//     let values = this.state[name]; //[] from state : [byMail,promptRegistered]

//     if (values.includes(newValue)) {
//       values = this.removeValueFromArray(values, newValue);
//     } else {
//       values.push(newValue);
//     }
//     // 如果實體寄送沒被checked，限時掛號也不能被checked
//     if (name == "receiptOptions" && !values.includes("byMail")) {
//       values = [];
//     }
//     this.setState({ [name]: values }, () => {
//       console.log(this.state);
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <span>發票類型</span>
//           <br />
//           <label>
//             <input
//               type="radio"
//               name="receiptType"
//               value="2"
//               checked={this.state.receiptType == "2"}
//               onChange={this.handler}
//             />
//             個人
//           </label>
//           <br />
//           <label>
//             <input
//               type="radio"
//               name="receiptType"
//               value="3"
//               checked={this.state.receiptType == "3"}
//               onChange={this.handler}
//             />
//             公司 統一編號
//             <input
//               type="text"
//               name="taxId"
//               value={this.state.taxId}
//               onChange={this.handler}
//             />
//           </label>
//         </div>
//         <br />
//         <br />
//         <div>
//           <span>郵寄選項</span>
//           <br />
//           <label>
//             <input
//               type="checkBox"
//               name="receiptOptions[]"
//               attributeName="receiptOptions" //自己設的
//               value="byMail"
//               checked={this.state.receiptOptions.includes("byMail")}
//               // Array.prototype.includes() 方法會判斷陣列是否包含特定的元素，並以此來回傳 true 或 false。
//               onChange={this.checkBoxHandler}
//             />
//             實體寄送(+ $30)
//           </label>
//           <br />
//           <label>
//             <input
//               type="checkBox"
//               name="receiptOptions[]"
//               attributeName="receiptOptions"
//               value="promptRegistered"
//               checked={this.state.receiptOptions.includes("promptRegistered")}
//               onChange={this.checkBoxHandler}
//               disabled={!this.state.receiptOptions.includes("byMail")}
//             />
//             限時掛號(再 + $30 = $60)
//           </label>
//         </div>
//       </div>
//     );
//   }
// }
export default ReceiptType;
