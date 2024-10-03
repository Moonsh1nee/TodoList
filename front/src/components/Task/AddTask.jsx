import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddTask} from '../../redux/slices/tasks';

export const AddTask = ({_id}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        data.list = _id;
        data.user = user.data.userData._id;

        const req = await dispatch(fetchAddTask(data))
        if (!req.payload) {
            return alert('Error register!');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test23444" {...register('nameTask')} />

            <input type="submit"/>
        </form>
    );
};
