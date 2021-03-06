# vue-table

> A simple vue.js table component

![screen shot 2017-04-05 at 2 56 45 pm](https://cloud.githubusercontent.com/assets/24377188/24687855/34ac2532-1a10-11e7-8f57-e1aa7104d045.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

# Description
This project contains a simple table component, which has sorting capabilities in each column.

# Usage
We can add the component globally by modifying our main.js file as follows:

``` javascript
import Table from './table.vue'
Vue.component('my-table', Table);
```

Then we can use the component:

``` html
<my-table action="http://localhost:5000/data1" caption="Hello:" class="table table-bordered"></my-table>
```

The action attribute represents the URI where table data can be obtained from and caption attribute provides an optional caption.

# Server
I have included an express server which serves the table data, this server may be launched as follows:

`npm run server`

# Data format
The data must be served as parsed JSON in the following form

``` json
{
  "data": [
         {"name": "Bernard", "age": 50, "weight": 200},
         {"name": "Pixie", "age": 12, "weight": 20},
         {"name": "Lion", "age": 200, "weight": 1000},
         {"name": "Will", "age": 80, "weight": 80},
       ]
}
```
