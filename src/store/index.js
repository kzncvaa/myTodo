import { makeObservable, computed, observable, action } from 'mobx';

class Store{
    tasks = [
        {id: 0, title: "task one", done: false},
        {id: 1, title: "task two", done: true},
        {id: 2, title: "task three", done: false},
    ];
    filter = "all";
    search = '';
    count = this.tasks.length;

    changeFilter(filter){
        console.log(this.count)
        this.filter = filter;
    }

    setTasks(payload){
        this.tasks = payload;
    }

    get sortedTasks(){
        return this.tasks
        .filter(task=>task.title.indexOf(this.search) !== -1)
        .slice()
        .sort((a,b) => (a.done === b.done ? 0 : a.done ? 1 : -1  ));
    }

    get activeTasksCount(){
        return this.tasks.filter(task => !task.done).length
    }
    get activeTasks(){
        return this.tasks
        .filter(task=>task.title.indexOf(this.search) !== -1).filter(task=>!task.done)
    }
    get doneTasks(){
        return this.tasks
        .filter(task=>task.title.indexOf(this.search) !== -1).filter(task=>task.done)
    }

    addTask(task){
        let tasks = this.tasks;
        tasks.push({
            id: this.count,
            title: task,
            done: false
        })
        this.setTasks(tasks);
        this.count++;
    }

    deleteTask(id){
        this.setTasks(this.tasks.filter(item => item.id !== id))
    }

    doneTask(id){
        const tasks = this.tasks;
        const index = tasks.map(task => task.id).indexOf(id);
        tasks[index].done = true;
        this.setTasks(tasks)
    }

    constructor(){
        makeObservable(this, {
            tasks: observable,
            activeTasks: computed,
            doneTasks: computed,
            sortedTasks: computed,
            addTask: action,
            deleteTask: action,
            doneTask: action,
            filter: observable,
            search: observable
        });
    }
}

export default new Store();