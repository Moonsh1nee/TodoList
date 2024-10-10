import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {fetchUpdateList} from "../../redux/slices/lists";
import {modalListEdit} from "../../redux/slices/modals";
import React from "react";

export const EditList = ({list}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        data.user = user.data._id;
        data._id = list._id;
        dispatch(modalListEdit())
        const req = await dispatch(fetchUpdateList(data))
        if (!req.payload) {
            return alert('Error register!');
        }
    };

    return (
        <div className="form__wrapper-list">
            <h2 className="form__title-list">Edit a list</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form__list'>
                <label>Title of list:
                    <input id='nameList' type="text" defaultValue={list.nameList}
                           placeholder="Enter the name of the list" {...register("nameList", {
                        required: true,
                        max: 1,
                        min: 50
                    })} />
                </label>

                <label>Active list:
                    <input id='activeList' type="checkbox"
                           defaultChecked={list.activeList} {...register('activeList')} />
                </label>

                <button type='submit' className='btn'>Send</button>
            </form>
        </div>
    );
}