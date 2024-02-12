puts "Creating Tasks"
tasks = Task.create([

    { 
		title: "React",
		description: "open-source front-end JavaScript library"
	},

	{ 
		title: "major features of React",
		description: "JSX syntax"
	},

	{ 
		title: "DevTools",
		description: "open Chrome Extensions and check Allow access to file URLs"
	},

	{ 
		title: "Chrome for local files",
		description: "open Chrome Extensions and check Allow access to file URLs"
	},

	{ 
		title: "advantages of React over Vue.js",
		description: "Gives more flexibility in large apps developing"
	}
])
puts "Tasks Created"