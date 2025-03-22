//Calculate total sales
let salesdata = [
  { product: "Laptop", price: 1200 },
  { product: "Keyboard", price: 200 },
  { product: "Mouse", price: 100 },
  { product: "Printer", price: 500 },
];

const salesSum = salesdata.reduce((sum, sales) => sum + sales.price, 0);
// console.log(salesSum);

//Fetching the inventories which are having stock <= 30 using filter function
let inventory = [
  { name: "WidgetA", stock: 30 },
  { name: "WidgetB", stock: 50 },
  { name: "WidgetC", stock: 20 },
  { name: "WidgetD", stock: 10 },
];

const items = inventory.filter((value) => value.stock<=30);
// console.log(items);

//Finding most active user using reduce funtion
let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 35 },
  { user: "Sanskar", activityCount: 60 },
  { user: "Divya", activityCount: 100 },
];

const mostActiveUser = userActivity.reduce((maxUser, usser) =>
    usser.activityCount > maxUser.activityCount ? usser : maxUser, userActivity[0]
)
// console.log(mostActiveUser);

//Build report of expenses
let expenses = [
  { des: "Groceries", amt: 50, category: "Food" },
  { des: "Electricity", amt: 100, category: "Utility" },
  { des: "Dinner", amt: 500, category: "Food" },
  { des: "Internet", amt: 100, category: "Utility" },
];

//{'food: 550', 'Utility': 200}
const categoryWiseExpenses = expenses.reduce((report, expense) => {
    report[expense.category] = (report[expense.category] || 0) + expense.amt;
    return report;
}, {})

//suppose report is an excel sheet --> report[Food]
// console.log(categoryWiseExpenses);

//Sort the task according to their priority and filter out the not completed tasks
let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

const priorityTask = tasks.filter((value) => !value.completed).sort((a, b) => a.priority - b.priority);
// console.log(priorityTask);

//Average movie rating
let movieRatings = [
    {title: "MovieA", ratings: [1, 2, 4]},
    {title: "MovieB", ratings: [5, 4, 4]},
    {title: "MovieC", ratings: [4, 5, 3]},
]

const arr1 = [1, 2, 3, 4, 5]
arr1.map((value) => value * 4)


const averageRatings = movieRatings.map((arrr) => {
    const total = arrr.ratings.reduce((sum, rating) => sum + rating, 0);
    const avg = total/arrr.ratings.length;
    return {movie: arrr.title , rating: avg.toFixed()};
})

// console.log(averageRatings);
// console.log(movieRatings);

let person1 = {
  name: "Sanskar",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

let person2 = {
    name: "Divya"
};

person1.greet.call(person2);

const callPerson2 = person1.greet.bind(person2);
callPerson2();

