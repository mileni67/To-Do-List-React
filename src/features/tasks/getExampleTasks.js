export const getExampleTasks = async () => {
    const responce = await fetch("/To-Do-List-React/exampleTasks.json");

    if (!responce.ok) {
        new Error(responce.statusText);
    }

    return await responce.json();
};