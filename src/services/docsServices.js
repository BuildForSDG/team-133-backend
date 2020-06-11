

// Should contain a doc object
// with the item an endpoint returns/processes and endpoint with descriptions of each
// endpoints included: auth, file, forum,produce, transport


const docs = {

    // 1. auth api
    auth: {

        object: {
            name: 'Name',
            email: 'test@test.com'
        },

        // api list items
        items: {
            login: {
                api: '/api/user/login',
                description: 'User login endpoint'
            }
        }
    },

    // 2. File and image api
    file: {
   // this is a multi part form data eg 
   /*
   <form method="POST" action="/api/posts/" enctype="multipart/form-data">
    <div>
        <label>Select  image:</label>
        <input type="file" name="imageUrl" single />
    </div>
    <input type="text" name="title"/>
     <input type="text" name="author"/> ..etc..
    <div>
        <input type="submit" value="Upload" />
    </div>
</form> */
    },

    // 3. Forum api
    forum: {
     object: {
         title:'title of article',
         article: 'article itself',
         imageUrl:'image going with the article',
         author:'the writer of article',
         category:'what category it belongs to',
         comments:[{
             text:'the comment itself'
         }]
     },
     //posts/articles api
     postsList : {
              api: '/api/posts/',
              description:' uses GET to show all the articles'
     },
     post : {
        api: '/api/posts/:id',
        description:' uses GET to show a single article'
},
     create: {
         api:'/api/posts/',
         description:' uses POST to create an article'
     },
     update: {
        api:'/api/posts/:id',
        description:' uses PUT to modify an article'
    },
    delete: {
        api:'/api/posts/:id',
        description:' uses DELETE to delete an article'
    },


     //comments api
     commentsList : {
        api: '/api/posts/:id/comment',
        description:' uses GET to show all the comments under a particular article'
},

create: {
   api:'/api/posts/:id/comment',
   description:' uses POST to post a comment to an article'
},
update: {
  api:'/api/posts/comments/:commentId',
  description:' uses PUT to modify a comment'
},
delete: {
  api:'/api/posts/comments/:commentId',
  description:' uses DELETE to delete a comment'
}

    },
    //produce api
    produce: {
       
        object:{
            owner:'the owner of the product',
            product:'what the farmer is selling',
            description:'description of the product',
            weight:'weight of product ',
            unitPrice:'the cost for a single unit of the product',
            imageUrl:'the image of the product',
            location:'the location of the product/farmer'

        },
        produceList : {
            api: '/api/produce/',
            description:' uses GET to show all the produce'
   },
   produce : {
      api: '/api/produce/:id',
      description:' uses GET to show a single product'
},
   create: {
       api:'/api/produce/',
       description:' uses POST to post a product'
   },
   update: {
      api:'/api/produce/:id',
      description:' uses PUT to modify a product'
  },
  delete: {
      api:'/api/produce/:id',
      description:' uses DELETE to delete a product'
  },

    },

    // 4. Transport api
    transport: {

        object: {
            title: 'The title of the transport object.',
            owner: 'owner_id/user_id',
            categories: ['category_id1', 'category_id2'],
            description: 'Description about the item.',
            details: 'Additional details about the item',
            images: ['imgId1', 'imgId2'],
            isPublished: true
        },

        // api list items
        items: {

            itemList: {
                api: '/api/transport/',
                description: 'a GET request to this api endpoint returns a list of all \n'
                    + 'available transport items, will soon be searchable and filterable. '
            },

            item: {
                api: '/api/transport/5eb3079df907b8323cc22d7c',
                description: 'a GET request to this endpoint with a transport item id as \n'
                    + ' the param returns the relevant fields of the transport item, if available. '
            },

            create: {
                api: '/api/transport/',
                description: 'a POST request to this endpoint creates a transport item, \n'
                    + 'please see recommended item data structure above on how to structure the \n'
                    + 'object you send to this endpoint. NOTE: this is the same structure to pass to \n'
                    + 'the update endpoint below.'
            },

            update: {
                api: '/api/transport/5eb3079df907b8323cc22d7c',
                description: 'a PUT request to this endpoint, updates the item, one supplies as a \n'
                    + 'param in the url(id), with the item body described above (Transport object/item)'
            },

            delete: {
                api: '/api/transport/5eb3079df907b8323cc22d7c',
                description: 'a DELETE request to this url, will delete the transport item \n'
                    + 'whose id is the param in the url '
            }

        }

    }
}

// TODO:: refine this and call items (api list items) per api on request instead
module.exports = {
    docs
}
