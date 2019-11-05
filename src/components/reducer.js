export const  reducer=(state={display1:"none",display2:"none",display3:"none",selectedFile: null},action)=>
{
    switch(action.type){
            case 'Block':
           if(action.popup==='category')
           {
               return {display1:"block",display2:"none",display3:"none"}
           }
           if(action.popup==='course')
           {
               return {display1:"none",display2:"block",display3:"none"}
           }
           if(action.popup==='instructor')
           {
               return {display1:"none",display2:"none",display3:"block"}
           }
           break;
            case 'None':
            if(action.popup==='category')
           {
               return {display1:"none",display2:"none",display3:"none"}
           }
           if(action.popup==='course')
           {
               return {display1:"none",display2:"none",display3:"none"}
           }
           if(action.popup==='instructor')
           {
               return {display1:"none",display2:"none",display3:"none"}
           }
           break;
           case 'file_select':
           return {...state,selectedFile:action.payload};
            default:
            return state;
    }

}