import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {

    let [axiosSecure] = useAxiosSecure();

    const [disabledButtons, setDisabledButtons] = useState([]);

    let { data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            let res = await axiosSecure('/classes')
            return res.data;
        }
    })

    console.log(classes);

    let approve = (id) => {
        axiosSecure.put(`/classes/approve/${id}`)
            .then(data => {
                refetch()
                console.log(data);
                disabledButtons.push(id)


            })



    }

    const isButtonDisabled = (buttonId) => {
        return disabledButtons.includes(buttonId);
    };


    let denied = (id) => {
        axiosSecure.put(`/classes/deny/${id}`)
            .then(data => {
                refetch()
                console.log(data);
                disabledButtons.push(id)
            })
    }
    let deniedID;
    let feedback = (id) => {
        deniedID = id
    }

    let sendFeedback = () => {
        let id = deniedID;
        console.log(id);
        let feedback = document.getElementById('feedback').value
        let finalFeedback = { feedback }
        console.log(finalFeedback);
        axiosSecure.put(`/classes/feedback/${id}`, finalFeedback)
            .then(data => {
                console.log(data.data);
                Swal.fire({
                    position: '',
                    icon: 'success',
                    title: `Feedback sent to Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }




    return (
        <div>
          
            <h1 className='text-center text-3xl font-semibold my-10'>Manage Classes</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Student</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Change Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            classes.map((item, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={item.cImage} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1>{item.cName}</h1>
                                </td>
                                <td>{item.iName}</td>
                                <td>{item.email}</td>
                                <td>{item.seat}</td>
                                <td>{item.student}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <th>
                                    <button disabled={isButtonDisabled(item._id)} onClick={() => approve(item._id)} className="btn btn-ghost btn-xs">Approve</button>
                                    <button disabled={isButtonDisabled(item._id)} onClick={() => denied(item._id)} className="btn btn-ghost btn-xs">Deny</button>
                                    <button disabled={isButtonDisabled(item._id)} onClick={() => feedback(item._id)}><button onClick={() => window.my_modal_5.showModal(item._id)} className="btn btn-ghost btn-xs">Send Feedback</button></button>
                                </th>
                            </tr>

                            )
                        }
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Feedback</h3>
                                <p className="py-4">
                                    <textarea id='feedback' placeholder="Reason of rejection" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                                </p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onClick={() => sendFeedback()} className="btn">Send</button>
                                </div>
                            </form>
                        </dialog>

                    </tbody>
                    {/* foot */}


                </table>
            </div>

        </div>
    );
};

export default ManageClasses;