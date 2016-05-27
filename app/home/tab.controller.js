export default class TabController{
    constructor($scope,$stateParams){
        this.todos = [];
        this.user = $stateParams.user
        this.userText = '';
    }
    
    addTodo()
    {
        this.todos.push({
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
    
    removeTodo(toDo)
    {
        var index = this.todos.indexOf(toDo);
        this.todos.splice(index,1);
    }
}