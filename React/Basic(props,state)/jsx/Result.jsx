// 第7堂 state與props用途，常見的ES6參數傳遞
// class Result extends React.Component {
//   constructor(props) {
//     //props為外面(main)傳過來的state，即<Result count={this.state.count} />裡的count
//     console.log("Result.props below");
//     console.log(props);
//     super(props);
//   }

//   render() {
//     const { count, handler } = this.props;
//     return (
//       <div>
//         <h1>Count: {count}</h1>
//         {/* // 如果想要影響外面的main; */}
//         <button type="button" onClick={handler}>
//           {/* {this.props.handler}為main傳來的state */}
//           Click me in Result
//         </button>
//       </div>
//     );
//   }
// }

// export default Result;
