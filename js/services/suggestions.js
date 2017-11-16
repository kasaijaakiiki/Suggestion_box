app.factory('suggestions', [function() {
	var demoSuggestions = {
		posts: [
          {
          	id: 1,
          	title: 'Free pizza at club meetings',
          	upvotes: 12,
          	comments: [
					{ 
						body: 'Sounds great!',
						upvotes: 5
					},
					{
						body:"I've got a coupon!",
                        upvotes: 1,
					}
				]
		  },
           {
           	id: 2,
          	title: 'End all club emails with Laffy Taffy Jokes',
          	upvotes: 9,
          	comments: [
                     {
                     	body:	'Awesome',
                        upvotes: 10
                     }
                  ]
          },
           {
           	id: 3,
			title: 'Retrofit water fountain with Gatorade',
			upvotes: 7,
			comments: [
                    {

                      body:  " ",
                      upvotes: 0	
                    }

			]
		   },
		    {
		    id: 4,
			title: 'I Love Atwooki Remmy Bahati',
			upvotes: 6,
			comments: [
                    {

                      body:  "Yes I do",
                      upvotes: 20	
                    }

			]
		   },
		  {
		  	id: 5,
			title: "Sing Bon Jovi's \"Living on a Prayer\" halfway through meetings",
			upvotes: 15,
			comments: [],
		  }
		]
	};
	return demoSuggestions;
}]);