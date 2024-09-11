
const DB_KEY = "@test"

export const STORAGE_SERVICE = {
    listTasks: () => {
    const storage = localStorage.getItem(DB_KEY);

    if (storage) {
        return JSON.parse(storage)
    }

    return []
},

createTask: (taskDescription) => {
    const storage = localStorage.getItem(DB_KEY);

    const newTask = {
    description: taskDescription,
    isCompleted: false,
    }

    if (storage) {
        const storageParsed = JSON.parse(storage)

        const tasks = [...storageParsed, newTask]

        return localStorage.setItem(DB_KEY, JSON.stringify(tasks))
    }

    return localStorage.setItem(DB_KEY, JSON.stringify([newTask]))
},
deleteTask: (taskDescription) => {
    const storage = localStorage.getItem(DB_KEY);

    if (storage) {
    const storageParsed = JSON.parse(storage);

    // Filtra as tarefas, removendo a que corresponde à descrição
    const filteredTasks = storageParsed.filter(item => item.description !== taskDescription);

    return localStorage.setItem(DB_KEY, JSON.stringify(filteredTasks));
}

    return alert('Task not found');
},
updateTaskState: (taskDescription) => {
    const storage = localStorage.getItem(DB_KEY);

    if (storage) {
        const storageParsed = JSON.parse(storage)

        const updatedTask = storageParsed.map(item => {
            if (item.description === taskDescription) {
                return {
                ...item,
                isCompleted: !item.isCompleted
                }
            }
            return item
        })
        return localStorage.setItem(DB_KEY, JSON.stringify(updatedTask))
        }
    return alert('Task not found');
    }
}
