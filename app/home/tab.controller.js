/*global Firebase */
export default class TabController{
    constructor($scope,$stateParams,$firebaseObject, ToDoService){
        this.user = $stateParams.user;
        this.todos = ToDoService.getAll();
        this.ToDoService = ToDoService;
        this.editingToDo = null;
        console.log(this.todos);
    }   
    
    
    addTodo()
    {
        this.ToDoService.add({
                user: this.user,
                title: this.userText,
                completed:false
            });
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
				{ completed: false } : (status === 'completed') ?
				{ completed: true } : {};
    }
    
    editTodo(todo)
    {
        this.editingToDo = todo;
    }
    
    doneEditing(todo)
    {
        this.editingToDo = null;
        this.ToDoService.edit(todo);
    }
    
    markAll(isChecked)
    {
        for(var i=0;i<this.todos.length;i++)
        {
            if(this.todos[i].user == this.user)
            {
                this.todos[i].completed = isChecked;
            }
        }
    }
    
    removeTodo(toDo)
    {
        this.ToDoService.remove(toDo);
    }
}