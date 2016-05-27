/*global Firebase */
export default class TabController{
    constructor($scope,$stateParams,$firebaseObject, ToDoService){
        this.todos = [];
        this.user = $stateParams.user;
        this.data = ToDoService.getAll();
        this.ToDoService = ToDoService;
    }   
    
    
    addTodo()
    {
        this.ToDoService.add({
                user: this.user,
                title: this.userText,
                completed:false
            });
        /*this.todos.push({
            value:{
                user: this.user,
                title: this.userText,
                completed:false
            },
            editing: false
        });*/
    }
    
    
    onUser()
    {
        this.selectedTab = 'user';
    }
    
    onAll()
    {
        this.selectedTab = 'all';
    }
    
    onChangeStatus(status)
    {
        this.statusFilter = (status === 'active') ?
				{ value:{completed: false }} : (status === 'completed') ?
				{ value:{completed: true }} : {};
    }
    
    editTodo(todo)
    {
        todo.editing = !todo.editing;
        this.originalToDo = todo;
    }
    
    doneEditing(todo)
    {
        todo.editing = false;
        console.log(todo.editing);
    }
    
    removeTodo(toDo)
    {
        var index = this.todos.indexOf(toDo);
        this.todos.splice(index,1);
    }
}