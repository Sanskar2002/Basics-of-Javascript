//Fetching the total sales using reduce function
let salesdata = [
  { product: "Laptop", price: 1200 },
  { product: "Keyboard", price: 200 },
  { product: "Mouse", price: 100 },
  { product: "Printer", price: 500 },
];

let totalSales = salesdata.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales);

//Sum of the elements of an array using reduce function
const arr = [0, 1, 2, 3, 4, 5];
const sum = arr.reduce((acc, sum) => acc + sum, 0);
console.log(sum);

//Fetching the inventories which are having stock <= 30 using filter function
let inventory = [
  { name: "WidgetA", stock: 30 },
  { name: "WidgetB", stock: 50 },
  { name: "WidgetC", stock: 20 },
  { name: "WidgetD", stock: 10 },
];

let lowStockItems = inventory.filter((item) => {
  return item.stock <= 30;
});

console.log(lowStockItems);

//Finding most active user using reduce funtion

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 35 },
  { user: "Sanskar", activityCount: 60 },
  { user: "Raunak", activityCount: 100 },
];

//Reduce() takes the first element of the array (Alice) as the initial maxUser.
//Then, it iterates over the remaining elements starting from the second element (Bob).
let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);

console.log(mostActiveUser);

//Build report of expenses
let expenses = [
  { des: "Groceries", amt: 50, category: "Food" },
  { des: "Electricity", amt: 100, category: "Utility" },
  { des: "Dinner", amt: 500, category: "Food" },
  { des: "Internet", amt: 100, category: "Utility" },
];

let expenseReport = expenses.reduce((report, expense) => {
  // Initialize the category if it doesn't exist
  report[expense.category] = (report[expense.category] || 0) + expense.amt;
  return report;
}, {});

//Always provide an initial value in reduce() when creating an object or number-based result.
//Without an initial value, reduce() takes the first array element, which may not be the correct format (leading to errors).
//Use {} for objects, [] for arrays, and 0 for numerical sums to ensure proper accumulation.

console.log(expenseReport);

//Sort the task according to their priority and filter out the not completed tasks
let tasks = [
    {description: "Write report", completed: false, priority: 2},
    {description: "Send email", completed: true, priority: 3},
    {description: "Prepare presentation", completed: false, priority: 1}
]

let pendingSortedTask = tasks.filter((task)=> task.completed==false).sort((a, b) => a.priority - b.priority);
console.log(pendingSortedTask.map((val) => val.description));

//Average movie rating
let movieRatings = [
    {title: "MovieA", ratings: [1, 2, 4]},
    {title: "MovieB", ratings: [5, 4, 4]},
    {title: "MovieC", ratings: [4, 5, 3]},
]

let averageRatings = movieRatings.map((movie) => {
    let total = movie.ratings.reduce((sum, rating) => sum+rating, 0);
    let avg = total/movie.ratings.length;
    return {title: movie.title, rating: avg.toFixed()};
})

console.log(averageRatings);