# friends
Personal Project for making a friends database


## ENDPOINTS

### GET /
```json
{
    api: "API connected successfully"   
}
```

### GET /api/users
-- resolves to an array of all users -- detailed below
```json
{
    data: [
        {
            id: 1,
            first_name: "",
            last_name: "",
            birthday: ""
        }
    ]
}
```
### GET /api/posts
-- resolves to an array of all posts -- detailed below
```json
{
    data: [
        {
            id: 1,
            user_id: 1, //id of the user that made the post
            post_title: "",
            post_text: "",
            img: "" // this should be used as the img src
        }
    ]
}
```

### GET /api/users/:id
-- resolves to an array with the user object for the id given
```json
{
    data: [
        {
            id: 1,
            first_name: "",
            last_name: "",
            birthday: ""
        }
    ]
}
```

### GET /api/users/:id/posts
-- resolves to an array with all posts for the user id given
```json
{
    data: [
        {
            id: 1, // post id
            user_id: 1, //posters id
            post_title: "",
            post_text: "",
            img: ""
        }
    ]
}
```

### GET api/users/:id/posts/:postid
-- resolves to an array with the post for the userid and postid given
```json
{
    data: [
        {
            id: 1, // post id
            user_id: 1, //posters id
            post_title: "",
            post_text: "",
            img: ""
        }
    ]
}
```

### GET 

