import { useContext, useEffect, useState } from "react";
import { getDatabase, ref, child, get, remove,update  } from "firebase/database";
import toast from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProviders";
import { useForm } from "react-hook-form";



const Home = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();

    const [data, setData] = useState({});
    const [selectedTaskId, setSelectedTaskId] = useState(null);

// show task 

    const fetchData = async () => {
        try {
            const dbRef = ref(getDatabase());
            const snapshot = await get(child(dbRef, "Tasks"));

            if (snapshot.exists()) {
                setData(snapshot.val());
            } else {
                setData({});
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
        
        return () => {
        };
    }, []);

// update task 
    const handleUpdate = async (updatedTaskData) => {
        try {
          const dbRef = ref(getDatabase(), `Tasks/${selectedTaskId}`);
          await update(dbRef, updatedTaskData);
          toast.success("Task updated!");
          fetchData();
          setSelectedTaskId(null); 
        } catch (error) {
          console.error("Error updating task:", error);
        }
      };
    
      const onSubmit = async (data) => {
        const updateTaskItem = {
          title: data.title,
          email: data.email,
          description: data.description,
          deadline: data.deadline,
        };
    
        if (selectedTaskId) {
          handleUpdate(updateTaskItem);
        } else {
          toast.error("please select a task")
        }
      };

      const handleUpdateButtonClick = (taskId) => {
        setSelectedTaskId(taskId);
        document.getElementById("my_modal_5").showModal();
      };

    //   delete task 

    const handleDelete = async (taskId) => {
        try {
            const dbRef = ref(getDatabase(), `Tasks/${taskId}`);
            await remove(dbRef);
            toast.success("task deleted!")
            fetchData();
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    return (
        <div>
            <div className="overflow-x-auto flex justify-center items-center">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#a3b18a]">
                        <tr>
                            <th></th>
                            <th>Task Name</th>
                            <th>Task Details</th>
                            <th>Due Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(data).map((id, index) => {
                            return (
                                <tr key={id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {data[id].title}
                                    </td>
                                    <td>
                                        {data[id].description}
                                    </td>
                                    <td>
                                        {data[id].deadline}
                                    </td>
                                    <td>
                                        <button className="btn"  onClick={() => handleUpdateButtonClick(id)}> update</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(id)} className="btn">delete</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

            <div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h2 className="font-bold text-3xl text-center my-5 text-[#AC4425]">Update Task</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="w-full flex gap-3">
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Task Title*</span>
                                    </label>
                                    <input  {...register("title", { required: true })} required   className="w-full h-12 border-2 p-4 pl-5 rounded-lg "  placeholder="Task Title..." type="text" name="title" id="title"  defaultValue={data[selectedTaskId]?.title || ""}  />
                                </div>

                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" defaultValue={user?.email} type="email" name="email" id="email" />
                                </div>

                            </div>

                            <div className="w-full flex gap-3">

                                <div className="w-full flex gap-3 mb-10">
                                    <div className="w-full">
                                        <label className="label">
                                            <span className="label-text text-[#444] font-semibold">Description</span>
                                        </label>
                                        <textarea {...register("description", { required: true })} className="w-full  border-2 p-4 pl-5 rounded-lg" placeholder="Task  Description" name="description" id="description" cols="30" rows="10"  defaultValue={data[selectedTaskId]?.description || ""} ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex gap-3">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-[#444] font-semibold">Deadline</span>
                                    </label>
                                    <input {...register("deadline", { required: true })} required type="date" name="deadline" className="w-full h-12 border-2 p-4 pl-5 rounded-lg" defaultValue={data[selectedTaskId]?.deadline || ""} />
                                </div>

                            </div>

                            <div className="flex justify-center">

                                <input className="text-[#FFF] btn font-extrabold uppercase mr-3 w-36 bg-[#006400] my-10 " type="submit" value="Update Task" />

                            </div>

                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>


        </div>
    );
};

export default Home;


