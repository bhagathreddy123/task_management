puts "Creating Tasks"
users =  User.create!(
  [
    {first_name: "Jan", last_name: 'Doe', email: 'jan@example.com', password: "jan12345", password_confirmation: "jan12345"},
    {first_name: "Jane", last_name: 'Doe', email: 'jane@example.com', password: "jane12345", password_confirmation: "jane12345"}

  ]

)

tasks = Task.create([

    { 
		title: "React",
		description: "open-source front-end JavaScript library",
		user_id: 1,
		status: 'To Do'
	},

	{ 
		title: "major features of React",
		description: "JSX syntax",
		user_id: 1,
		status: 'In Progress'
	},

	{ 
		title: "DevTools",
		description: "open Chrome Extensions and check Allow access to file URLs",
		user_id: 2,
		status: 'In Progress'
	},

	{ 
		title: "Chrome for local files",
		description: "open Chrome Extensions and check Allow access to file URLs",
		user_id: 2,
		status: 'To Do'
	},

	{ 
		title: "advantages of React over Vue.js",
		description: "Gives more flexibility in large apps developing",
		user_id: 2,
		status: 'In Progress'
	}
])
puts "Tasks Created"