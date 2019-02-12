# HTTP API Endpoint for Checking and Unchecking a Task

Checking and unchecking a task will send a PATCH request to the server. Both success and error responses will return back the entire state of the todo app to guarantee integrity of front end data in both cases.

### Endpoint:

**PATCH** /api/task/:id

### Request Payload:

```
{
  task_id: Integer,
  completed_at: String
}
```

### Success Response

```
{
  success: true,
  payload: {...} // json object in /mockdata/mockdata.js
}
```

### Error Response

```
{
  success: false
  payload: {...} // json object in /mockdata/mockdata.js
  error: {
           code: 500,
           message: “Internal Server Error”
         }
}
```

[Payload json data for success and error can be found here.](https://github.com/lorecrafting/wonder-todo/blob/master/src/mockdata/mockdata.js)
