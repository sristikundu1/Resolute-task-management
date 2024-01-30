import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProviders";


const AddTask = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        const taskItem = {
            title: data.title,
            email: data.email,
            description: data.description,
            deadline: data.deadline
        }

        // console.log(taskItem)
       const res = fetch("https://resolute-task-management-default-rtdb.firebaseio.com/Tasks.json",{
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(taskItem)
       })

       if(res){
        toast.success(`${data.title} added to your task list`)
        reset();
       }
       else{
        toast.error("plesae fill the data ")
       }
    }

    return (
        <div>
            <h2 className="font-bold text-3xl text-center my-5 text-[#AC4425]">Add Task</h2>

            <div className="border bg-[#faf4d3] pt-24 mb-6 px-14  mx-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="w-full flex gap-3">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Task Title*</span>
                            </label>
                            <input {...register("title", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg " placeholder="Task Title..." type="text" name="title" id="title" />
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
                                <textarea {...register("description", { required: true })} className="w-full  border-2 p-4 pl-5 rounded-lg" placeholder="Task  Description" name="description" id="description" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Deadline</span>
                            </label>
                            <input {...register("deadline", { required: true })} required type="date" name="deadline" className="w-full h-12 border-2 p-4 pl-5 rounded-lg" />
                        </div>

                    </div>

                    <div className="flex justify-center">

                        <input className="text-[#FFF] btn font-extrabold uppercase mr-3 w-36 bg-[#006400] my-10 " type="submit" value="Add Task" />

                    </div>

                </form>
            </div>


        </div>
    );
};

export default AddTask;