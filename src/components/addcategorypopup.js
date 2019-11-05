import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {DisplayNone} from './action';
import { Form,Button } from 'semantic-ui-react';
import Switch from 'react-input-switch';
import '../css/createNewCategory.css';

function Addcategorypopup()
{
   let dispatch=useDispatch();
    const [value, setValue] = useState('no');
    const Dummy = () => {
      return <Switch on="yes" off="no" value={value} onChange={setValue} />;
    };
  
    return (
      <div className="adding-elements" style={{
        display: `${'block'}`
      }}>
      <div className="content">
          <form>
              <div className="add-new">
                  <p className="remove">Create New Course Category
                      <span onClick={()=>{dispatch(DisplayNone('category'))}}>X</span>
                  </p>
              </div>
              <hr className="underline" />
              <div className="content-div">
                  <div className="unique-id "></div>
                  <p className="text-font">Name<span className="conditions-apply">*</span></p>
                  <Form.Field>
            <input placeholder='Course Name' className="input-style"   />
         </Form.Field>
                  <p className="text-font" >Description<span className="conditions-apply">*</span></p>
                  <textarea className="input-style2" placeholder="Write here" rows="3" cols="51"></textarea>
                  <p className="text-font" >Upload Image</p>
                
                  <div className="upload-inline">
                  <div class="input-upload">
  
                      <label class="viewImage" for="file-input">
                      <img alt="" className="upload-image" src="
https://lh3.googleusercontent.com/-wXESgc-C8qk/Xbko6QsIuBI/AAAAAAAAACI/EYA9rlw8VJcEG3Y3vDfl1CrFxlnqYkM_ACK8BGAsYHg/s0/uploadImg.png" />
                      </label>
  
                      <input id="file-input" type="file" src="pictures" /> 
                      </div>   
                      <p className="note">Note:Image size should be less then 2MB </p>
                      </div>
                       <div><span className="checkbox" style={{color: `${(value === 'no') ? 'black' : 'gray'}`}}>Status</span>  {Dummy()}  <span className="checkbox" style={{ color: `${(value === 'yes') ? 'black' : 'gray'}`}}>Active</span></div>
                  <div className="add-btn" style={{ display: `${'block'}`}}>
                        <Button  id="btn-save" content='Save' />
                            &nbsp;
                         <Button basic color='grey' content='Cancel' />
                  </div>
              </div>
          </form>
      </div>
  </div>
    )
  }
export default Addcategorypopup;