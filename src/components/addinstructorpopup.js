
import React from 'react';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {DisplayNone,DisplayImage} from './action';
import Switch from 'react-input-switch';
import '../css/addinstructor.css';

function InstructorAddpopup()
{
    let fileData = null;
    let instructors={fname:'',lname:'',email:'',image:''};
    // let select = useSelector(state=>state.selectedFile)
    let dispatch=useDispatch();
    const [value, setValue] = useState('no');
    const Dummy = () => {
      return <Switch on="yes" off="no" value={value} onChange={setValue} />;
    };
    console.log(instructors);
   
// let filedata;
// let filehandle=(value)=>{
// console.log(value[0]);
// if (value.length > 0) {
// var fileToLoad = value[0];
// let fileReader = new FileReader();
// fileReader.onload = (e1) => {
// // console.log(e1.target.result);
// // let srcData = e1.target.result;
// instructors.image=e1.target.result;
// // let deta = srcData.split(",");
// // console.log(deta[1]);
// }
// fileReader.readAsDataURL(fileToLoad);
// }}
 
const fileChangedHandler =(e) =>{
 fileData = e.target.files[0];
console.log(fileData);
}
// const uploadHandler =() =>{
//     console.log(select)
// }
    return (<React.Fragment>
        <div className='instructor_popup'>
        </div>
        <div className='instructor_popup_box'>
          <h4 className='add_heading'>Add instructor<span><i class="fa fa-times close_icon" aria-hidden="true" onClick={()=>{dispatch(DisplayNone('instructor'))}}></i></span></h4>
          <hr/>
            <form class="ui form">
                <div class="field">
                    <label>First Name<span className='required_asterick'>*</span></label>
                    <input placeholder="First Name" required onChange={(e)=>{instructors.fname=e.target.value;
                    console.log(e.target.value);}}/>
                 </div>
                <div class="field">
                    <label>Last Name<span className='required_asterick'>*</span></label>
                    <input placeholder="Last Name" required onChange={(e)=>{instructors.lname=e.target.value;
                    console.log(e.target.value);}}/>
                 </div>
                <div class="field">
                    <label>E-mail<span className='required_asterick'>*</span></label>
                    <input placeholder="E-mail" required onChange={(e)=>{instructors.email=e.target.value;
                    console.log(e.target.value);}}/>
                </div>
                <p> Upload Image</p>
                <div className="upload-inline" >
    <div class="input-upload">
    <label class="viewImage" for="file-input">
    <img alt="" className="upload-image" src="
    https://lh3.googleusercontent.com/-wXESgc-C8qk/Xbko6QsIuBI/AAAAAAAAACI/EYA9rlw8VJcEG3Y3vDfl1CrFxlnqYkM_ACK8BGAsYHg/s0/uploadImg.png" />
    </label>
    <input id="file-input" type="file" onChange={fileChangedHandler}/>;
    </div> 
    <p className="note">Note:Image size should be less then 2MB </p>
    </div>
          
                <div className="status">
                  <span className="checkbox" style={{
          color: `${(value === 'no') ? 'black' : 'gray'}`
        }}>Status</span> 
                    
                  {Dummy()}
                   
                  <span className="checkbox" style={{
          color: `${(value === 'yes') ? 'black' : 'gray'}`
        }}>Active</span>
                </div>
                <br/>
                <div className='buttons_flex'>
                <button type="submit" class="ui grey button" onClick={()=>{
                dispatch(DisplayImage(fileData))}}>Save</button>
                <button type="submit" class="ui black basic button">Cancel</button>
                </div>
            </form>
        </div>
        </React.Fragment>
     );
    }
export default InstructorAddpopup;
//addinstructorpopup