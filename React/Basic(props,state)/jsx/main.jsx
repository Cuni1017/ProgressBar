// 第13堂 defaultChecked跟Checked, Inline Style使用介紹，ClassName隨著State改變
// 使用defaultChecked，HTML的元素:checked才會跟著更改
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 1,
      checkBox: 0,
    };
  }
  handler = (e) => {
    let { name, value, type } = e.target;
    // console.log(name);
    // console.log(value);
    if (type == "checkbox" && this.state[name] == value) {
      value = null;
    }
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  };
  render() {
    // let style = { background: "red", color: "#fff" };
    // let radioStyle = { background: "blue", color: "#fff" };
    let radioButtonValues = [1, 2, 3];
    const ischeckBoxChecked = this.state.checkBox == "1";
    let className = ischeckBoxChecked ? "active" : "";
    return (
      <form>
        <label
          //   style={({ background: "red", color: "#fff" }, radioStyle, style)}
          className={className}
        >
          <input
            type="checkbox"
            name="checkBox"
            value="1"
            id=""
            defaultChecked={ischeckBoxChecked}
            onChange={this.handler}
          />
          CheckBoxValue
        </label>
        <div>
          {radioButtonValues.map((value) => {
            const checked = value == this.state.option;
            let className = checked ? "active" : "";
            return (
              <label className={className}>
                <input
                  type="radio"
                  name="option"
                  id=""
                  value={value}
                  onChange={this.handler}
                  defaultChecked={checked}
                />
                選項{value}
              </label>
            );
          })}
        </div>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

// // 第8堂 輸入即改變的網頁Input實作
// class InputTextWithPreview extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.handler = this.handler.bind(this); //使用箭頭函式就不用了，因為它會自己綁定this
//     this.state = {
//       title: "進度條JS",
//     };
//   }

//   handler = (e) => {
//     // console.log(e);
//     const { id, value } = e.target; //解構e.target 拿name, value
//     // console.log(name); //比較像抓HTML裡的節點?
//     // console.log([name]); //變成virable:title => this.state.title
//     // console.log(value);
//     // console.log([value]);
//     // #
//     // console.log(this.state);
//     // ##錯誤 等於說新增一個key叫name的，值是value在this.state上
//     // this.setState({ name: value });
//     // ##正確 直接寫 { name: value }的話變成name是key；[name]才會抓state裡的variable:['title']
//     this.setState({ [id]: value }, () => {
//       //因為setState是非同步 所以需要給函式來取得更新完的state
//       console.log(this.state);
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.title}</h1>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           value={this.state.title}
//           onChange={this.handler}
//         />
//       </div>
//     );
//   }
// }
// ReactDOM.render(<InputTextWithPreview />, document.getElementById("root"));

// 第7堂 state與props用途，常見的ES6參數傳遞
// import Result from "./Result.jsx";
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   countPlusOneHandler(e) {
//     // console.log(e);
//     // let count = this.state.count + 1;
//     // count++;
//     // this.setState({ count: this.state.count + 1 }); //key;variable

//     let { count } = this.state; //直接拿key
//     this.setState({ count: count + 1 });
//   }
//   render() {
//     return (
//       <div>
//         {/* 第一種寫法 */}
//         {/* <Result
//           count={this.state.count}
//           handler={this.countPlusOneHandler.bind(this)} //如果想要讓Result也有plusone功能
//         /> */}
//         {/* 第二種寫法 將this(Counter)的state全部傳進去 但好像不會傳Function:countPlusOneHandler，Result不能用plusOne*/}
//         <Result {...this.state} />
//         {/* 傳count, handler進Result.props */}
//         <button type="button" onClick={this.countPlusOneHandler.bind(this)}>
//           Click me!!
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById("root"));

// 第6堂 初探State
// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //   name: "12345",
//       value: "12345",
//     };
//   }
//   inputHandler(e) {
//     //此為一般函式宣告方式，this不是指向Test，所以使用inputHandler時需要bind(this)
//     console.log(e.target.value);
//     // this.state.value = "5432"; //錯誤方式
//     this.setState({ value: e.target.value });
//   }
//   render() {
//     return (
//       <div>
//         input <br />
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.inputHandler.bind(this)} //此onChange為React模擬出來的
//         ></input>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Test value="0" />, document.getElementById("root"));

// 第5堂 初探props
// import Title from "./Title.jsx";

// class ShoppingList extends React.Component {
//   constructor(props) {
//     console.log(props);
//     super(props);
//   }

//   render() {
//     return (
//       <div className="shopping-list">
//         {/* <Title/> 不能直接Return jsx語法 一定要包起來-> <div><Title/></div> */}
//         {/* className:React的關鍵字 表class */}

//         <Title />
//         <h1>Shopping List for {this.props.name}</h1>
//         {/*  {this.props.name} */}
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//           <li>{this.props.phone}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// let pbname = "ProgressBar";
// let pbPhone = "0912345678";
// ReactDOM.render(
//   <ShoppingList name={pbname} phone={pbPhone} />,
//   document.getElementById("root")
// );
// // ReactDOM.render(<Title />, document.getElementById("root"));
