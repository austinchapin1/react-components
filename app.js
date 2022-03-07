// TODO
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Cucumbers', 'Pickles', 'Apple']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map( item => (
      <GroceryListItem vegetable={item} candy={'trix'}/>
    ))}
  </ul>
);


var GroceryListItem = (props) => (
  <li>{props.vegetable}</li>
)


ReactDOM.render(<App />, document.getElementById('app'));








// ----------------------// ES6 Below



// class App {

//   constructor () {
//     <div>
//     <h2>Grocery List</h2>
//     <GroceryList items={['Cucumbers', 'Pickles']}/>
//   </div>
//   }
// };


// class GroceryList extends React.Component {

//   constructor (props) {
//   <ul>
//     {props.items.map(item =>
//       <GroceryListItem item={item} />
//     )}
//   </ul>
//   };
// };

// class GroceryListItem extends React.Component {

//   constructor (props) {
//     super(props);
//   }
//   render () {
//     <li>{this.props.todo}</li>
//   }
// }

// <GroceryListItem vegetable={cucumber} />

// // var cucumber = new GroceryListItem ();
// // var pickles = new GroceryListItem ();
// // var List = new GroceryList ();

// ReactDOM.render(<App />, document.getElementById('app'));