export const DisplayBlock=(value)=>{
    return{
        type:'Block',
        popup:value
    };
}
export const DisplayNone=(value)=>{
    return{
        type:'None',
        popup:value
    };
}
export const DisplayImage=(value)=>{
    return{
        type:'file_select',
        payload:value
    }
}
//category
//course
//instructor