<template>
  	<table>
  		<caption v-if="caption">{{ caption }}</caption>
  		<thead>
  			<tr>
	  			<th v-for="(header, i) in headers" @click="headingClicked" :data-index="i" class="unselectable">
	  			{{ header }} 
	  			<span v-if="i !== tableData.selectedCol" class="glyphicon glyphicon-sort"></span>
	  			<span v-else-if="tableData.sortAsc" class="glyphicon glyphicon-sort-by-attributes-alt"></span>
	  			<span v-else class="glyphicon glyphicon-sort-by-attributes"></span>
	  			</th>
  			</tr>
  		</thead>
  		<tbody>
  			<tr v-for="entry in tableData.data">
  				<td v-for="property in entry">{{ property }}</td>
  			</tr>
  		</tbody>
  	</table>
</template>

<script>

	export default {
		props: {
			'caption': null,
			'blankText': {
				default: ''
			},
			'action': {
				type: String,
				required: true,
			},
			'sortAsc': {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				tableData: {},
				headers: []
			};
		},
		methods: {
			headingClicked(event) {
				// Selects the clicked column
				var index = +event.target.getAttribute('data-index') || +event.target.parentNode.getAttribute('data-index');
				var key = event.target.textContent.toLowerCase().trim() || event.target.parentNode.textContent.toLowerCase().trim();
				
				if (index === this.tableData.selectedCol) {
					this.tableData.sortAsc = !this.tableData.sortAsc;
				} else {
					this.tableData.selectedCol = index;
				}

				this.sortCol(key);
			},
			sortCol(key) {
				var isString = this.tableData.data.some((obj) => typeof obj[key] === 'string');
				if (isString) {
					// sort string
					if (this.tableData.sortAsc)
						this.tableData.data.sort(function(a, b) {
							a = a[key];
							b = b[key];
							return a.toLowerCase().localeCompare(b.toLowerCase());
						});
					else
						this.tableData.data.sort(function(a, b) {
							a = a[key];
							b = b[key];
							return b.toLowerCase().localeCompare(a.toLowerCase());
						});
				} else {
					// sort numbers
					if (this.tableData.sortAsc)
						this.tableData.data.sort(function(a, b) {
							a = a[key];
							b = b[key];
							return b - a;
						});
					else
						this.tableData.data.sort(function(a, b) {
							a = a[key];
							b = b[key];
							return a - b;
						});	
				}
			}
		},
		mounted() {
			var req = new XMLHttpRequest();
			req.open('GET', this.action, true);
			req.addEventListener('load', () => {
				this.tableData = JSON.parse(req.responseText);
		
				this.tableData.data.forEach((entry) => {
					Object.keys(entry).forEach((key) => {
						if (this.headers.indexOf(key) === -1)
							this.headers.push(key);
					});
				});
				this.tableData.data.forEach((entry, i) => {
					this.headers.forEach((key) => {
						if (entry[key] == undefined)
							this.tableData.data[i][key] = this.blankText;
					})
				});
			});
			req.send(null);
		}
	}
</script>

<style scoped>
	*.unselectable {
	   -moz-user-select: -moz-none;
	   -khtml-user-select: none;
	   -webkit-user-select: none;

	   /*
	     Introduced in IE 10.
	     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
	   */
	   -ms-user-select: none;
	   user-select: none;
	}
	.glyphicon.glyphicon-sort {
		opacity: 0.5;
		float: right;
	}
	.glyphicon.glyphicon-sort-by-attributes-alt {
		float: right;
	}
	.glyphicon.glyphicon-sort-by-attributes {
		float: right;
	}
</style>
