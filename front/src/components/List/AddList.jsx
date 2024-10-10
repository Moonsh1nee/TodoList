import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {fetchAddList} from "../../redux/slices/lists";
import React from "react";
import {modalListCreate} from "../../redux/slices/modals";

export const AddList = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        data.user = user.data._id;
        dispatch(modalListCreate())

        const req = await dispatch(fetchAddList(data))
        if (!req.payload) {
            return alert('Error register!');
        }
    };

    return (
        <div className="form__wrapper-list">
            <h2 className="form__title-list">Creating a list</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form__list'>
                <label>Title of list:
                    <input id='nameList' type="text" placeholder="Enter the name of the list" {...register("nameList", {
                        required: true,
                        max: 1,
                        min: 50
                    })} />
                </label>

                <label>Active list:
                    <input id='activeList' type="checkbox" defaultChecked={true} {...register('activeList')} />
                </label>

                <button type='submit' className='btn'>Send</button>
            </form>
        </div>
    );
}