const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  res.send('Wow this is via Github much better!')
})

app.get('/api', (req,res) => {
	res.json([{
		"name" : "Tom",
		"fave_color" : "blue"
	},
		{
			"name" : "David",
			"fave_color" : "green"
		}])
});
app.listen(3000, () => console.log('Server running on port 3000'))