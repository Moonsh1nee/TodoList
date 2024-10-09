import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {fetchUpdateList} from "../../redux/slices/lists";

export const EditList = ({_id}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        data.user = user.data._id;
        data._id = _id;
        console.log(data);
        const req = await dispatch(fetchUpdateList(data))
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