import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {fetchAddList} from "../../redux/slices/lists";

export const AddList = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        data.user = user.data.userData._id;

        const req = await dispatch(fetchAddList(data))
        if (!req.payload) {
            return alert('Error register!');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='modal__list'>
            <input defaultValue="list 10" {...register('nameList')} />

            <input type="submit"/>
        </form>
    );
}