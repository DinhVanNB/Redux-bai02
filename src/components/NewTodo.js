 import {useState} from 'react';
 import {useDispatch} from 'react-redux';
 import { addTodoAction } from '../redux/action';
 import {v4 as uuidv1} from "uuid";

 export default function NewTodo(){
    
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const onChange = ({target}) =>{
        setText(target.value);
    };

    const onSubmit = ()=>{
        dispatch(addTodoAction({
            id: uuidv1(),
            text: text
        }))
        setText('');
    }


    return(
        <div>
            <div className='d-flex'>
                <div className='col-md-6'>
                    <input type='text' placeholder='Enter a new task'
                        className=' form-control'
                        onChange={onChange}
                        value={text}
                    />
                </div>
                <div className='mx-sm-3 mb-2'>
                    <button className='btn btn-success' onClick={onSubmit} type='button'>Add</button>
                </div>
            </div>
            <hr/>
        </div>
    )
 }